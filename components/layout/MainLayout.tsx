import { ReactNode } from "react";
import { Navbar } from "@/components/navigation";
import { BackgroundBlobs, PageTransition } from "@/components/motion";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <BackgroundBlobs />
      <Navbar />
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
