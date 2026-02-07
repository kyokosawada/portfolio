interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-[#1e1e1e] rounded-md hover:border-[#14b8a6]/50 hover:bg-[#1a1a1a] transition-all duration-300 text-sm font-medium text-[#a0a0a0] hover:text-[#ededed]">
      {name}
    </span>
  );
}
