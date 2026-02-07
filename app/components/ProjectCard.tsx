interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  category,
  description,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300">
      <div className="relative w-full aspect-video bg-[#0a0a0a] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#111111] group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-[#14b8a6] uppercase tracking-wider">
            {category}
          </span>
          <span className="text-[#666666] group-hover:text-[#14b8a6] group-hover:translate-x-1 transition-all duration-300" aria-hidden="true">
            &rarr;
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[#ededed] mb-2">{title}</h3>
        <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-[#0a0a0a] text-[#666666] rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
