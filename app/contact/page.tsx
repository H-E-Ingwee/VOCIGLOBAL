'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/src/components/HeroSection';
import SectionTitle from '@/src/components/SectionTitle';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="Reach out for program inquiries, partnerships, or support. Our team is ready to help."
        backgroundImage="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
      />

      {/* Contact Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Get Started"
            title="Connect with the VOCI Team"
            description="Multiple ways to reach us for questions, applications, and partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@vociglobal.site',
                subtext: 'Priority support for inquiries and applications',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+234 812 345 6789',
                subtext: 'Available Mon-Fri, 8AM–6PM WAT',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Lagos, Nigeria',
                subtext: 'Regional hub for our global programs',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center"
                >
                  <div className="icon-badge bg-voci-gold text-white mb-4 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-voci-dark-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-voci-gray font-semibold mb-1">{item.content}</p>
                  <p className="text-voci-gray text-sm">{item.subtext}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-gradient-light">
        <div className="max-w-2xl mx-auto px-6">
          <SectionTitle
            label="Message Us"
            title="Send a Message"
            description="We will respond as soon as possible with the next steps."
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
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-voci-blue focus:ring-2 focus:ring-voci-blue/20 outline-none transition resize-none"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
