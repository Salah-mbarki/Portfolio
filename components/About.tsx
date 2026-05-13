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
        <div className="reveal reveal-delay-1 space-y-6">
          <p className="text-base text-muted2 leading-loose">
            I got into software because I liked breaking things and figuring out why.
            That curiosity turned into a degree, a few shipped projects, and a habit
            of not stopping until something actually works — not just compiles.
          </p>
          <p className="text-base text-muted2 leading-loose">
            Most of my work lives on the backend —{" "}
            <strong className="text-cream font-semibold">ASP.NET</strong> APIs,{" "}
            <strong className="text-cream font-semibold">SQL Server</strong> databases —
            but I care just as much about what the user sees. I build the frontend too,
            mostly with <strong className="text-cream font-semibold">Angular</strong> and{" "}
            <strong className="text-cream font-semibold">TailwindCSS</strong>.
          </p>
          <p className="text-base text-muted2 leading-loose">
            Lately I&apos;ve been deep into AI integration — not the hype side,
            but the practical side. Getting an LLM to actually behave inside a real
            product, with real users, is a different problem entirely. I enjoy that problem.
          </p>

          {/* Contact info */}
          <div className="pt-2 space-y-0">
            <InfoRow icon="mail" href="mailto:mbarkisalah145@gmail.com">
              mbarkisalah145@gmail.com
            </InfoRow>
            <InfoRow icon="phone" href="tel:+21629227023">
              +216 29 227 023
            </InfoRow>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal reveal-delay-2 flex flex-col gap-0">
          {[
            {
              year: "May 2025",
              title: "Golden Knight",
              note: "Built a 2D platformer in Godot for fun. Learned that game dev and software engineering share more than you'd think.",
            },
            {
              year: "Sep 2025",
              title: "Novel Haven",
              note: "Built a full bookstore platform and wired a RAG chatbot into it. First time shipping an LLM feature end-to-end.",
            },
            {
              year: "Oct 2025",
              title: "GEST-ISIMM",
              note: "Competed in ACT-FOR-ISIMM. Built a cross-platform university app in Ionic connecting students, teachers and admin.",
            },
            {
              year: "Jun 2026",
              title: "Dance & Diet",
              note: "Bachelor graduation project — web & mobile wellness platform with an integrated diet recommendation LLM.",
            }
          ].map(({ year, title, note }, i, arr) => (
            <div key={title} className="flex gap-5 group">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 bg-border2 mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
                  {year}
                </span>
                <p className="font-ui font-semibold text-cream text-sm mt-0.5 mb-1">{title}</p>
                <p className="text-xs text-muted2 leading-relaxed">{note}</p>
              </div>
            </div>
          ))}
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