import { ReactNode } from "react";
import { Navbar } from "@/components/navigation";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
    </main>
  );
}
