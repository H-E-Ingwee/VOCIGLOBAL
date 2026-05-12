'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description?: string;
}

export default function EventCard({
  title,
  date,
  location,
  category,
  image,
  description,
}: EventCardProps) {
  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-voci-gold text-voci-dark-blue px-3 py-1 rounded-full text-xs font-bold uppercase">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-voci-dark-blue mb-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-voci-gray text-sm mb-4 leading-relaxed">
            {description}
          </p>
        )}

        <div className="space-y-2 text-sm text-voci-gray mb-4">
          <p>📅 {date}</p>
          <p>📍 {location}</p>
        </div>

        <button className="btn btn-primary w-full text-sm">
          Register Now
        </button>
      </div>
    </motion.div>
  );
}
