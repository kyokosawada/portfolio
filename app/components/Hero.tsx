"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <p
        className="text-sm font-medium text-[#14b8a6] tracking-wider uppercase mb-4 opacity-0"
        style={{ animation: "fade-in-up 600ms ease-out 0ms forwards" }}
      >
        Hello, I&apos;m
      </p>
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ededed] mb-4 leading-[1.1] tracking-[-0.02em] opacity-0"
        style={{ animation: "fade-in-up 600ms ease-out 100ms forwards" }}
      >
        Giusippi Maria II D. Apa
      </h1>
      <p
        className="text-xl md:text-2xl font-medium text-[#a0a0a0] mb-6 opacity-0"
        style={{ animation: "fade-in-up 600ms ease-out 200ms forwards" }}
      >
        Freelance Web Developer
      </p>
      <p
        className="text-base md:text-lg text-[#666666] max-w-lg mx-auto mb-10 opacity-0"
        style={{ animation: "fade-in-up 600ms ease-out 300ms forwards" }}
      >
        Building modern, polished web experiences for businesses that want to
        stand out.
      </p>
      <a
        href="#projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#14b8a6] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0d9488] transition-all duration-300 opacity-0 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        style={{ animation: "fade-in-up 600ms ease-out 400ms forwards" }}
      >
        View My Work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "pulse-soft 2s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
