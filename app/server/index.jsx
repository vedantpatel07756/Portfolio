const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
const { EmailTemplate } = require('../components/resend/email-template');

const app = express();
const port = 3000;

const resend = new Resend('re_aCVeeaLT_PjeHjkUxnF9NFiW9CHUeLPdJ');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PUT, DELETE, PATCH',
  allowedHeaders: 'Content-Type',
}));

app.use(bodyParser.json());

app.post('/api/send', async (req, res) => {
    console.log("Hello");
  try {
    const { firstName, lastName, email, description } = req.body;

    const { data: emailResponse, error } = await resend.emails.send({
      from: email,
      to: ['delivered@resend.dev'],
      subject: `Connection request from ${firstName} ${lastName}`,
      react: EmailTemplate({ firstName, lastName, description }),
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json(emailResponse);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
