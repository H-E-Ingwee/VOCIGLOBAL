'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-voci-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-voci-gold">VOCI Global</h3>
            <p className="text-white/80">
              Transforming leaders with authentic voice, principled leadership, and global impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-voci-gold">Company</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Programs', 'Events', 'Resources', 'Team'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/80 hover:text-voci-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-voci-gold">Support</h4>
            <ul className="space-y-2">
              {['Contact', 'Join', 'Resources'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Contact' ? '/contact' : link === 'Join' ? '/join' : '/resources'} className="text-white/80 hover:text-voci-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-voci-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail size={18} />
                <span>hello@vociglobal.site</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone size={18} />
                <span>+234 812 345 6789</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={18} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {[
              { icon: Linkedin, url: 'https://www.linkedin.com/in/voci-global-3034b5361/' },
              { icon: Twitter, url: 'https://x.com/VociGlobal' },
              { icon: Instagram, url: 'https://www.instagram.com/vociglobal/' },
              { icon: Youtube, url: 'https://www.youtube.com/@VociGlobal' },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-voci-gold hover:text-voci-dark-blue transition-colors flex items-center justify-center"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <p className="text-white/60 text-sm">
            © 2026 Voice of Change Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
