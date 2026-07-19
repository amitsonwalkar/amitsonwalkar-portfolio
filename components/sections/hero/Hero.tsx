import Content from "./Content";
import HeroImage from "./Image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_28%,rgba(14,165,233,0.13),transparent_25%),radial-gradient(circle_at_88%_70%,rgba(20,184,166,0.12),transparent_24%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:gap-16">
        <Content />
        <HeroImage />
      </div>
    </section>
  );
}
