"use client";

import { useState, type FormEvent } from "react";
import RevealOnScroll from "./RevealOnScroll";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gcpaps",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/giusippiapa",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:giusippi.apa@email.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-[#1e1e1e]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <RevealOnScroll>
            <p className="text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] mb-4 leading-[1.2] tracking-[-0.01em]">
              Let&apos;s Work Together
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              Have a project in mind? I&apos;d love to hear about it. Send me a
              message and let&apos;s discuss how we can bring your vision to
              life.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#14b8a6] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-lg font-semibold text-[#ededed] mb-2">
                    Message sent!
                  </p>
                  <p className="text-sm text-[#a0a0a0]">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#a0a0a0] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg text-[#ededed] placeholder:text-[#666666] focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#a0a0a0] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg text-[#ededed] placeholder:text-[#666666] focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#a0a0a0] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg text-[#ededed] placeholder:text-[#666666] focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]/50 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#14b8a6] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0d9488] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
