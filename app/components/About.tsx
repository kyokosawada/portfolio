import RevealOnScroll from "./RevealOnScroll";

const highlights = [
  { label: "4+ Project Types", description: "Restaurants, SaaS, E-Commerce, Professional" },
  { label: "Modern Stack", description: "Next.js, React, Tailwind CSS" },
  { label: "Pixel-Perfect", description: "Responsive across all devices" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll>
            <p className="text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] mb-2 leading-[1.2] tracking-[-0.01em]">
              Crafting Digital Experiences
            </h2>
            <div className="w-12 h-0.5 bg-[#14b8a6] mt-2 mb-6" />
            <div className="text-[#a0a0a0] leading-relaxed space-y-4">
              <p>
                I&apos;m a freelance web developer who partners with businesses
                to build compelling web experiences. From sleek landing pages to
                full-featured web applications, I bring ideas to life with clean
                code and thoughtful design.
              </p>
              <p>
                My focus is on modern frameworks, clean architecture, and
                meticulous attention to detail. Every project is built to be
                fast, accessible, and visually polished — because first
                impressions matter.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-6 space-y-6">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-bold text-[#ededed]">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#666666]">{item.description}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
