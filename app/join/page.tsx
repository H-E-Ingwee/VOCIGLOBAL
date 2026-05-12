'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import CtaBanner from '@/src/components/CtaBanner';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';
import { testimonials } from '@/src/lib/data';

export default function Join() {
  const benefits = [
    { icon: CheckCircle, title: 'Flexible Learning', description: 'Learn at your own pace with a program that fits your schedule.' },
    { icon: Users, title: 'Global Network', description: 'Join a community of professionals, leaders, and changemakers across the world.' },
    { icon: Award, title: 'Certification', description: 'Receive a certificate that demonstrates your leadership, branding, and communication mastery.' },
    { icon: Globe, title: 'Strategic Growth', description: 'Access career support, mentorship, and opportunities to scale your impact.' },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Join the Movement"
        subtitle="Become a VOCI Member"
        description="Start your transformational journey with purpose-driven learning, mentorship, and community support."
        backgroundImage="https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
        buttons={[{ label: 'Apply Now', href: '#application', variant: 'primary' }]}
      />

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Why Join"
            title="Member Benefits"
            description="Be part of a community that invests in your potential and your purpose."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center"
                >
                  <div className="icon-badge bg-voci-blue text-white mb-4 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-voci-dark-blue mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-voci-gray text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Process */}
      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="How It Works"
            title="Our Application Process"
            description="Simple steps that move you from interest to active participation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Apply Online',
                description: 'Tell us about your goals and background through our application form.',
              },
              {
                title: 'Review & Connect',
                description: 'Our team reviews your profile and schedules a short onboarding conversation.',
              },
              {
                title: 'Begin Your Journey',
                description: 'Start learning with our immersive sessions, coaching, and community activities.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-voci-dark-blue mb-3">{step.title}</h3>
                <p className="text-voci-gray leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-32 bg-white" id="application">
        <div className="max-w-2xl mx-auto px-6">
          <SectionTitle
            label="Apply Now"
            title="Membership Application"
            description="Complete the form below and our team will connect with you about next steps."
          />

          <motion.form
            className="card p-8 md:p-12 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
              />
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
                required
              >
                <option value="">Select Program</option>
                <option value="communication">Effective Communication</option>
                <option value="branding">Authentic Personal Branding</option>
                <option value="leadership">Principled Leadership</option>
              </select>
            </div>

            <textarea
              placeholder="Tell us about your background and goals"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition resize-none"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
          </motion.form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="What People Say"
            title="Testimonials"
            description="Hear from members who have grown with VOCI."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <p className="text-voci-gray leading-relaxed mb-6">"{testimonial.text}"</p>
                <p className="font-semibold text-voci-dark-blue">{testimonial.author}</p>
                <p className="text-sm text-voci-gray">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Ready to Begin?"
        description="Submit your application and become part of the VOCI community."
        buttonLabel="Apply Today"
        buttonHref="/contact"
      />
    </>
  );
}
