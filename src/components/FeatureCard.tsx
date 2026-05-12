'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color = 'bg-blue-600',
}: FeatureCardProps) {
  return (
    <motion.div
      className="card p-8"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`icon-badge ${color} text-white mb-4 mx-auto`}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-voci-dark-blue mb-3 text-center">
        {title}
      </h3>
      <p className="text-voci-gray text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
