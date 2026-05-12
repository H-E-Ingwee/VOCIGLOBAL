'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  modules: Array<{ name: string; duration: string }>;
}

export default function ProgramCard({
  title,
  description,
  icon: Icon,
  color,
  modules,
}: ProgramCardProps) {
  return (
    <motion.div
      className="card p-8 md:p-12"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`icon-badge ${color} text-white mb-6 mx-auto`}>
        <Icon size={40} />
      </div>
      <h3 className="text-2xl font-bold text-voci-dark-blue mb-3 text-center">
        {title}
      </h3>
      <p className="text-voci-gray text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3">
        <p className="font-semibold text-voci-dark-blue text-sm uppercase">Modules:</p>
        {modules.map((module, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-voci-gray">{module.name}</span>
            <span className="text-voci-blue font-semibold">{module.duration}</span>
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-full mt-8">
        Learn More
      </button>
    </motion.div>
  );
}
