import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import cvFile from '../../assets/CV_Adityo Dwi Saputro, A.Md.Kom.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center py-4 px-4 pointer-events-none">
      {/* Floating Minimal Menu Pill */}
      <nav
        className={`pointer-events-auto transition-all duration-300 flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full border ${
          scrolled
            ? 'bg-[#0d071a]/90 backdrop-blur-md border-purple-500/30 shadow-lg shadow-black/60'
            : 'bg-[#110922]/70 backdrop-blur-sm border-white/10'
        }`}
      >
        {/* Desktop Menu Buttons */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
          <a
            href="#about"
            className="px-3.5 py-1.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-3.5 py-1.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            Projects
          </a>
          <a
            href="#tech"
            className="px-3.5 py-1.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            Contact
          </a>

          <div className="w-[1px] h-4 bg-white/10 mx-1" />

          <a
            href={cvFile}
            download="CV_Adityo Dwi Saputro, A.Md.Kom.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-black bg-purple-300 hover:bg-purple-200 rounded-full font-semibold transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-between w-full gap-2">
          <span className="text-xs font-mono uppercase text-purple-300 font-semibold px-2">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-300 hover:text-white rounded-full hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-16 left-4 right-4 bg-[#0e071c] border border-purple-500/30 rounded-2xl p-5 space-y-3 shadow-2xl backdrop-blur-xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-purple-300 text-sm font-medium py-1.5"
          >
            About Me
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-purple-300 text-sm font-medium py-1.5"
          >
            Projects
          </a>
          <a
            href="#tech"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-purple-300 text-sm font-medium py-1.5"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-purple-300 text-sm font-medium py-1.5"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-white/10">
            <a
              href={cvFile}
              download="CV_Adityo Dwi Saputro, A.Md.Kom.pdf"
              className="flex items-center justify-center gap-2 py-2 bg-purple-300 hover:bg-purple-200 text-black font-semibold rounded-full text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}






