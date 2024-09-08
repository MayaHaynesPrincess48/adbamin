import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, subject, message });
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-4 rounded-xl bg-[#fafbfe] p-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-bold text-neutral-950"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="h-[52px] w-full rounded-3xl border border-solid border-[#cecece] bg-white px-4 text-[16px] leading-[22px] text-[#848484]"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-neutral-950"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-[52px] w-full rounded-3xl border border-solid border-[#cecece] bg-white px-4 text-[16px] leading-[22px] text-[#848484]"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm font-bold text-neutral-950"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="h-[52px] w-full rounded-3xl border border-solid border-[#cecece] bg-white px-4 text-[16px] leading-[22px] text-[#848484]"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-neutral-950"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave us a message..."
          className="h-[151px] w-full rounded-3xl border border-solid border-[#cecece] bg-white px-4 py-2 text-[16px] leading-[22px] text-[#848484]"
          required
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-full">
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
