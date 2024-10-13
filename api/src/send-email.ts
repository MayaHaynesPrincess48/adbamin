// api/send-email.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactFormEmail from "./emails/ContactFormEmail";
import dotenv from "dotenv";
import React from "react";

// Load environment variables
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the structure of the email request
interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body as EmailRequest;

    try {
      // Render the email HTML using the ContactFormEmail component
      const emailHtml = await render(
        React.createElement(ContactFormEmail, {
          name,
          email,
          subject,
          message,
        }),
      );

      // Send the email using Resend
      const data = await resend.emails.send({
        from: "noreply@abdamin.com",
        to: "hassanhauda@gmail.com",
        reply_to: email,
        subject: "New Contact Form Submission from Abdamin’s Website",
        html: emailHtml,
      });

      console.log("Email sent successfully:", data);
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
