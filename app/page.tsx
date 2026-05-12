'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import ProgramCard from '@/src/components/ProgramCard';
import EventCard from '@/src/components/EventCard';
import CtaBanner from '@/src/components/CtaBanner';
import { programs, events, values } from '@/src/lib/data';
import { MessageSquare, Zap, Crown, Shield, Target, Users } from 'lucide-react';

const iconMap: Record<string, any> = {
  MessageSquare,
  Zap,
  Crown,
  Shield,
  Target,
  Users,
};

export default function Home() {
  const spheres = [
    {
      title: 'Education',
      description: 'Empowering students and educators with confidence and clarity in communication.',
    },
    {
      title: 'Entrepreneurship',
      description: 'Helping founders build compelling brands and leadership presence.',
    },
    {
      title: 'Community',
      description: 'Strengthening local networks through principled leadership.',
    },
    {
      title: 'Media',
      description: 'Supporting storytellers to amplify their voice and influence.',
    },
    {
      title: 'Culture',
      description: 'Building values-driven narratives that resonate with diverse audiences.',
    },
    {
      title: 'Governance',
      description: 'Training leaders to make strategic, ethical decisions in public service.',
    },
    {
      title: 'Policy',
      description: 'Guiding advocates to communicate policy impact with precision.',
    },
    {
      title: 'Youth',
      description: 'Inspiring a new generation of bold and principled leaders.',
    },
  ];

  const initiatives = [
    {
      title: 'Leadership Workshops',
      description: 'Hands-on training that builds skill, confidence, and strategic impact.',
    },
    {
      title: 'Authentic Branding',
      description: 'Create a memorable brand grounded in values and purpose.',
    },
    {
      title: 'Mentorship Circles',
      description: 'Connect with experienced coaches and future-focused peers.',
    },
    {
      title: 'Digital Strategy',
      description: 'Amplify your influence with smart, authentic online storytelling.',
    },
    {
      title: 'Community Forums',
      description: 'Engage in conversations that shape the next phase of your leadership.',
    },
    {
      title: 'Global Partnerships',
      description: 'Collaborate with organizations to scale your impact across borders.',
    },
  ];

  const calendarEvents = events.slice(0, 3);

  const cohortHighlights = [
    {
      title: 'Live Campus Sessions',
      description: 'Cohort 1 is actively learning at MUT campus with real-time support.',
    },
    {
      title: 'Mentorship Support',
      description: 'One-on-one coaching and peer accountability keep every member moving forward.',
    },
    {
      title: 'Community Projects',
      description: 'Participants are applying new skills in high-impact initiatives locally.',
    },
    {
      title: 'Ongoing Growth',
      description: 'Weekly check-ins and action planning ensure consistent progress.',
    },
  ];

  return (
    <>
      <HeroSection
        title="Empower Your Voice, Transform Your Future"
        subtitle="Voice of Change Initiative"
        description="Join VOCI 2026 and develop exceptional communication skills, authentic personal branding, and principled leadership to create meaningful impact."
        backgroundImage="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
        buttons={[{ label: 'Learn More', href: '#about-section', variant: 'primary' }]}
      />

      <section className="py-20 md:py-32 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-voci-dark-blue mb-4">
                Join Our 2026 Workshop Series
              </h2>
              <p className="text-voci-gray mb-6">
                Be part of our vibrant community and build skills that will set you apart as a leader.
              </p>
              <ul className="space-y-4 text-voci-dark-blue text-lg">
                <li>• Transformative communication and public speaking training</li>
                <li>• Authentic personal branding that builds credibility</li>
                <li>• Principled leadership practices for real-world success</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="card p-8 bg-white rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">Transform Your Leadership</h3>
                <p className="text-voci-gray leading-relaxed mb-4">
                  VOCI 2026 brings you cutting-edge workshops designed to elevate your communication skills, build your personal brand, and develop principled leadership that creates real impact.
                </p>
                <a href="/events" className="btn btn-voci-blue">
                  View All Events
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="card p-6 bg-white rounded-3xl shadow-sm">
                  <h4 className="font-semibold text-voci-dark-blue mb-2">Interactive learning</h4>
                  <p className="text-voci-gray">Hands-on sessions that help you practice new skills immediately.</p>
                </div>
                <div className="card p-6 bg-white rounded-3xl shadow-sm">
                  <h4 className="font-semibold text-voci-dark-blue mb-2">Expert-led sessions</h4>
                  <p className="text-voci-gray">Led by seasoned facilitators with real leadership experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about-section" className="py-20 md:py-32 bg-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-voci-red uppercase tracking-[0.25em] font-semibold mb-4 inline-block">About VOCI</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Movement for Transformative Communication</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            VOCI is a transformative initiative empowering leaders to communicate with confidence, build authentic personal brands, and lead with integrity across every sphere of influence.
          </p>
          <a href="/about" className="btn btn-outline-light btn-lg mt-8">
            Learn More About Us
          </a>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-blue uppercase tracking-[0.3em] font-semibold">Our Objectives</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">What We Aim to Achieve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{value.title}</h3>
                <p className="text-voci-gray leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-red uppercase tracking-[0.3em] font-semibold">Our Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">The Three Pillars of VOCI</h2>
            <p className="text-voci-gray max-w-3xl mx-auto mt-4">
              Our learning paths are designed to build essential skills for confident communication, trusted branding, and principled leadership.
            </p>
          </div>

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
          <div className="text-center mt-12">
            <a href="/programs" className="btn btn-voci-blue btn-lg">
              See Full Program Details
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-gold uppercase tracking-[0.3em] font-semibold">Our Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">Spheres of Influence</h2>
            <p className="text-voci-gray max-w-3xl mx-auto mt-4">
              We empower leaders to apply their skills in the specific areas they are called to transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spheres.map((sphere, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl shadow-sm bg-voci-light-blue"
              >
                <h3 className="text-xl font-bold text-voci-dark-blue mb-3">{sphere.title}</h3>
                <p className="text-voci-gray leading-relaxed">{sphere.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/about#spheres" className="btn btn-voci-blue btn-lg">
              Learn More About the Spheres
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-red uppercase tracking-[0.3em] font-semibold">How We Do It</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">Our Key Initiatives</h2>
            <p className="text-voci-gray max-w-3xl mx-auto mt-4">
              VOCI achieves its mission through a structured blend of training, mentorship, and real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.slice(0, 3).map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{initiative.title}</h3>
                <p className="text-voci-gray leading-relaxed">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {initiatives.slice(3).map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{initiative.title}</h3>
                <p className="text-voci-gray leading-relaxed">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-gold uppercase tracking-[0.3em] font-semibold">Calendar</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">What's Next?</h2>
            <p className="text-voci-gray max-w-3xl mx-auto mt-4">
              Stay informed about our key dates and upcoming events. We'd love for you to join us!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {calendarEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="mb-4 text-sm uppercase text-voci-red font-semibold">{event.category}</div>
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{event.title}</h3>
                <p className="text-voci-gray mb-4">{event.description}</p>
                <div className="space-y-2 text-voci-gray text-sm">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/events" className="btn btn-voci-blue btn-lg">
              See Full Events Page
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-voci-gold uppercase tracking-[0.3em] font-semibold">Cohort 1 Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-voci-dark-blue mt-4">What We're Currently Doing</h2>
            <p className="text-voci-gray max-w-3xl mx-auto mt-4">
              January 2026 - Cohort 1 is actively growing at MUT Campus with live sessions, mentorship, and strategic initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cohortHighlights.map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-xl font-bold text-voci-dark-blue mb-3">{highlight.title}</h3>
                <p className="text-voci-gray leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 border-l-4 border-voci-blue"
            >
              <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">Impact Tracking</h3>
              <p className="text-voci-gray leading-relaxed">
                Ongoing reports and planning sessions keep every cohort member aligned with measurable outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 border-l-4 border-voci-red"
            >
              <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">Strategic Planning</h3>
              <p className="text-voci-gray leading-relaxed">
                Cohort 1 is designing actionable plans to move from learning to leadership in their communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 border-l-4 border-voci-gold"
            >
              <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">Community Engagement</h3>
              <p className="text-voci-gray leading-relaxed">
                Active collaborations with local groups bring VOCI’s principles to life in real settings.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-voci-dark-blue mb-6">
              Interested in joining Cohort 2 or learning more? Join VOCI today!
            </p>
            <a href="/join" className="btn btn-voci-blue btn-lg">
              Join Cohort 2
            </a>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Make an Impact?"
        description="Become part of VOCI and bring your leadership vision to life."
        buttonLabel="Apply Today"
        buttonHref="/join"
      />
    </>
  );
}
