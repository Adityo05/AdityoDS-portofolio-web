import { Briefcase, Lock, CheckCircle2, ArrowUpRight } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'ashwaq',
    title: 'Ashwaq: Hajj & Umrah Website and Application',
    type: 'Client Project',
    role: 'Web & Application Development',
    description:
      'Aplikasi pemesanan tiket haji dan umrah secara online yang dilengkapi fitur pendukung ibadah, seperti alarm adzan 5 waktu otomatis, penunjuk arah kiblat sesuai lokasi, Al-Qur\'an digital dengan audio qari, tasbih digital, serta fitur infaq.',
    contributions: [
      'Berkontribusi langsung dalam pengembangan website Haji & Umrah sesuai spesifikasi klien.',
      'Mengembangkan fitur alarm adzan pada aplikasi Ashwaq untuk notifikasi waktu sholat otomatis.',
      'Membuat fitur penunjuk arah kiblat digital sesuai lokasi pada aplikasi Ashwaq.',
      'Membangun sistem autentikasi (kode OTP & lupa password) pada web dan aplikasi.',
      'Melakukan debugging dan testing pada sisi web maupun aplikasi.',
    ],
  },
  {
    id: 'pt-nkp',
    title: 'Web & App Machine Maintenance',
    company: 'PT New Kalbar Processors',
    type: 'Internal Company Project — Internship',
    isConfidential: true,
    role: 'UI/UX Designer & Web/App Developer',
    description:
      'Sistem internal yang berkaitan dengan pemeliharaan mesin. Website dan aplikasi digunakan dalam lingkungan internal perusahaan PT New Kalbar Processors untuk monitoring mesin industri.',
    contributions: [
      'Merancang UI/UX website berdasarkan kebutuhan sistem.',
      'Berkontribusi dalam perancangan dan pengembangan website pemeliharaan mesin.',
      'Melakukan testing dan debugging website.',
      'Melakukan testing dan debugging aplikasi, khususnya fitur jadwal pemeliharaan mesin dan laporan kerusakan mesin.',
    ],
  },
];

export default function Projects({ onOpenProject }) {
  return (
    <section id="projects" className="py-10 sm:py-16 bg-[#050308] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline (Zig-Zag: Right) */}
        <div className="mb-8 sm:mb-10 reveal-right text-right flex flex-col items-end">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            PROJECTS
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-purple-500/40 mt-2.5 sm:mt-3" />
        </div>

        {/* Projects Cards Grid with reveal-right matching headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 reveal-right">
          {PROJECTS_DATA.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onOpenProject(project.id)}
              className="card-border rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-purple-500/30 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 active:scale-[0.99]"
            >
              <div>
                {/* Meta header with arrow icon */}
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.isConfidential && (
                      <span className="p-1 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2">
                        <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Internal
                      </span>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Company name if available */}
                {project.company && (
                  <div className="text-xs font-mono text-zinc-400 mb-1.5 sm:mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{project.company}</span>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 leading-snug group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
                  {project.description}
                </p>

                {/* Role only */}
                <div className="mb-5 sm:mb-6 pt-3 pb-3 border-y border-white/5 text-xs font-mono flex items-center justify-between">
                  <span className="text-zinc-500">Peran:</span>
                  <span className="text-purple-300 font-medium">{project.role}</span>
                </div>

                {/* Contributions list */}
                <div>
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 block mb-2.5 sm:mb-3 font-semibold">
                    Kontribusi Saya:
                  </span>
                  <div className="space-y-2 sm:space-y-2.5">
                    {project.contributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom "Lihat Detail" label */}
              <div className="mt-5 sm:mt-6 pt-3 border-t border-white/5 flex items-center justify-end">
                <span className="text-purple-400 font-mono text-[11px] sm:text-xs font-medium group-hover:text-purple-300 group-hover:underline transition-colors">
                  Lihat Detail →
                </span>
              </div>

            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
