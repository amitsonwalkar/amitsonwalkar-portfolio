import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Let's talk about your next project",
)}&body=${encodeURIComponent(
  "Hi Amit,\n\nI'm reaching out about...\n\nBest,\n",
)}`;

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: emailHref,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View GitHub profile",
    href: siteConfig.github,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-4 py-24 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 border-y border-slate-900/10 py-16 dark:border-white/10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700 dark:text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Let&apos;s talk about dependable software delivery.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Available for engineering leadership, backend architecture, Java and Spring Boot delivery,
            integrations, and product-minded implementation work.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <MapPin className="size-5 text-sky-700 dark:text-cyan-300" aria-hidden="true" />
            <span>{siteConfig.location}</span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="grid gap-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 border border-slate-900/10 bg-slate-50 p-4 transition hover:border-sky-500/35 hover:bg-white hover:shadow-lg hover:shadow-slate-950/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/35 dark:hover:bg-white/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center bg-slate-950 text-white transition group-hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:group-hover:bg-cyan-200">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-slate-950 dark:text-white">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <ContactForm />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-slate-900/15 text-slate-900 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              <a href={siteConfig.resume} target="_blank" rel="noreferrer">
                Resume
                <Download aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
