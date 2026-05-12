"use client";

import { useReveal } from "@/Hooks/Usereveal";

const stats = [
  { num: "2+", label: "years experience" },
  { num: "6", label: "core technologies" },
  { num: "4", label: "shipped products" },
  { num: "AI", label: "integration focus" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="px-12 py-24">
      {/* Header */}
      <div ref={ref} className="reveal flex items-center gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">01</span>
        <h2
          className="font-display font-light text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          About
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(to right, #2a2a38, transparent)" }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="reveal reveal-delay-1 space-y-5">
          <p className="text-base text-muted2 leading-loose">
            I&apos;m a{" "}
            <strong className="text-cream font-semibold">software engineer</strong>{" "}
            specializing in full-stack development with a strong focus on clean
            architecture, scalable APIs, and intelligent system design.
          </p>
          <p className="text-base text-muted2 leading-loose">
            My work spans from enterprise-grade{" "}
            <strong className="text-cream font-semibold">ASP.NET</strong> backends and{" "}
            <strong className="text-cream font-semibold">SQL Server</strong> data modeling
            to reactive <strong className="text-cream font-semibold">Angular</strong>{" "}
            frontends styled with{" "}
            <strong className="text-cream font-semibold">TailwindCSS</strong>.
          </p>
          <p className="text-base text-muted2 leading-loose">
            I have hands-on experience integrating{" "}
            <strong className="text-cream font-semibold">LLMs and RAG pipelines</strong>{" "}
            into production applications — building AI-powered features that genuinely
            improve user experience rather than just ticking a checkbox.
          </p>

          {/* Contact info */}
          <div className="pt-4 space-y-0">
            <InfoRow icon="mail" href="mailto:mbarkisalah145@gmail.com">
              mbarkisalah145@gmail.com
            </InfoRow>
            <InfoRow icon="phone" href="tel:+21629227023">
              +216 29 227 023
            </InfoRow>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-2">
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="border-l border-border2 pl-6 flex flex-col"
              >
                <span
                  className="font-display font-light text-accent leading-none"
                  style={{ fontSize: "3rem" }}
                >
                  {num}
                </span>
                <span className="font-mono text-xs tracking-widest text-muted2 uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  href,
  children,
}: {
  icon: "mail" | "phone";
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 py-3 border-b border-border text-sm text-muted2 hover:text-accent transition-colors duration-200"
    >
      {icon === "mail" ? (
        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
        </svg>
      )}
      {children}
    </a>
  );
}