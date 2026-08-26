import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="px-12 py-8 border-t border-border flex justify-between items-center">
        <span className="font-display text-base text-muted">Salah Mbaki</span>
        <span className="font-mono text-xs text-muted tracking-widest">
          © 2026 — Built with Next.js & TailwindCSS
        </span>
      </footer>
    </main>
  );
}
