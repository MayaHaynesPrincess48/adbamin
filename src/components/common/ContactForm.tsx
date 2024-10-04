import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { AlertCircle, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setToast({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

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

  const closeToast = () => setToast(null);

  return (
    <div className="relative">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed right-4 top-4 z-50 w-full max-w-sm transform rounded-lg p-4 shadow-lg transition-all duration-500 ease-in-out ${
              toast.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {toast.type === "success" ? (
                  <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                ) : (
                  <AlertCircle className="mr-2 h-5 w-5 text-red-400" />
                )}
                <span className="text-sm font-medium">{toast.message}</span>
              </div>
              <button
                onClick={closeToast}
                className={`ml-4 inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  toast.type === "success"
                    ? "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600"
                    : "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600"
                }`}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
