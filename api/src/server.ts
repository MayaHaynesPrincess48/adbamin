import React from "react";
import express, { Request, Response } from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";
import { render } from "@react-email/render";
import ContactFormEmail from "./emails/ContactFormEmail";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Get the base URL for the API
app.get("/", (req, res) => {
  res.send("Abdamin API");
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

// Define the structure of the email request
interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Route for handling email sending
app.post(
  "/api/send-email",
  async (req: Request<object, object, EmailRequest>, res: Response) => {
    const { name, email, subject, message } = req.body;

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
        to: "hassanhauda@gmail.com", // Your receiving email address
        reply_to: email, // Set reply-to as the sender's email
        subject: "New Contact Form Submission from Abdamin's Website",
        html: emailHtml,
      });

      console.log("Email sent successfully:", data);
      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        error: (error as Error).message,
        stack:
          process.env.NODE_ENV === "development"
            ? (error as Error).stack
            : undefined,
      });
    }
  },
);

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}

export default app;
