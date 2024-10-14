import { EmailTemplate } from '../components/resend/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_aCVeeaLT_PjeHjkUxnF9NFiW9CHUeLPdJ');

export async function POST(data: { firstName: string; lastName: string; email: string; description: string }) {
  try {
    const { firstName, lastName, email, description } = data;
    
    // Generate the email content using the EmailTemplate
    const { data: emailResponse, error } = await resend.emails.send({
      from: email, // Use the user-provided email here
      to: ['delivered@resend.dev'],
      subject: `Connection request from ${firstName} ${lastName}`, // Include the sender's name in the subject
      react: EmailTemplate({ firstName, lastName, description }), // Pass the data here
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(emailResponse);
  } catch (error) {
    console.log("Fail");
    return Response.json({ error }, { status: 500 });
  }
}
