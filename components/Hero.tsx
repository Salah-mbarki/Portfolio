"use client";

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
        style={{
          background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)",
        }}
      />

      {/* Tag */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <span className="w-8 h-px bg-accent" />
        <span className="font-mono text-xs tracking-widest uppercase text-accent">
          Software Engineer
        </span>
      </div>

      {/* Name */}
      <h1
        className="font-display font-light leading-none tracking-tight mb-3 relative z-10"
        style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
      >
        Salah
        <br />
        <em className="text-accent not-italic font-light italic">Mbaki</em>
      </h1>

      {/* Role */}
      <p
        className="font-display font-light italic text-muted2 mb-10 relative z-10"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        Full-Stack Developer
      </p>

      {/* Description */}
      <p className="max-w-lg text-sm text-muted2 leading-loose mb-12 relative z-10">
        Building modern, scalable web applications — from intelligent data-driven
        backends to polished user interfaces. Passionate about integrating AI into
        real-world products.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 relative z-10">
        <button
          onClick={() => scrollTo("projects")}
          className="
            inline-flex items-center gap-2
            bg-accent text-black font-ui font-bold text-xs tracking-widest uppercase
            px-8 py-3 border border-accent
            hover:bg-accent2 hover:border-accent2 transition-all duration-200
          "
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17l10-10M7 7h10v10" />
          </svg>
          View Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="
            inline-flex items-center gap-2
            bg-transparent text-cream font-ui font-semibold text-xs tracking-widest uppercase
            px-8 py-3 border border-border2
            hover:border-muted2 transition-all duration-200
          "
        >
          Get In Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ animation: "bounce-scroll 2s infinite", transform: "translateX(-50%)" }}
      >
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #5a5a72, transparent)" }}
        />
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
          scroll
        </span>
      </div>
    </section>
  );
}