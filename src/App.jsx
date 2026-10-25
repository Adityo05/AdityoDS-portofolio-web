import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  // Activate scroll-triggered animations with activeProject dependency
  useScrollReveal([activeProject]);

  // Handle browser back/forward and navbar navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        setActiveProject(hash.replace('#project/', ''));
      } else {
        setActiveProject(null);
        if (hash && hash !== '#' && !hash.startsWith('#project/')) {
          setTimeout(() => {
            const targetId = hash.replace('#', '');
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openProject = (projectId) => {
    window.location.hash = `#project/${projectId}`;
    setActiveProject(projectId);
  };

  const closeProject = () => {
    setActiveProject(null);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Scroll back to the projects section smoothly
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  return (
    <div className="min-h-screen bg-[#050308] text-[#ededee] font-sans selection:bg-purple-600/30 selection:text-white">
      {/* React Bits Lattice Loader Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections or Project Detail */}
      <main className="w-full">
        {activeProject ? (
          /* Project Detail Page */
          <ProjectDetail projectId={activeProject} onBack={closeProject} />
        ) : (
          <>
            {/* Landing Page Top / Hero (Molten Metal, TextType, and 3D Lanyard) */}
            <Hero />

            {/* About Me Section */}
            <About />

            {/* Projects Section */}
            <Projects onOpenProject={openProject} />

            {/* Certifications & Training Section */}
            <Certifications />

            {/* Tech Stack & Languages Section */}
            <TechStack />

            {/* Contact Section */}
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}
