"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div></div>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="
                font-mono text-xs font-semibold tracking-widest uppercase
                text-muted2 hover:text-cream transition-colors duration-200
                relative after:content-[''] after:absolute after:bottom-[-4px]
                after:left-0 after:right-0 after:h-px after:bg-accent
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                after:duration-300
              "
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
