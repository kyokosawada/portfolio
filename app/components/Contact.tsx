"use client";

import RevealOnScroll from "./RevealOnScroll";

const EMAIL = "giusippi.apaii@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-[#1e1e1e]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] mb-4 leading-[1.2] tracking-[-0.01em]">
              Let&apos;s Work Together
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              Have a project in mind? I&apos;d love to hear about it. Reach out
              and let&apos;s discuss how we can bring your vision to life.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#14b8a6] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0d9488] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
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
              {EMAIL}
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
