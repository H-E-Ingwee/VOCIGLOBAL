'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  buttons?: Array<{ label: string; href: string; variant: 'primary' | 'outline' }>;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  buttons = [],
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-voci-gold font-semibold uppercase tracking-widest text-sm md:text-base mb-4">
            {subtitle}
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {buttons.length > 0 && (
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={btn.variant === 'primary' ? 'btn btn-primary' : 'btn btn-outline'}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
