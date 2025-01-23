import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  name: string;
  dateOfBirth: string;
  sequencePosition?: number;
}

const supabase = createClient(
  SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE_KEY!
);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, name, dateOfBirth, sequencePosition = 1 } = await req.json() as EmailRequest;
    console.log("Received request to send email:", { to, name, dateOfBirth, sequencePosition });

    // Send email using Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Numerology 33 <support@numerology33.com>",
        to: [to],
        subject: `Your Numerology Reading - Part ${sequencePosition}`,
        html: `
          <div>
            <h1>Hello ${name},</h1>
            <p>Here is part ${sequencePosition} of your numerology reading.</p>
            <p>Based on your birth date: ${dateOfBirth}</p>
            <!-- Add more personalized content here -->
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Error sending email:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const emailData = await res.json();
    console.log("Email sent successfully:", emailData);

    // Update email sequence status
    const { data: userReading } = await supabase
      .from("user_readings")
      .select("id")
      .eq("email", to)
      .eq("date_of_birth", dateOfBirth)
      .single();

    if (userReading) {
      const { error: sequenceError } = await supabase
        .from("email_sequence_status")
        .upsert({
          user_reading_id: userReading.id,
          sequence_position: sequencePosition,
          last_email_sent: new Date().toISOString(),
        });

      if (sequenceError) {
        console.error("Error updating sequence status:", sequenceError);
      }
    }

    return new Response(JSON.stringify(emailData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-styled-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);