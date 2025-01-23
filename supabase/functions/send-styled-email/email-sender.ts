import { corsHeaders } from "./cors.ts";

export const sendEmail = async (
  RESEND_API_KEY: string,
  to: string,
  subject: string,
  html: string
) => {
  console.log(`[email-sender] Attempting to send email to ${to} with subject: ${subject}`);
  
  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Numerology 33 <support@numerology33.com>",
        to: [to],
        subject,
        html,
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error(`[email-sender] Error response from Resend API:`, errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const emailData = await emailRes.json();
    console.log("[email-sender] Email sent successfully:", emailData);
    return emailData;
  } catch (error) {
    console.error("[email-sender] Error in sendEmail function:", error);
    throw error;
  }
};