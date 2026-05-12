'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import EventCard from '@/src/components/EventCard';
import CtaBanner from '@/src/components/CtaBanner';
import { events } from '@/src/lib/data';

export default function Events() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Events & Workshops"
        subtitle="VOCI Experiences"
        description="Discover upcoming workshops and forums designed to accelerate your leadership and brand impact."
        backgroundImage="https://images.pexels.com/photos/3184459/pexels-photo-3184459.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      {/* Events */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Upcoming Events"
            title="Transformative Workshops & Summits"
            description="Engage with interactive sessions that deliver lasting growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
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

      {/* CTA */}
      <CtaBanner
        title="Stay Connected"
        description="Secure your place in the next event and grow with VOCI’s network."
        buttonLabel="Apply Now"
        buttonHref="/join"
      />
    </>
  );
}
