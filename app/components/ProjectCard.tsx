import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  techStack,
  liveUrl,
  sourceUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="group bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-[#14b8a6] uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[#ededed] mb-2">{title}</h3>
        <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-[#0a0a0a] text-[#666666] rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#14b8a6] hover:text-[#2dd4bf] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] rounded"
          >
            View Site
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#666666] hover:text-[#a0a0a0] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] rounded"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
