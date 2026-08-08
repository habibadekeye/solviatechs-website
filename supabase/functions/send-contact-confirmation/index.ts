import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const submission: ContactSubmission = await req.json();

    const confirmationEmail = {
      to: submission.email,
      subject: "Thank you for contacting Solvia Systems & Innovations Ltd.",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0B1F2A; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; border-top: none; }
              .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 8px 8px; }
              .accent { color: #6DE5E8; }
              .button { display: inline-block; background: #0B1F2A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${submission.name}</h1>
              </div>
              <div class="content">
                <p>We have received your message and appreciate you reaching out to Solvia Systems & Innovations Ltd.</p>
                <p><strong>Your submission details:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${submission.name}</li>
                  <li><strong>Company:</strong> ${submission.company}</li>
                  <li><strong>Email:</strong> ${submission.email}</li>
                </ul>
                <p><strong>Your message:</strong></p>
                <p style="background: #f9fafb; padding: 15px; border-left: 4px solid #6DE5E8; border-radius: 4px;">${submission.message}</p>
                <p>Our team will review your inquiry and respond within one business day. We look forward to discussing how we can support your operational objectives.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Solvia Systems & Innovations Ltd. All rights reserved.</p>
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    console.log("Contact confirmation email prepared:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Confirmation email prepared",
        emailData: confirmationEmail 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact confirmation:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});