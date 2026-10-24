import { Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './BrandIcons';

const CONTACT_CHANNELS = [
  {
    name: 'Instagram',
    handle: '@ad.dwilow',
    url: 'https://instagram.com/ad.dwilow',
    icon: InstagramIcon,
    color: 'hover:border-pink-500/50 hover:bg-pink-950/20 text-pink-400'
  },
  {
    name: 'LinkedIn',
    handle: 'Adityo Dwi Saputro',
    url: 'https://www.linkedin.com/in/adityo-dwi-saputro-779984442',
    icon: LinkedinIcon,
    color: 'hover:border-blue-500/50 hover:bg-blue-950/20 text-blue-400'
  },
  {
    name: 'GitHub',
    handle: 'Adityo05',
    url: 'https://github.com/Adityo05',
    icon: GithubIcon,
    color: 'hover:border-purple-500/50 hover:bg-purple-950/20 text-purple-300'
  }
];

export default function Contact() {
  const emailPlaceholder = 'adityodwisaputro007@gmail.com';

  return (
    <section id="contact" className="py-10 sm:py-16 bg-[#050308] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Headline (Zig-Zag: Right) */}
        <div className="mb-8 sm:mb-10 reveal-right text-right flex flex-col items-end">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            CONTACT
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-purple-500/40 mt-2.5 sm:mt-3" />
        </div>

        {/* Content with reveal-right matching headline */}
        <div className="space-y-6 sm:space-y-8 reveal-right">

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {CONTACT_CHANNELS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`card-border rounded-xl p-5 sm:p-7 flex flex-col justify-between group transition-all duration-300 ${item.color} active:scale-[0.98]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <span className="font-mono text-[10px] sm:text-[11px] uppercase text-zinc-500 block mb-1">
                      {item.name}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                      {item.handle}
                    </h3>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] sm:text-xs text-zinc-400">
                    <span>Kunjungi</span>
                    <span className="text-purple-400 group-hover:underline">Buka Link →</span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Email Direct Card */}
          <div className="card-border rounded-xl p-5 sm:p-7 bg-gradient-to-r from-purple-950/20 via-black to-purple-950/20 border-purple-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 text-left w-full sm:w-auto">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] sm:text-[11px] text-purple-300 uppercase tracking-wider block">
                  EMAIL
                </span>
                <span className="font-display text-sm sm:text-base md:text-lg font-bold text-white break-all sm:break-normal">
                  {emailPlaceholder}
                </span>
              </div>
            </div>

<a
              href={`mailto:${emailPlaceholder}`}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 font-mono text-xs uppercase tracking-wider transition-all w-full sm:w-auto font-semibold active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Adityo Dwi Saputro. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  );
}


