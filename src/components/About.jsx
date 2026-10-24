import { useState, useEffect } from 'react';
import { GraduationCap, Award, MapPin, Maximize2, X } from 'lucide-react';
import certIpk from '../assets/Sertifikat_ipk.webp';

export default function About() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  // Close modal on Escape key and prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCertOpen(false);
    };

    if (isCertOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCertOpen]);

  return (
    <section id="about" className="py-10 sm:py-16 bg-[#050308] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Headline (Zig-Zag: Left) */}
        <div className="mb-8 sm:mb-10 reveal-left text-left">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            ABOUT ME
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-purple-500/40 mt-2.5 sm:mt-3" />
        </div>

        {/* Content Grid with equal stretched card heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch reveal-left">

          {/* Left: Bio & Focus Areas */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="card-border rounded-xl p-5 sm:p-8 relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 font-normal">
                  Saya merupakan lulusan <strong className="text-white font-semibold">D3 Teknik Informatika dari Politeknik Negeri Pontianak</strong> dengan pengalaman dalam pengembangan website dan aplikasi.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                  Memiliki kemampuan menggunakan <span className="text-purple-300 font-mono">HTML, CSS, JavaScript, PHP</span>, dan <span className="text-purple-300 font-mono">Laravel</span> untuk pengembangan web, serta <span className="text-purple-300 font-mono">Flutter</span> dan <span className="text-purple-300 font-mono">Dart</span> untuk pengembangan aplikasi. Terampil merancang UI/UX menggunakan <span className="text-purple-300 font-mono">Figma</span> dan memahami pengelolaan basis data menggunakan <span className="text-purple-300 font-mono">MySQL</span>.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="pt-5 sm:pt-6 border-t border-white/10 mt-auto">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-3 sm:mb-4">
                  Fokus Utama:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                    <span className="font-display font-semibold text-xs sm:text-sm text-purple-200 block mb-0.5 sm:mb-1">
                      Web Development
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400">Pengembangan web modern & responsif</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                    <span className="font-display font-semibold text-xs sm:text-sm text-purple-200 block mb-0.5 sm:mb-1">
                      App Development
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400">Aplikasi mobile lintas platform</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                    <span className="font-display font-semibold text-xs sm:text-sm text-purple-200 block mb-0.5 sm:mb-1">
                      UI/UX Design
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400">Wireframing & design system</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Academic Background */}
          <div className="lg:col-span-5 flex flex-col">

            {/* Education Card */}
            <div className="card-border rounded-xl p-5 sm:p-8 border-purple-500/30 bg-gradient-to-br from-[#120724] to-[#07030e] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="font-mono text-[11px] sm:text-xs text-purple-400 uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                    <GraduationCap className="w-4 h-4" />
                    PENDIDIKAN
                  </span>
                  <span className="px-2 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-400/30">
                    2023 – 2026
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-white mb-1">
                  D3 Teknik Informatika
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  Politeknik Negeri Pontianak
                </p>

                {/* IPK Highlight Box */}
                <div className="p-3.5 sm:p-4 rounded-lg bg-black/40 border border-purple-500/30 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[11px] sm:text-xs text-zinc-400 block font-mono">Indeks Prestasi Kumulatif</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-200 to-white">
                        3.96
                      </span>
                      <span className="text-zinc-500 text-xs font-mono">/ 4.00</span>
                    </div>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-mono flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Predikat Pujian</span>
                  </div>
                </div>
              </div>

              {/* Certificate Preview Box under IPK */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[11px] sm:text-xs text-purple-300 font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    Sertifikat Penghargaan IPK Terbaik
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-purple-400" />
                    Perbesar
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCertOpen(true)}
                  className="group relative w-full overflow-hidden rounded-lg border border-purple-500/25 bg-black/50 transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-950/50 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  aria-label="Lihat Sertifikat Penghargaan IPK Terbaik"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                    <img
                      src={certIpk}
                      alt="Thumbnail Sertifikat Penghargaan IPK Terbaik"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Hover action overlay button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-950/90 px-3.5 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                        Klik untuk Memperbesar
                      </span>
                    </div>
                  </div>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Certificate Lightbox Modal */}
      {isCertOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sertifikat Penghargaan IPK Terbaik"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setIsCertOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Right Close Button */}
            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-zinc-900/95 text-white border border-white/20 shadow-2xl transition-all duration-200 hover:bg-purple-600 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              aria-label="Tutup sertifikat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Floating Certificate Card */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/80 bg-[#0d0718] p-1 sm:p-2">
              <img
                src={certIpk}
                alt="Sertifikat Penghargaan IPK Terbaik - Politeknik Negeri Pontianak"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 sm:mt-4 text-center px-4">
              <p className="text-xs sm:text-sm font-mono text-purple-200 font-medium">
                Sertifikat Penghargaan Indeks Prestasi Kumulatif Terbaik
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Politeknik Negeri Pontianak • IPK 3.96 (Predikat Pujian)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
