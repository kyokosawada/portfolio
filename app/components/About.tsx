import RevealOnScroll from "./RevealOnScroll";

const highlights = [
  { label: "9 Projects", description: "AI SaaS, Restaurants, E-Commerce, Professional" },
  { label: "AI-Powered", description: "Gemini AI, Vision APIs, Structured Output" },
  { label: "Modern Stack", description: "Next.js 16, React 19, Tailwind v4" },
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
                I&apos;m a developer who builds AI-powered web applications and
                polished digital experiences. From intelligent SaaS platforms
                with Gemini AI integration to sleek business websites, I bring
                ideas to life with clean code and thoughtful design.
              </p>
              <p>
                My focus is on AI-assisted development, modern frameworks, and
                shipping fast. I leverage tools like Claude Code and Cursor to
                build production-ready applications — combining AI capabilities
                with solid engineering fundamentals.
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
