const footerLinks = [
  { label: "GitHub", href: "https://github.com/gcpaps" },
  { label: "LinkedIn", href: "https://linkedin.com/in/giusippiapa" },
  { label: "Email", href: "mailto:giusippi.apa@email.com" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#666666]">
          &copy; {new Date().getFullYear()} Giusippi Maria II D. Apa. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-sm text-[#666666] hover:text-[#a0a0a0] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
