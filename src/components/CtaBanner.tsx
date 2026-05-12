'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({
  title,
  description,
  buttonLabel,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section className="bg-gradient-voci py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            {description}
          </p>
          <Link href={buttonHref} className="btn btn-outline">
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
