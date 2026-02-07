import RevealOnScroll from "./RevealOnScroll";
import TechBadge from "./TechBadge";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "HTML5",
  "CSS3",
  "Git",
  "Vercel",
  "REST APIs",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] mb-4 leading-[1.2] tracking-[-0.01em]">
            Technologies I Work With
          </h2>
          <p className="text-[#a0a0a0] max-w-md mx-auto mb-12">
            My core toolkit for building fast, modern web applications.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <RevealOnScroll key={skill} delay={i * 50}>
              <TechBadge name={skill} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
