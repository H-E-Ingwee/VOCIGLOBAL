'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import CtaBanner from '@/src/components/CtaBanner';
import { resources } from '@/src/lib/data';

export default function Resources() {
  return (
    <>
      <HeroSection
        title="VOCI Resources"
        subtitle="Official Materials"
        description="Explore our core guides, flyers, and tools designed to support your leadership, branding, and communication journey."
        backgroundImage="https://images.pexels.com/photos/3182751/pexels-photo-3182751.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Download"
            title="Official Flyers & Guides"
            description="Access the materials that help you share and scale VOCI’s message."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">
                  {resource.title}
                </h3>
                <p className="text-voci-gray leading-relaxed mb-6">
                  {resource.description}
                </p>
                <a href={resource.url} className="btn btn-outline">
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Key Concepts"
            title="The VOCI Framework"
            description="Explore the principles that shape our programs, events, and leadership experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Principled Leadership',
                description: 'Leaders who act with integrity, build trust, and create sustainable impact.',
              },
              {
                title: 'Authentic Branding',
                description: 'Brand stories grounded in values, clarity, and relevance.',
              },
              {
                title: 'Effective Communication',
                description: 'Clear, confident, and strategic messaging that moves audiences.',
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

      <CtaBanner
        title="Need More Resources?"
        description="Contact our team to request tailored materials for your organization or event."
        buttonLabel="Contact Support"
        buttonHref="/contact"
      />
    </>
  );
}
