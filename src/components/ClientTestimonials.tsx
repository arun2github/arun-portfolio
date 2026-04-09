'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clientTestimonials } from '@/data/portfolioData';
import { Star, ExternalLink } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} style={{color:'#cbb7fb', fill:'#cbb7fb'}} />
    ))}
  </div>
);

// Each card gets a baked-in rotation + nudge to feel physically "tossed"
const cardConfig = [
  { rotate: '-2deg', nudge: 'md:mt-6',    size: 'md:col-span-5' },
  { rotate: '1.5deg',  nudge: 'md:-mt-4', size: 'md:col-span-4' },
  { rotate: '-1deg',   nudge: 'md:mt-10', size: 'md:col-span-3' },
];

const ClientTestimonials = () => {
  const featured = clientTestimonials.filter((t) => t.featured);
  if (!featured.length) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sectionRef, sectionInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 bg-[#0D0F14] overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{color:'#cbb7fb'}}>
            Testimonials
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white" style={{lineHeight:0.96, letterSpacing:'-0.02em'}}>
            What Clients Say
          </h2>
        </motion.div>

        {/* Jumbled scattered cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {featured.map((t, i) => {
            const cfg = cardConfig[i] ?? cardConfig[0];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 50, rotate: cfg.rotate }}
                animate={sectionInView ? { opacity: 1, y: 0, rotate: cfg.rotate } : { opacity: 0, y: 50, rotate: cfg.rotate }}
                whileHover={{ rotate: '0deg', scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 80 }}
                className={`relative bg-[#13161D] border border-[#1E2330] rounded-2xl p-8 flex flex-col gap-5 cursor-default
                  ${cfg.size} ${cfg.nudge}
                  shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                  hover:border-[rgba(203,183,251,0.30)] hover:shadow-[0_16px_60px_rgba(203,183,251,0.08)]
                  transition-shadow duration-300 overflow-hidden`}
                style={{ originX: '50%', originY: '50%' }}
              >
                {/* Large quote watermark */}
                <span className="absolute -top-4 -right-2 text-[100px] font-black text-[#1E2330] leading-none select-none pointer-events-none">
                  &ldquo;
                </span>

                {/* Category + stars */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'rgba(203,183,251,0.60)'}}>
                    {t.projectCategory}
                  </span>
                  <Stars count={t.rating} />
                </div>

                {/* Project title */}
                <h3 className={`relative z-10 font-extrabold text-white leading-snug ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {t.projectName}
                </h3>

                {/* Quote */}
                <p className={`relative z-10 text-[#8892B0] leading-relaxed flex-1 ${i === 0 ? 'text-base' : 'text-sm line-clamp-5'}`}>
                  &ldquo;{t.testimonialText}&rdquo;
                </p>

                {/* Impact badge */}
                {t.projectImpact && (
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-[8px]" style={{background:'rgba(203,183,251,0.08)', color:'#cbb7fb', border:'1px solid rgba(203,183,251,0.20)'}}>
                      {t.projectImpact}
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div className="relative z-10 pt-4 border-t border-[#1E2330] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{background:'rgba(203,183,251,0.08)', border:'1px solid rgba(203,183,251,0.20)'}}>
                      <span className="font-bold text-xs" style={{color:'#cbb7fb'}}>
                        {t.clientName.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-xs truncate">{t.clientName}</p>
                      <p className="text-xs truncate" style={{color:'rgba(255,255,255,0.40)'}}>{t.clientOrganization}</p>
                    </div>
                  </div>

                  {t.id === 'vahaan-bazar-testimonial' && (
                    <div className="flex gap-1 shrink-0">
                      <a href="https://play.google.com/store/apps/details?id=com.vahaanbazar.app" target="_blank" rel="noopener noreferrer"
                        className="px-2 py-1 text-xs bg-[#1E2330] text-[#8892B0] rounded hover:text-white transition-colors">
                        Android
                      </a>
                      <a href="https://apps.apple.com/in/app/vahaanbazar/id6753955870" target="_blank" rel="noopener noreferrer"
                        className="px-2 py-1 text-xs bg-[#1E2330] text-[#8892B0] rounded hover:text-white transition-colors">
                        iOS
                      </a>
                    </div>
                  )}
                  {t.id === 'tura-municipal-board-testimonial' && (
                    <a href="https://turamunicipalboard.com/home" target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <ExternalLink size={14} className="text-[#6C7AE8]" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;
