import { Braces, Cloud, Database, GitBranch, Layers3, MonitorSmartphone, ShieldCheck, Wrench } from "lucide-react";

export const skillGroups = [
  {
    title: "Backend Engineering",
    icon: Braces,
    skills: ["Java", "J2EE", "Spring Boot", "REST APIs", "Microservices", "JPA", "Hibernate"],
  },
  {
    title: "Frontend & Apps",
    icon: MonitorSmartphone,
    skills: ["Angular", "TypeScript", "JavaScript", "Flutter", "HTML", "CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle", "PostgreSQL", "MongoDB", "DB2"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "SQS", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    title: "Quality & Observability",
    icon: ShieldCheck,
    skills: ["JUnit", "Mockito", "SonarQube", "Splunk", "Grafana", "Code Reviews"],
  },
  {
    title: "Architecture & Delivery",
    icon: Layers3,
    skills: ["System Design", "Reusable Components", "Sprint Planning", "Agile Delivery"],
  },
  {
    title: "Versioning & Tools",
    icon: GitBranch,
    skills: ["Git", "Bitbucket", "Maven", "Gradle", "Jira", "Confluence"],
  },
  {
    title: "Production Support",
    icon: Wrench,
    skills: ["Incident Analysis", "Root Cause Analysis", "Release Support", "Client Coordination"],
  },
];
