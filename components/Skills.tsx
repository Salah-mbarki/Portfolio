"use client";

import { useReveal } from "@/Hooks/Usereveal";

const skills = [
  { name: "Angular",    icon: "devicon-angular-plain",     category: "Frontend Framework",    fill: "88%" },
  { name: "ASP.NET",    icon: "devicon-dotnetcore-plain",  category: "Backend / API",         fill: "82%" },
  { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", category: "Database",       fill: "80%" },
  { name: "TailwindCSS",icon: "devicon-tailwindcss-plain", category: "Styling",               fill: "90%" },
  { name: "Ionic",      icon: "devicon-ionic-original",    category: "Cross-Platform Mobile", fill: "78%" },
  { name: "Godot / Unity", icon: "devicon-godot-plain",    category: "Game Development",      fill: "72%" },
];

const extras = [
  "C#", "TypeScript", "REST APIs", "RAG Pipelines",
  "LLM Integration", "GDScript", "Git",
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      className="px-12 py-24 bg-surface border-t border-b border-border"
    >
      <div ref={ref} className="reveal flex items-center gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">02</span>
        <h2
          className="font-display font-light text-cream"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Tech Stack
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(to right, #2a2a38, transparent)" }}
        />
      </div>

      <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 border border-border">
        {skills.map(({ name, icon, category, fill }) => (
          <div
            key={name}
            className="group relative bg-surface hover:bg-surface2 p-8 transition-colors duration-300 border-r border-b border-border"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <i className={`${icon} text-4xl text-border2 group-hover:text-accent transition-colors duration-300 mb-4 block`} />
            <p className="font-ui font-bold text-base text-cream mb-1">{name}</p>
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted">{category}</p>
            <div className="mt-5 h-0.5 bg-border relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-accent transition-all duration-700 ease-out w-0 group-hover:w-full"
                style={{ "--fill": fill } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-3 mt-10">
        <span className="font-mono text-[11px] text-muted uppercase tracking-widest">Also familiar with:</span>
        {extras.map((e, i) => (
          <span key={e} className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted2">{e}</span>
            {i < extras.length - 1 && <span className="text-border2 select-none">·</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
