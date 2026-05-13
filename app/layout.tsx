import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salah Mbaki — Software Engineer",
  description:
    "Full-stack software engineer specializing in Angular, ASP.NET, SQL Server, and TailwindCSS. Building modern web applications with AI integration.",
  keywords: [
    "Salah Mbaki",
    "Software Engineer",
    "Angular",
    "ASP.NET",
    "Full Stack Developer",
    "Tunisia",
  ],
  authors: [{ name: "Salah Mbaki" }],
  openGraph: {
    title: "Salah Mbaki — Software Engineer",
    description: "Full-stack developer building modern, AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}