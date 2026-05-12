"use client";

import { useReveal } from "@/Hooks/Usereveal";

const projects = [
  {
    num: "01",
    year: "2024",
    badge: "Featured",
    tags: ["E-Commerce", "RAG", "AI Chatbot", "Full-Stack"],
    title: "Novel Haven",
    subtitle: "Online Bookseller Platform with AI Assistant",
    description:
      "A fully-featured online bookstore platform with a Retrieval-Augmented Generation (RAG) chatbot at the core of the customer experience. The chatbot understands the entire book catalog and delivers intelligent, context-aware recommendations — readers describe a mood, theme, or interest and the LLM surfaces precisely the right title. Built with a robust backend handling inventory, orders, and user management, paired with a clean, responsive frontend.",
    techStack: ["ASP.NET", "SQL Server", "Angular", "RAG / LLM", "TailwindCSS"],
    features: null,
  },
  {
    num: "02",
    year: "2024",
    badge: "Bachelor Project",
    tags: ["Web + Mobile", "Wellness", "LLM"],
    title: "Dance&Diet",
    subtitle: "Wellness & Performance Platform for Dance Trainees",
    description:
      "My bachelor graduation project — a cross-platform (web & mobile) ecosystem designed around the holistic wellness of dance trainees. Athletes log nutritional intake, track body measurements, and monitor dancing performance over time. An integrated LLM provides personalized diet plans calibrated to each trainee's body type, fitness level, and goals. The platform also features a full course management system where coaches upload structured training content, admins curate the catalog, and trainees subscribe to programs that match their level.",
    techStack: ["ASP.NET", "SQL Server", "Angular", "Mobile", "LLM", "TailwindCSS"],
    features: [
      { emoji: "🥗", label: "Nutrition AI" },
      { emoji: "💪", label: "Body Tracking" },
      { emoji: "🎓", label: "Courses" },
    ],
  },
  {
    num: "03",
    year: "2024",
    badge: "ACT-FOR-ISIMM Challenge",
    tags: ["Cross-Platform", "Ionic", "Mobile App", "University"],
    title: "GEST-ISIMM",
    subtitle: "Collaborative University Management App",
    description:
      "Built for the ACT-FOR-ISIMM challenge organized by the Higher Institute of Computer Science and Mathematics of Monastir. GEST-ISIMM bridges the gap between students, teachers, and the administration through a unified collaborative environment. Students stay up to date with university news and announcements in real time, while teachers and admins manage communications and resources — all within a single cross-platform mobile application.",
    techStack: ["Ionic", "TypeScript", "TailwindCSS", "REST APIs"],
    features: [
      { emoji: "📢", label: "News Feed" },
      { emoji: "🎓", label: "Students" },
      { emoji: "🏛️", label: "Admin" },
    ],
  },
  {
    num: "04",
    year: "2024",
    badge: "Game Dev",
    tags: ["2D Platformer", "Godot", "GDScript", "Game"],
    title: "Golden Knight",
    subtitle: "2D Platformer Game",
    description:
      "A 2D platformer game built from scratch with the Godot game engine. Golden Knight features classic side-scrolling platformer mechanics — precise movement, combat encounters, and level progression — crafted entirely in GDScript. The project was a deep dive into game architecture, physics-based movement, collision systems, and real-time state management, demonstrating that software engineering instincts translate powerfully into interactive entertainment.",
    techStack: ["Godot Engine", "GDScript", "2D Physics", "Level Design"],
    features: [
      { emoji: "⚔️", label: "Combat" },
      { emoji: "🗺️", label: "Levels" },
      { emoji: "🏆", label: "Progression" },
    ],
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="px-12 py-24">
      <div ref={ref} className="reveal flex items-center gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">03</span>
        <h2
          className="font-display font-light text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Projects
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(to right, #2a2a38, transparent)" }}
        />
      </div>

      <div>
        {projects.map((p, i) => (
          <div
            key={p.num}
            className={`project-card reveal ${i % 2 !== 0 ? "reveal-delay-1" : ""} grid md:grid-cols-[2rem_1fr_auto] gap-8 md:gap-12 py-12 border-b border-border cursor-default`}
          >
            {/* Number */}
            <span className="font-mono text-sm text-muted pt-1 text-right">{p.num}</span>

            {/* Body */}
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
                  {p.badge}
                </span>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="font-display font-light text-cream leading-tight mb-2"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                {p.title === "Dance&Diet" ? (
                  <>Dance<em className="text-accent not-italic">&amp;</em>Diet</>
                ) : (
                  p.title
                )}
              </h3>
              <p className="font-display italic text-muted2 text-base mb-5">{p.subtitle}</p>
              <p className="text-sm text-muted2 leading-loose max-w-2xl">{p.description}</p>

              {/* Feature tiles */}
              {p.features && (
                <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm">
                  {p.features.map((f) => (
                    <div key={f.label} className="bg-surface border border-border p-3 text-center">
                      <div className="text-2xl mb-1">{f.emoji}</div>
                      <div className="font-mono text-[10px] tracking-widest uppercase text-muted">
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {p.techStack.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-muted border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Year */}
            <span className="hidden md:block font-mono text-xs text-muted tracking-wide pt-1 whitespace-nowrap">
              {p.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}