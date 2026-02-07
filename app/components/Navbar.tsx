"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href) as HTMLElement | null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1e1e1e]"
        aria-label="Main navigation"
      >
        <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold text-[#14b8a6] focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
          >
            G.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded ${
                  activeSection === link.href
                    ? "text-[#ededed]"
                    : "text-[#a0a0a0] hover:text-[#ededed]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-[#ededed] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#ededed] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#ededed] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-[#a0a0a0] hover:text-[#ededed] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
