'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import FeatureCard from '@/src/components/FeatureCard';
import ProgramCard from '@/src/components/ProgramCard';
import EventCard from '@/src/components/EventCard';
import CtaBanner from '@/src/components/CtaBanner';
import { programs, events, values } from '@/src/lib/data';
import {
  MessageSquare,
  Zap,
  Crown,
  Shield,
  Target,
  Users,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  MessageSquare,
  Zap,
  Crown,
  Shield,
  Target,
  Users,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Empower Your Voice, Transform Your Future"
        subtitle="Voice of Change Initiative"
        description="A transformative movement empowering individuals with exceptional communication, authentic personal branding, and principled leadership."
        backgroundImage="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
        buttons={[
          { label: 'Explore Programs', href: '/programs', variant: 'primary' },
          { label: 'Join Our Community', href: '/join', variant: 'outline' },
        ]}
      />

      {/* Our Impact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="What We Do"
            title="We Develop Confident, Purposeful Leaders"
            description="VOCI supports leaders across eight spheres of influence with coaching, strategy, and practical skill-building."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Communication Excellence',
                description: 'Master the clarity, presence, and conviction needed to inspire every audience.',
              },
              {
                title: 'Authentic Branding',
                description: 'Build a personal or organizational brand grounded in purpose and credibility.',
              },
              {
                title: 'Principled Leadership',
                description: 'Lead with clarity, integrity, and measurable impact in every environment.',
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
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-4">{item.title}</h3>
                <p className="text-voci-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Our Programs"
            title="Three Pillars of Transformation"
            description="Gain the skills and confidence to lead more effectively at every level."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => {
              const IconComponent = iconMap[program.icon] || MessageSquare;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProgramCard
                    title={program.title}
                    description={program.description}
                    icon={IconComponent}
                    color={program.color}
                    modules={program.modules}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Upcoming"
            title="Featured Events"
            description="Dynamic events designed to accelerate your personal and professional growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="Ready to Make an Impact?"
        description="Join our community of change-makers and begin your VOCI journey today."
        buttonLabel="Apply Now"
        buttonHref="/join"
      />
    </>
  );
}
