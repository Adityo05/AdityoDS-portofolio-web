import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Maximize2, X, Briefcase, Lock, MapPin, Factory } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

import screenshotAshwaq from '../assets/Screenshot_project.webp';
import sertifikatMagang from '../assets/Sertifikat_magang.webp';

const PROJECTS_DETAIL = {
  ashwaq: {
    headline: 'Ashwaq: Hajj & Umrah Website and Application',
    type: 'Client Project',
    role: 'Web & Application Development',
    description:
      'Ashwaq merupakan aplikasi yang dikembangkan untuk memudahkan jemaah membeli tiket haji dan umrah secara online. Selain untuk pemesanan tiket, aplikasi ini juga dilengkapi berbagai fitur penunjang ibadah seperti alarm adzan 5 waktu otomatis, penunjuk arah kiblat sesuai lokasi pengguna, Al-Qur\'an digital beserta audio qari, tasbih digital, serta fitur infaq.',
    contributions: [
      'Berkontribusi langsung dalam pengembangan website Haji & Umrah sesuai spesifikasi klien.',
      'Mengembangkan fitur alarm adzan pada aplikasi Ashwaq yang memungkinkan pengguna menerima notifikasi waktu sholat secara otomatis berdasarkan lokasi.',
      'Membuat fitur penunjuk arah kiblat digital presisi sesuai lokasi pengguna pada aplikasi Ashwaq.',
      'Membangun sistem autentikasi pada web dan aplikasi meliputi verifikasi kode OTP dan fitur lupa password untuk keamanan akun pengguna.',
      'Melakukan debugging dan testing secara menyeluruh pada sisi web maupun aplikasi untuk memastikan stabilitas dan keandalan sistem.',
    ],
    image: screenshotAshwaq,
    imageAlt: 'Screenshot Aplikasi Ashwaq - Hajj & Umrah',
  },
  'pt-nkp': {
    headline: 'Web & App Machine Maintenance - PT New Kalbar Processors',
    type: 'Internal Company Project — Internship',
    isConfidential: true,
    role: 'UI/UX Designer & Web/App Developer',
    companyProfile:
      'PT New Kalbar Processors bergerak di bidang pengolahan karet alam dengan produk utama berupa crumb rubber yang dikenal sebagai Standar Indonesia Rubber (SIR).',
    description:
      'Terlibat dalam pengembangan sistem informasi berbasis web. Kegiatan yang dilakukan meliputi pengumpulan analisis kebutuhan sistem, perancangan antarmuka, serta implementasi sistem sesuai dengan kebutuhan perusahaan. Sistem internal ini digunakan dalam lingkungan internal perusahaan PT New Kalbar Processors untuk monitoring dan pemeliharaan mesin industri.',
    contributions: [
      'Merancang UI/UX website berdasarkan kebutuhan sistem.',
      'Berkontribusi dalam perancangan dan pengembangan website pemeliharaan mesin.',
      'Melakukan testing dan debugging website.',
      'Melakukan testing dan debugging aplikasi, khususnya fitur jadwal pemeliharaan mesin dan laporan kerusakan mesin.',
    ],
    image: sertifikatMagang,
    imageAlt: 'Sertifikat Magang - PT New Kalbar Processors',
  },
};

export default function ProjectDetail({ projectId, onBack }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const project = PROJECTS_DETAIL[projectId];

  // Scroll to top when opening detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // Activate scroll reveal for the detail page
  useScrollReveal();

  // Close modal on Escape and prevent scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsImageOpen(false);
    };

    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageOpen]);

  if (!project) return null;

  return (
    <section className="min-h-screen bg-[#050308] pt-24 sm:pt-28 pb-16 sm:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <div className="mb-8 sm:mb-10 reveal-up">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-purple-950/30 hover:border-purple-500/30 text-zinc-300 hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Kembali ke Projects</span>
          </button>
        </div>

        {/* Content Grid: Left text + Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column — Headline, Description, Contributions */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">

            {/* Headline & Meta */}
            <div className="reveal-left">
              {/* Type badge */}
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/25">
                  {project.type}
                </span>
                {project.isConfidential && (
                  <span className="p-1 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2">
                    <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Internal
                  </span>
                )}
              </div>

              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {project.headline}
              </h1>

              {/* Role */}
              <div className="mt-4 sm:mt-5 py-3 border-y border-white/5 text-xs font-mono flex items-center justify-between">
                <span className="text-zinc-500">Peran:</span>
                <span className="text-purple-300 font-medium">{project.role}</span>
              </div>
            </div>

            {/* Company Profile (for PT NKP only) */}
            {project.companyProfile && (
              <div className="card-border rounded-xl p-5 sm:p-6 reveal-left">
                <div className="flex items-center gap-2 mb-3">
                  <Factory className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs text-purple-300 uppercase tracking-wider font-semibold">
                    Profil Perusahaan
                  </span>
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {project.companyProfile}
                </p>
              </div>
            )}

            {/* Description Card */}
            <div className="card-border rounded-xl p-5 sm:p-8 reveal-left">
              <span className="font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-wider block mb-3 sm:mb-4">
                Deskripsi Proyek
              </span>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Contributions Card */}
            <div className="card-border rounded-xl p-5 sm:p-8 border-purple-500/20 bg-gradient-to-br from-[#120724] to-[#07030e] reveal-left">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-purple-300 block mb-4 sm:mb-5 font-semibold">
                Kontribusi Saya
              </span>
              <div className="space-y-3 sm:space-y-4">
                {project.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="lg:col-span-5 reveal-right">
            <div className="lg:sticky lg:top-28">
              <div className="card-border rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] sm:text-xs text-purple-300 font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    Dokumentasi Proyek
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-purple-400" />
                    Perbesar
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  className="group relative w-full overflow-hidden rounded-lg border border-purple-500/25 bg-black/50 transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-950/50 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  aria-label={`Lihat ${project.imageAlt}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-950/90 px-3.5 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5 text-purple-300" />
                        Klik untuk Memperbesar
                      </span>
                    </div>
                  </div>
                </button>

                {/* Caption */}
                <p className="mt-3 text-center text-[11px] sm:text-xs font-mono text-zinc-500">
                  {project.imageAlt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Image Lightbox Modal */}
      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={project.imageAlt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-zinc-900/95 text-white border border-white/20 shadow-2xl transition-all duration-200 hover:bg-purple-600 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              aria-label="Tutup gambar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Card */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/80 bg-[#0d0718] p-1 sm:p-2">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg"
              />
            </div>

            {/* Caption */}
            <div className="mt-3 sm:mt-4 text-center px-4">
              <p className="text-xs sm:text-sm font-mono text-purple-200 font-medium">
                {project.imageAlt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
