import React, { useState } from "react";
import clsx from "clsx";
import { RefreshCw } from "lucide-react";
import Toast from "../ui/Toast";
import config from "../../utils/config";

interface ContactFormProps {
  className?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toastVisible, setToastVisible] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setToast({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      setToastVisible(true);
      return;
    }

    setIsSubmitting(true);
    setToast(null);
    setToastVisible(false);

    try {
      const response = await fetch(`${config.apiUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setToast({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setErrors({});
      } else {
        setToast({
          type: "error",
          message: "An error occurred. Please try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToastVisible(false)}
          isVisible={toastVisible}
          duration={5000}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "mx-auto w-full space-y-4 rounded-2xl border border-solid border-neutral-10/50 bg-[#fafbfe] p-6 md:max-w-md",
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
            className={`h-[52px] w-full rounded-3xl border border-solid ${
              errors.name ? "border-red-500" : "border-neutral-10"
            } bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
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
            className={`h-[52px] w-full rounded-3xl border border-solid ${
              errors.email ? "border-red-500" : "border-neutral-10"
            } bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
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
            className={`h-[52px] w-full rounded-3xl border border-solid ${
              errors.subject ? "border-red-500" : "border-neutral-10"
            } bg-white px-4 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
          )}
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
            className={`h-[151px] w-full rounded-3xl border border-solid ${
              errors.message ? "border-red-500" : "border-neutral-10"
            } bg-white px-4 py-2 text-[16px] leading-[22px] transition-all duration-200 ease-in-out placeholder:text-neutral-30 focus:border-primary-50 focus:outline-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
              <span>Submitting...</span>
            </div>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
