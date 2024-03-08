import { EmailTemplate } from "@/app/(modules)/authentication/(infrastucture)/(emails)/SendSignInWithoutPasswordLink"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const data = await resend.emails.send({
      text: 'Sign in without password',
      from: 'Acme <onboarding@resend.dev>',
      to: [body.email],
      subject: 'Sign in without password',
      react: EmailTemplate({ firstName: 'Humberto' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
