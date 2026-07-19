import { Cloud, Code2, type LucideIcon } from "lucide-react";

export type Certificate = {
  title: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
};

export const certificates: Certificate[] = [
  {
    title: "Microsoft Applied Agentic AI: Systems Design & Impact",
    issuer: " Microsoft and Simplilearn",
    description: " The course trains professionals to build, orchestrate, and govern autonomous multi-agent systems using enterprise AI tools.",
    icon: Cloud,
  },
  {
    title: "AWS Developer",
    issuer: "Amazon Web Services",
    description: "Cloud development, deployment, security, and AWS service integration.",
    icon: Cloud,
  },
  {
    title: "Java",
    issuer: "Certificate details coming soon",
    description: "Core Java, object-oriented programming, and enterprise application development.",
    icon: Code2,
  },
  {
    title: "Python",
    issuer: "Certificate details coming soon",
    description: "Python programming, automation, and practical software development.",
    icon: Code2,
  },
  
];
