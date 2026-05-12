'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Events', href: '/events' },
    { label: 'Resources', href: '/resources' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-voci-dark-blue shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-voci-gold rounded-lg flex items-center justify-center">
            <span className="font-bold text-voci-dark-blue text-lg">V</span>
          </div>
          <span className="text-white font-bold text-xl hidden md:inline">VOCI Global</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-voci-gold transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="btn btn-primary text-sm"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-voci-dark-blue border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-voci-gold transition-colors font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/join" className="btn btn-primary text-sm mt-2">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
