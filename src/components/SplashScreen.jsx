import { useEffect, useState } from 'react';
import LatticeLoader from './reactbits/LatticeLoader';

export default function SplashScreen({ onFinish }) {
  const [status, setStatus] = useState('working');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus('done');
    }, 1300);

    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const timer3 = setTimeout(() => {
      onFinish();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050308] px-4 transition-opacity duration-400 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0e071c]/80 border border-purple-500/20 shadow-2xl backdrop-blur-md max-w-[90vw]">
        {/* React Bits Lattice Loader restored with loading label and duration */}
        <LatticeLoader
          label="Loading..."
          doneLabel="Done in"
          status={status}
          color="#c084fc"
          doneColor="#22c55e"
          pattern="orbit"
          grid={3}
          cellSize={7}
          gap={3}
          glow={true}
          glowColor="#a855f7"
          fontSize={13}
        />
      </div>
    </div>
  );
}
