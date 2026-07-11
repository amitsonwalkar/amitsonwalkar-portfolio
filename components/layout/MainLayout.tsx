import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {children}
    </main>
  );
}