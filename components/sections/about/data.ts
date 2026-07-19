import { siteConfig } from "@/config/site";
import { BriefcaseBusiness, Cloud, Code2, Database, HeartHandshake, UsersRound } from "lucide-react";
import type { Highlight, QuickFact } from "./types";

export const aboutIntro = {
  eyebrow: "About Me",
  heading: "I build reliable enterprise software with product-minded engineering.",
  paragraphs: [
    `I am ${siteConfig.name}, a ${siteConfig.title} based in ${siteConfig.location}. I bring ${siteConfig.yearsOfExperience} years of hands-on experience across fintech, retirement solutions, healthcare, education, and inventory domains.`,
    "My core strength is designing and delivering Java, Spring Boot, REST API, and microservices based platforms that teams can maintain, scale, and trust. I have worked across web applications, standalone systems, integrations, cloud environments, CI/CD pipelines, and production support.",
    "I enjoy turning complex business requirements into clean, reusable implementations, mentoring developers, and keeping delivery smooth through clear communication, code reviews, and practical technical decisions.",
  ],
  passion:
    "I am passionate about building systems that make real operations easier, faster, and more dependable for users and engineering teams.",
};

export const highlights: Highlight[] = [
  {
    title: "Enterprise Backend Engineering",
    description:
      "Deep Java, J2EE, Spring Boot, REST API, JPA, Hibernate, and microservices experience for business-critical systems.",
    icon: Code2,
  },
  {
    title: "Cloud-Ready Delivery",
    description:
      "Experience with AWS EC2, SQS, Docker, Kubernetes, CI/CD, Jenkins, SonarQube, Splunk, and Grafana.",
    icon: Cloud,
  },
  {
    title: "Domain Versatility",
    description:
      "Built solutions across retirement platforms, background verification, hospital management, education ERP, ad management, and inventory workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technical Leadership",
    description:
      "Led teams, owned modules, planned sprints, reviewed code, coordinated clients, and delivered with QA, BA, and onshore stakeholders.",
    icon: UsersRound,
  },
];

export const quickFacts: QuickFact[] = [
  { label: "Experience", value: siteConfig.yearsOfExperience },
  { label: "Current Role", value: siteConfig.currentRole },
  { label: "Location", value: siteConfig.location },
  { label: "Primary Stack", value: "Java, Spring Boot, REST APIs, Microservices" },
  { label: "Databases", value: "MySQL, Oracle, PostgreSQL, MongoDB, DB2" },
  { label: "Passion", value: "Reusable engineering, team delivery, and dependable products" },
];

export const profileHighlights = [
  { label: "API experience", value: "9+ years", icon: Database },
  { label: "Leadership", value: "Teams up to 20", icon: UsersRound },
  { label: "Domains", value: "FinTech, Healthcare, Education", icon: HeartHandshake },
];
