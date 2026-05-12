'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import FeatureCard from '@/src/components/FeatureCard';
import TeamCard from '@/src/components/TeamCard';
import CtaBanner from '@/src/components/CtaBanner';
import { team, values } from '@/src/lib/data';
import { Heart, Lightbulb, Zap, Users } from 'lucide-react';

export default function About() {
  const missionValues = [
    {
      icon: Heart,
      title: 'Our Mission',
      description:
        'To empower individuals, especially leaders, in identifying their full potential and sphere of influence, equipping them with exceptional communication skills, authentic personal branding, and principled leadership.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description:
        'A world where leaders communicate with confidence, build authentic brands, and lead with excellence across every sphere of influence.',
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description:
        'Transformative learning through live workshops, strategic coaching, and meaningful community engagement.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description:
        'Students, emerging leaders, and organizations united around purpose, impact, and personal growth.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="About VOCI"
        subtitle="Our Story"
        description="VOCI exists to equip change-makers with the skills, confidence, and strategy they need to create meaningful impact."
        backgroundImage="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                    color={
                      i === 0
                        ? 'bg-voci-red'
                        : i === 1
                        ? 'bg-voci-blue'
                        : i === 2
                        ? 'bg-voci-gold'
                        : 'bg-voci-green'
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Foundation"
            title="Our Core Values"
            description="These principles guide everything we do at VOCI."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <h3 className="text-xl font-bold text-voci-dark-blue mb-2">
                  {value.title}
                </h3>
                <p className="text-voci-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Leadership"
            title="Meet Our Team"
            description="Experienced professionals dedicated to helping you grow and succeed."
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

      {/* CTA */}
      <CtaBanner
        title="Join Our Mission"
        description="Be part of a community of leaders shaping the future."
        buttonLabel="Get Started"
        buttonHref="/join"
      />
    </>
  );
}
