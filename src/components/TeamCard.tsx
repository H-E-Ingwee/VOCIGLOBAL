'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <motion.div
      className="card overflow-hidden text-center"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-full bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-voci-dark-blue mb-1">
          {name}
        </h3>
        <p className="text-voci-blue font-semibold text-sm mb-3">
          {role}
        </p>
        <p className="text-voci-gray text-sm leading-relaxed mb-4">
          {bio}
        </p>

        <div className="flex gap-3 justify-center">
          {[
            { icon: '𝕷', url: '#' },
            { icon: '𝕻', url: '#' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              className="w-10 h-10 rounded-lg bg-voci-light-blue hover:bg-voci-blue hover:text-white transition-colors flex items-center justify-center font-bold"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
