"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const inputClass =
  "w-full border border-slate-900/15 bg-white px-3 py-2.5 text-base text-slate-950 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 dark:border-white/15 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-300 dark:focus:ring-cyan-300/20";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    // Honeypot field: real visitors should leave this empty.
    if (form.website) {
      setStatus("success");
      setStatusMessage("Thanks — your message has been sent.");
      return;
    }

    const functionUrl = process.env.NEXT_PUBLIC_CONTACT_FUNCTION_URL;

    if (!functionUrl) {
      setStatus("error");
      setStatusMessage(
        "Message delivery is being configured. Please use the email link above for now.",
      );
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setForm(initialForm);
      setStatus("success");
      setStatusMessage("Thanks — your message has been sent. I’ll get back to you soon.");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again or use the email link above.");
    }
  }

  return (
    <div className="space-y-4">
      <Button
        type="button"
        size="lg"
        aria-expanded={isOpen}
        aria-controls="contact-form"
        onClick={() => {
          setIsOpen((open) => !open);
          setStatus("idle");
          setStatusMessage("");
        }}
        className="w-full bg-slate-950 text-white hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200 sm:w-auto"
      >
        Start Conversation
        <Send aria-hidden="true" data-icon="inline-end" />
      </Button>

      {isOpen && (
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="grid gap-5 border border-slate-900/10 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5 sm:p-6"
        >
          <div>
            <h3 className="font-heading text-2xl font-semibold">Start a conversation</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Tell me a little about what you&apos;re working on.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="contact-name">
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="contact-email">
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Subject" htmlFor="contact-subject">
            <input
              id="contact-subject"
              name="subject"
              required
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              className={inputClass}
            />
          </Field>

          <Field label="Message" htmlFor="contact-message">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClass} resize-y`}
            />
          </Field>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </div>

          {statusMessage && (
            <p
              role={status === "error" ? "alert" : "status"}
              className={
                status === "error"
                  ? "text-sm font-medium text-red-700 dark:text-red-300"
                  : "text-sm font-medium text-emerald-700 dark:text-emerald-300"
              }
            >
              {statusMessage}
            </p>
          )}

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
              {status === "sending" ? (
                <LoaderCircle className="animate-spin" aria-hidden="true" data-icon="inline-end" />
              ) : (
                <Send aria-hidden="true" data-icon="inline-end" />
              )}
            </Button>
            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
              Your details are used only to reply to your message.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
      {label}
      {children}
    </label>
  );
}
