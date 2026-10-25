import { useState, useEffect } from 'react';
import { Award, CheckCircle2, Maximize2, X, Code2, ShieldCheck } from 'lucide-react';
import certBnsp from '../assets/Sertifikat_BNSP.webp';

export default function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="certifications" className="py-10 sm:py-16 bg-[#050308] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Headline (Zig-Zag: Left) */}
        <div className="mb-8 sm:mb-10 reveal-left text-left">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            SERTIFIKASI & PELATIHAN
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-purple-500/40 mt-2.5 sm:mt-3" />
        </div>

        {/* Content Grid: Left description & Right portrait certificate preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-left">

          {/* Left Column — Title, Badges, Description, and Key Points */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="card-border rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5 sm:mb-4">
                  <span className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/25 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    Sertifikasi BNSP
                  </span>
                  <span className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    Bidang: Web Development
                  </span>
                </div>

                {/* Headline Judul */}
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
                  Junior Web Developer
                </h3>

                {/* Penjelasan Pelatihan */}
                <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                  Program sertifikasi dan pelatihan kompetensi pada skema <strong className="text-white font-medium">Junior Web Developer</strong> yang diselenggarakan oleh Badan Nasional Sertifikasi Profesi (BNSP). Pada pelatihan ini, saya ditugaskan untuk merancang dan membangun sebuah website <em className="text-purple-200">company profile</em> yang dilengkapi dengan berbagai fitur interaktif, tata letak responsif, serta navigasi yang terstruktur.
                </p>

                {/* Scope & Hasil Karya Pelatihan */}
                <div className="pt-4 sm:pt-5 border-t border-white/10">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-purple-300 block mb-3 font-semibold">
                    Hasil Karya & Poin Pelatihan:
                  </span>
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        Membangun website company profile yang responsif dan optimal saat diakses di perangkat mobile maupun desktop.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        Mengembangkan fitur-fitur website seperti bagian profil perusahaan, katalog layanan, dan formulir kontak interaktif.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        Menerapkan struktur HTML semantik, styling CSS, dan JavaScript untuk interaktivitas komponen.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        Menyelesaikan uji kompetensi nasional dan dinyatakan kompeten di bidang Web Development.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Portrait Certificate Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="card-border rounded-xl sm:rounded-2xl p-4 sm:p-5 w-full max-w-sm lg:max-w-none">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] sm:text-xs text-purple-300 font-medium flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Sertifikat BNSP
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-purple-400" />
                  Perbesar
                </span>
              </div>

              {/* Portrait Button with aspect-[3/4] */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full overflow-hidden rounded-lg border border-purple-500/25 bg-black/50 transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-950/50 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Lihat Sertifikat BNSP Junior Web Developer"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
                  <img
                    src={certBnsp}
                    alt="Sertifikat BNSP Junior Web Developer - Adityo Dwi Saputro"
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

              {/* Caption */}
              <p className="mt-3 text-center text-[11px] sm:text-xs font-mono text-zinc-400">
                Sertifikat Kompetensi: Junior Web Developer
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Portrait Certificate Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sertifikat BNSP Junior Web Developer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-2xl w-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Right Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-zinc-900/95 text-white border border-white/20 shadow-2xl transition-all duration-200 hover:bg-purple-600 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              aria-label="Tutup sertifikat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Floating Portrait Certificate Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/80 bg-[#0d0718] p-1 sm:p-2">
              <img
                src={certBnsp}
                alt="Sertifikat BNSP Junior Web Developer - Adityo Dwi Saputro"
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 sm:mt-4 text-center px-4">
              <p className="text-xs sm:text-sm font-mono text-purple-200 font-medium">
                Sertifikat Kompetensi — Junior Web Developer
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">
                Badan Nasional Sertifikasi Profesi (BNSP) • Bidang Web Development
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
