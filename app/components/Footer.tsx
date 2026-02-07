export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1e1e1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#666666]">
          &copy; {new Date().getFullYear()} Giusippi Maria II D. Apa. All rights reserved.
        </p>
        <a
          href="mailto:giusippi.apaii@gmail.com"
          className="text-sm text-[#666666] hover:text-[#a0a0a0] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
        >
          giusippi.apaii@gmail.com
        </a>
      </div>
    </footer>
  );
}
