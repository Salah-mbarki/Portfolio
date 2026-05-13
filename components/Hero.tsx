"use client";

import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-12 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#1e1e28 1px, transparent 1px), linear-gradient(90deg, #1e1e28 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* Left accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-12 w-px h-full opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)" }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-center">

        {/* Left — text */}
        <div>
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-accent">
              Software Engineer
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-light leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(4rem, 9vw, 8rem)" }}
          >
            Salah
            <br />
            <em className="text-accent not-italic italic">Mbarki</em>
          </h1>

          {/* Role */}
          <p
            className="font-display font-light italic text-muted2 mb-10"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
          >
            Full-Stack Developer
          </p>

          {/* Description */}
          <p className="max-w-lg text-sm text-muted2 leading-loose mb-12">
            Building modern, scalable web applications — from intelligent
            data-driven backends to polished user interfaces. Passionate about
            integrating AI into real-world products.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 bg-accent text-black font-ui font-bold text-xs tracking-widest uppercase px-8 py-3 border border-accent hover:bg-accent2 hover:border-accent2 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 bg-transparent text-cream font-ui font-semibold text-xs tracking-widest uppercase px-8 py-3 border border-border2 hover:border-muted2 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right — photo */} 
        <div className="relative">
          {/* Decorative corner frames */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-accent opacity-60 z-10" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-accent opacity-60 z-10" />

          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, #c9a84c, transparent 70%)" }}
          />

          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/portfolio_pic.png"
              alt="Salah Mbaki"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            {/* Gold gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(201,168,76,0.2), transparent)" }}
            />
          </div>

          {/* Label below photo */}
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display italic text-muted2 text-sm">Salah Mbaki</span>
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase">Tunisia</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ animation: "bounce-scroll 2s infinite", transform: "translateX(-50%)" }}
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #5a5a72, transparent)" }} />
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">scroll</span>
      </div>
    </section>
  );
}