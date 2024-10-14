// import { EmailTemplate } from '@/app/components/resend/email-template';
// import type { NextApiRequest, NextApiResponse } from 'next';
// // import { EmailTemplate } from '../../components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend('re_aCVeeaLT_PjeHjkUxnF9NFiW9CHUeLPdJ');

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: EmailTemplate({  firstName:'jgon', lastName:'sd', description:'sdds'}),
//     });

//     if (error) {
//       res.status(400).json({ error });
//     }

//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// }

// pages/api/send.ts

import { EmailTemplate } from '@/app/components/resend/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate'; // Adjust the path if necessary
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, description } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: `Connection request from ${firstName} ${lastName}`,
        react: EmailTemplate({ firstName, lastName, description }),
      });

      if (error) {
        return res.status(400).json(error);
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

