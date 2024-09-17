import React, { useState } from "react";
import clsx from "clsx";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace YOUR_FORM_ID with the actual form ID from Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "mx-auto w-full space-y-4 rounded-xl bg-[#fafbfe] p-6 md:max-w-md",
        className,
      )}
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-bold text-neutral-base"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="h-[52px] w-full rounded-3xl border border-solid border-neutral-10 bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-neutral-base"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-[52px] w-full rounded-3xl border border-solid border-neutral-10 bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-bold text-neutral-base"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="h-[52px] w-full rounded-3xl border border-solid border-neutral-10 bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-neutral-base"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave us a message..."
          className="h-[151px] w-full rounded-3xl border border-solid border-neutral-10 bg-white px-4 py-2 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send message"}
      </button>
      {submitStatus === "success" && (
        <p className="mt-2 text-sm text-green-600">
          Your message has been sent successfully!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mt-2 text-sm text-red-600">
          An error occurred. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
