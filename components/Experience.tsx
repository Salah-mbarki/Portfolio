"use client";

import { useReveal } from "@/Hooks/Usereveal";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "ARSII",
    dates: "Feb 2026 — Jun 2026",
    description:
      "Contributed to the design and development of the web version of Dance & Diet, a multi-role platform for managing dance schools and tracking well-being. Collaborated directly with a non-technical client to gather requirements, clarify expectations, and refine features from feedback. Took part in the full development cycle, from analysing requests through implementing and testing new features.",
  },
  {
    role: "Full Stack Developer & Data Analyst",
    company: "KweekTech",
    dates: "Jul 2026 — Aug 2026",
    description:
      "Applied analytical and technical skills to process and interpret data in support of business needs. Developed a client-focused web application with Next.js, Convex, and Cloudinary, independently delivering analytical and technical solutions within a short timeframe.",
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="px-12 py-24 bg-surface border-t border-b border-border">
      <div ref={ref} className="reveal flex items-center gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">03</span>
        <h2
          className="font-display font-light text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Experience
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(to right, #2a2a38, transparent)" }}
        />
      </div>

      <div className="border-t border-border">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className={`project-card reveal ${index ? "reveal-delay-1" : ""} grid md:grid-cols-[2rem_1fr_auto] gap-6 md:gap-12 py-12 border-b border-border`}
          >
            <span className="font-mono text-sm text-muted pt-1 text-right">0{index + 1}</span>

            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">
                {experience.company}
              </p>
              <h3
                className="font-display font-light text-cream leading-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                {experience.role}
              </h3>
              <p className="text-sm text-muted2 leading-loose max-w-2xl">{experience.description}</p>
            </div>

            <time className="font-mono text-xs text-muted tracking-wide pt-1 whitespace-nowrap">
              {experience.dates}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}
