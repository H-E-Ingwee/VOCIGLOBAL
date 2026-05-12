'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import TeamCard from '@/src/components/TeamCard';
import CtaBanner from '@/src/components/CtaBanner';
import { team } from '@/src/lib/data';

export default function Team() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Team & Strategy"
        subtitle="Leadership You Can Trust"
        description="Meet the VOCI leaders guiding our 2025-2032 strategy for regional, continental, and global impact."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      {/* Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Leadership"
            title="Meet Our Leadership Team"
            description="A group of strategic leaders dedicated to building influence, impact, and excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Strategy"
            title="2025–2032 Growth Plan"
            description="Our roadmap for scaling VOCI across regions, sectors, and global partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Phase 1: Foundation',
                description: 'Strengthen our core leadership, programs, and community in 2025. ',
              },
              {
                title: 'Phase 2: Expansion',
                description: 'Scale regionally and across Africa while deepening impact in key sectors.',
              },
              {
                title: 'Phase 3: Global Reach',
                description: 'Establish VOCI as a trusted global brand for transformational leadership.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{item.title}</h3>
                <p className="text-voci-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Partner with Us"
        description="Work with the VOCI team to bring your leadership vision to life."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
