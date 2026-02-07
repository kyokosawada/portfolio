import RevealOnScroll from "./RevealOnScroll";
import ProjectCard from "./ProjectCard";

import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Ember & Oak",
    category: "Restaurant",
    description:
      "An upscale dining experience with online reservations, seasonal menus, and an immersive gallery showcasing the ambiance.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://ember-and-oak.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ember-and-oak",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    title: "Pulse Analytics",
    category: "SaaS",
    description:
      "A conversion-focused landing page for a startup analytics platform, featuring interactive demos and tiered pricing.",
    techStack: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://pulse-analytics.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/pulse-analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Maison",
    category: "E-Commerce",
    description:
      "A luxury jewelry storefront with curated collections, smooth product filtering, and a refined shopping experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://maison-store.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/maison-store",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6d2?w=800&q=80",
  },
  {
    title: "Hartwell & Associates",
    category: "Professional",
    description:
      "A sophisticated web presence for a law firm, highlighting attorney profiles, practice areas, and client testimonials.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://hartwell-associates.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/hartwell-associates",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-[#1e1e1e]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <p className="text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ededed] mb-4 leading-[1.2] tracking-[-0.01em]">
            Featured Work
          </h2>
          <p className="text-[#a0a0a0] max-w-lg mb-12 md:mb-16">
            These are sample projects I&apos;ve built to showcase what I can create
            for your business. Each one demonstrates the kind of quality, polish, and
            attention to detail you can expect when working with me.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 150}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
