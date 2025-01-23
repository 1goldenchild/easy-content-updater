import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

interface ScheduleRequest {
  userReadingId: string;
  name: string;
  email: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userReadingId, name, email } = await req.json() as ScheduleRequest;
    
    // Schedule all 8 emails with 1-minute increments for testing
    const emailSequence = [
      { template: 'rolex', delay: 1 },
      { template: 'kardashian', delay: 2 },
      { template: 'musk', delay: 3 },
      { template: 'gates', delay: 4 },
      { template: 'jackson', delay: 5 },
      { template: 'jobs', delay: 6 },
      { template: 'carrey', delay: 7 },
      { template: 'china', delay: 8 }
    ];

    // Schedule each email
    for (const { template, delay } of emailSequence) {
      const scheduleTime = new Date(Date.now() + delay * 60 * 1000); // Convert minutes to milliseconds
      
      const command = {
        url: `${SUPABASE_URL}/functions/v1/send-styled-email`,
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: {
          to: [email],
          templateName: template,
          userData: { name }
        }
      };

      // Schedule the job using pg_cron
      const jobName = `send_${template}_email_${userReadingId}_${Date.now()}`;
      const cronExpression = `${scheduleTime.getMinutes()} ${scheduleTime.getHours()} ${scheduleTime.getDate()} ${scheduleTime.getMonth() + 1} *`;

      const { error } = await fetch(`${SUPABASE_URL}/rest/v1/rpc/schedule_email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          p_job_name: jobName,
          p_schedule: cronExpression,
          p_command: command
        })
      }).then(r => r.json());

      if (error) throw error;

      // Update email sequence status
      await fetch(`${SUPABASE_URL}/rest/v1/email_sequence_status`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_reading_id: userReadingId,
          sequence_position: delay - 1,
          last_email_sent: new Date().toISOString()
        })
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error('Error scheduling emails:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });
  }
});