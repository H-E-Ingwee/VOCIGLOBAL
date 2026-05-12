'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import ProgramCard from '@/src/components/ProgramCard';
import CtaBanner from '@/src/components/CtaBanner';
import { programs } from '@/src/lib/data';
import { MessageSquare, Zap, Crown } from 'lucide-react';

const iconMap: Record<string, any> = {
  MessageSquare,
  Zap,
  Crown,
};

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Programs That Transform"
        subtitle="Practical Learning Paths"
        description="Choose a program designed to strengthen your communication, brand, and leadership impact."
        backgroundImage="https://images.pexels.com/photos/3184335/pexels-photo-3184335.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      {/* Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Learning Paths"
            title="Purpose-Driven Programs"
            description="Our curriculum blends live instruction, practical exercises, and coaching for measurable growth."
          />

          <div className="grid grid-cols-1 gap-8">
            {programs.map((program, i) => {
              const IconComponent = iconMap[program.icon] || MessageSquare;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <ProgramCard
                      title={program.title}
                      description={program.description}
                      icon={IconComponent}
                      color={program.color}
                      modules={program.modules}
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <h3 className="text-3xl font-bold text-voci-dark-blue mb-4">
                      {program.title}
                    </h3>
                    <p className="text-voci-gray text-lg leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <p className="text-voci-gray mb-6">
                      Our {program.title.toLowerCase()} path is built to help you lead with clarity, credibility, and influence. Every module is anchored in real-world practice.
                    </p>
                    <ul className="space-y-2 text-voci-gray">
                      {program.modules.map((module, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="text-voci-blue">✓</span>
                          {module.name} ({module.duration})
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 md:py-32 bg-gradient-light text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            label="Certification"
            title="Certified Leadership Outcomes"
            description="Complete any program and receive a recognized certificate to showcase your new skills and readiness for greater responsibility."
          />
          <p className="text-voci-gray text-lg leading-relaxed">
            Our certificates are designed to communicate your commitment to growth, your strategic mindset, and your ability to lead teams with confidence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Start Your Transformation"
        description="Choose a program and join thousands of successful leaders."
        buttonLabel="Enroll Now"
        buttonHref="/join"
      />
    </>
  );
}
