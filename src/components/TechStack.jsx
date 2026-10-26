import { useState, useEffect } from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiPython,
  SiMysql,
  SiFigma,
} from 'react-icons/si';
import { Database } from 'lucide-react';
import LogoLoop from './reactbits/LogoLoop';

const TECH_ITEMS = [
  { name: 'HTML', Icon: SiHtml5, color: '#E34F26', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', Icon: SiCss, color: '#1572B6', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4', href: 'https://www.php.net' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20', href: 'https://laravel.com' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B', href: 'https://flutter.dev' },
  { name: 'Dart', Icon: SiDart, color: '#0175C2', href: 'https://dart.dev' },
  { name: 'Python', Icon: SiPython, color: '#3776AB', href: 'https://www.python.org' },
  { name: 'SQL', Icon: Database, color: '#a855f7', href: 'https://www.w3schools.com/sql/' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1', href: 'https://www.mysql.com' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E', href: 'https://www.figma.com' },
];

const techLogos = TECH_ITEMS.map(({ name, Icon, color, href }) => ({
  node: <Icon style={{ color }} />,
  title: name,
  href,
  hoverColor: color,
}));

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="tech" className="relative border-t border-white/5 bg-[#050308] py-10 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-left reveal-left sm:mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technology Stack
          </h2>
          <div className="mt-2.5 h-0.5 w-10 bg-purple-500/40 sm:mt-3 sm:w-12" />
        </div>

        <div className="reveal-left py-2">
          <LogoLoop
            logos={techLogos}
            preset="spotlight"
            draggable={true}
            labels="below"
            speed={isMobile ? 65 : 90}
            direction="left"
            logoHeight={isMobile ? 26 : 44}
            gap={isMobile ? 18 : 48}
            pauseOnHover={false}
            fadeOut={true}
            fadeOutWidth={isMobile ? 0.05 : 0.14}
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </section>
  );
}
