"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import RevealOnScroll from "./RevealOnScroll";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  image: string;
}

const aiProjects: Project[] = [
  {
    title: "AI Analytics Dashboard",
    category: "AI / SaaS",
    description:
      "Upload any dataset (CSV, Excel, JSON) and get instant AI-powered charts, summary statistics, and natural language queries via Gemini 2.5 Flash.",
    techStack: ["Next.js", "Gemini AI", "Recharts", "Zod"],
    liveUrl: "https://ai-analytics-dashboard-beta.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ai-analytics-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "AI Feedback Analyzer",
    category: "AI / SaaS",
    description:
      "Import customer reviews and get AI-powered sentiment analysis, theme extraction, and actionable reports with batch processing.",
    techStack: ["Next.js", "Gemini AI", "Recharts", "Zod"],
    liveUrl: "https://ai-feedback-analyzer-lake.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ai-feedback-analyzer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "AI Invoice Processor",
    category: "AI / Vision",
    description:
      "Upload receipt images and PDFs — Gemini Vision extracts vendor, totals, and line items. Includes spending dashboards and category tracking.",
    techStack: ["Next.js", "Gemini Vision", "Recharts", "Zod"],
    liveUrl: "https://ai-invoice-processor-wine.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ai-invoice-processor",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "AI CRM Assistant",
    category: "AI / SaaS",
    description:
      "Manage contacts and deals with a Kanban pipeline, AI-powered lead scoring, smart follow-up drafts, and relationship insights.",
    techStack: ["Next.js", "Gemini AI", "DnD", "Recharts"],
    liveUrl: "https://ai-crm-assistant.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ai-crm-assistant",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    title: "AI Resume Screener",
    category: "AI / SaaS",
    description:
      "Paste job descriptions, upload PDF resumes, and let AI rank candidates with skill matching, gap analysis, and interview question generation.",
    techStack: ["Next.js", "Gemini AI", "pdf-parse", "Zod"],
    liveUrl: "https://ai-resume-screener-nine.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ai-resume-screener",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
  },
];

const webProjects: Project[] = [
  {
    title: "Ember & Oak",
    category: "Restaurant",
    description:
      "An upscale dining experience with online reservations, seasonal menus, and an immersive gallery showcasing the ambiance.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://ember-and-oak-eight.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/ember-and-oak",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    title: "Pulse Analytics",
    category: "SaaS",
    description:
      "A conversion-focused landing page for a startup analytics platform, featuring interactive demos and tiered pricing.",
    techStack: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://pulse-analytics-gamma.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/pulse-analytics",
    image: "https://picsum.photos/seed/dashboard/800/450",
  },
  {
    title: "Maison",
    category: "E-Commerce",
    description:
      "A luxury jewelry storefront with curated collections, smooth product filtering, and a refined shopping experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://maison-store-black.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/maison-store",
    image: "https://picsum.photos/seed/hero-jewelry1/800/450",
  },
  {
    title: "Hartwell & Associates",
    category: "Professional",
    description:
      "A sophisticated web presence for a law firm, highlighting attorney profiles, practice areas, and client testimonials.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://hartwell-associates-nine.vercel.app",
    sourceUrl: "https://github.com/kyokosawada/hartwell-associates",
    image: "https://picsum.photos/seed/hero-law/800/450",
  },
];

const tabs = [
  { id: "ai", label: "AI Applications", count: aiProjects.length, projects: aiProjects },
  { id: "web", label: "Web Design", count: webProjects.length, projects: webProjects },
] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("ai");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  // Reset carousel position when switching tabs
  useEffect(() => {
    setActiveIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  // Track which card is visible via scroll position
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / currentTab.projects.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, currentTab.projects.length - 1));
  }, [currentTab.projects.length]);

  // Scroll to a specific card when tapping a dot
  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / currentTab.projects.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

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
          <p className="text-[#a0a0a0] max-w-lg mb-8 md:mb-10">
            A selection of projects demonstrating AI integration, full-stack
            development, and polished web design.
          </p>
        </RevealOnScroll>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-[#14b8a6] text-[#0a0a0a]"
                    : "bg-[#111111] text-[#a0a0a0] border border-[#1e1e1e] hover:border-[#2a2a2a] hover:text-[#ededed]"
                }
              `}
            >
              {tab.label}
              <span
                className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id
                    ? "bg-[#0a0a0a]/20 text-[#0a0a0a]"
                    : "bg-[#1e1e1e] text-[#666666]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop: 2-column grid */}
        <div
          key={`desktop-${activeTab}`}
          className="hidden md:grid md:grid-cols-2 gap-6"
          style={{ animation: "fade-in-up 400ms ease-out forwards" }}
        >
          {currentTab.projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 100}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: Swipeable carousel */}
        <div className="md:hidden" key={`mobile-${activeTab}`}>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {currentTab.projects.map((project) => (
              <div
                key={project.title}
                className="snap-center shrink-0 w-[85vw] max-w-[340px]"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {currentTab.projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`
                  rounded-full transition-all duration-300
                  ${
                    activeIndex === i
                      ? "w-6 h-2 bg-[#14b8a6]"
                      : "w-2 h-2 bg-[#333333] hover:bg-[#555555]"
                  }
                `}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-xs text-[#666666] mt-3">
            Swipe to explore &middot; {activeIndex + 1} of {currentTab.projects.length}
          </p>
        </div>

        {/* Tab summary */}
        <p className="text-center text-sm text-[#666666] mt-8">
          {activeTab === "ai"
            ? "Built with Google Gemini AI, structured output via Zod, and real-time data processing."
            : "Pixel-perfect responsive designs with smooth animations and modern aesthetics."}
        </p>
      </div>
    </section>
  );
}
