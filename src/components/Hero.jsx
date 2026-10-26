import { useState, useEffect } from 'react';
import { Download, ArrowDown, Code2, Terminal, Sparkles } from 'lucide-react';
import Lanyard from './reactbits/Lanyard';
import MoltenMetal from './reactbits/MoltenMetal';
import TextType from './reactbits/TextType';
import cvFile from '../../assets/CV_Adityo Dwi Saputro, A.Md.Kom.pdf';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 overflow-hidden bg-[#050308]">
      {/* Background Molten Metal shader */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <MoltenMetal
          colors={["#e802ff", "#8000e0"]}
          coreColor="#FFFFFF"
          speed={isMobile ? 0.2 : 0.35}
          scale={isMobile ? 3.2 : 4}
          detail={isMobile ? 1 : 2}
          dpr={isMobile ? 0.75 : 1.25}
          glow={1.6}
          thickness={1}
          haze={0.75}
          mouseInteraction={!isMobile}
          flareOnClick={!isMobile}
          lightMode={false}
          swirl={1}
          turbulence={0.2}
          brightness={1.3}
          colorMode="molten"
          rotation={0}
          offsetX={0}
          offsetY={0}
          grain={isMobile ? 0 : 0.05}
          opacity={1}
          drift={isMobile ? 0.15 : 0.3}
          intro
          mouseStrength={0.5}
          paused={false}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[1] h-44 sm:h-60 lg:h-72 bg-gradient-to-b from-transparent via-[#050308]/75 to-[#050308] pointer-events-none" />

      {/* 3D Lanyard Card: Full-screen overlay without boundaries on BOTH desktop and mobile */}
      <div className="absolute inset-0 z-[2] pointer-events-auto">
        <Lanyard
          frontImage="/me.png"
          cardColor="#150827"
          finish="glossy"
          size={isMobile ? 0.55 : 0.62}
          anchor={isMobile ? "center" : "right"}
          strapLength={isMobile ? 0.04 : 0.22}
          elasticity={0.65}
          damping={0.45}
          gravity={1.1}
          interactive={true}
          breeze={isMobile ? 0.2 : 0.35}
          className="min-h-0"
        />
      </div>

      {/* Hero Text Content (z-10, in front of the 3D card) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-none">
          {/* On mobile: mt-[330px] sm:mt-[370px] keeps top space completely clear for card touch interaction */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left mt-[330px] sm:mt-[370px] lg:mt-0 pointer-events-none select-none">
            <p className="text-sm sm:text-base md:text-lg text-purple-200/90 font-mono mb-2 pointer-events-none">
              Hi, my name is
            </p>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5 leading-[1.08] pointer-events-none">
              <TextType
                text={['Adityo Dwi Saputro']}
                as="span"
                className="text-white"
                initialDelay={2350}
                typingSpeed={40}
                pauseDuration={5000}
                deletingSpeed={22}
                deleteMode="select"
                typeEffect="fade"
                mistakes={0}
                cursorStyle="bar"
                cursorGlide
                showCursor
                cursorColor="currentColor"
                prefixColor="currentColor"
                cursorBlinkDuration={0.6}
                cursorCharacter="_"
                prefix=""
              />
            </h1>

            <p className="text-zinc-400 text-xs sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 pointer-events-none">
              Lulusan D3 Teknik Informatika dari Politeknik Negeri Pontianak. Mengembangkan website dengan
              <span className="text-purple-200 font-medium"> Laravel, PHP, JS</span>, membangun aplikasi mobile dengan
              <span className="text-purple-200 font-medium"> Flutter & Dart</span>, serta merancang UI/UX menggunakan
              <span className="text-purple-200 font-medium"> Figma</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pointer-events-none">
              <a
                href={cvFile}
                download="CV_Adityo Dwi Saputro, A.Md.Kom.pdf"
                className="pointer-events-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider rounded border border-purple-400/30 shadow-lg shadow-purple-950/40 transition-all group active:scale-[0.98]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </a>

              <a
                href="#about"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white font-mono text-xs sm:text-sm uppercase tracking-wider rounded border border-white/10 hover:border-purple-400/40 transition-all active:scale-[0.98]"
              >
                About Me
                <ArrowDown className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-500 pointer-events-none">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span>Web Dev</span>
              </div>
              <span className="text-zinc-700">/</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span>App Dev</span>
              </div>
              <span className="text-zinc-700">/</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}














