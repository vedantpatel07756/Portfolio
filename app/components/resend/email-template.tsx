import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName:string;
  description:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  description,
}) => (
  <div>
    <h1>Hello Vedant,</h1>
    <h2>You got a connection Request from {firstName} {lastName}.</h2>
    <h2>There mentioned Description are : {description}</h2>

    <h3>${`(Note this email is Directly from your Developer Portfolio and maintained by resend Platform)`}</h3>
  </div>
);