import React, { useState } from 'react';
import { IconCircleCheckFilled, IconMail, IconPhone, IconMapPin, IconClock, IconHeartFilled } from '@tabler/icons-react';
import logoImg from '../assets/logo.png';

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    setError('');
    setEmail('');
  };

  return (
    <footer className="w-full bg-surface border-t border-[var(--border-nav-layout)] px-gutter pt-20 pb-12 md:pb-12 z-10 relative overflow-hidden transition-all duration-300">
      <div className="max-w-container-max mx-auto relative">
        
        {/* Top Section: Newsletter split layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-[var(--border-nav-layout)] pb-12 mb-12 w-full">
          
          {/* Newsletter text info */}
          <div className="flex flex-col gap-2 max-w-xl w-full text-left">
            <h3 className="font-headline-md text-lg text-on-surface font-extrabold tracking-tight">
              Stay Ahead in Your NEET Prep
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed">
              Weekly mnemonics, hand-picked biology tracks, and revision hacks delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form input/button */}
          <div className="max-w-md w-full">
            {subscribed ? (
              <div className="flex items-center gap-2.5 text-primary font-body-md text-sm bg-primary/10 border border-primary/20 px-4 py-3 rounded-2xl animate-pulse">
                <IconCircleCheckFilled size={20} className="flex-shrink-0" />
                <span>You’re in! Check your inbox for your first set of study tracks.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address… e.g. name@domain.com"
                    aria-label="Your email address"
                    className="px-5 py-3 rounded-xl bg-surface-container border border-[var(--border-floating-card)] text-sm text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-[background-color,border-color,box-shadow] duration-200 flex-1"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-fixed hover:text-on-primary-fixed text-on-primary font-label-md text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98] active:translate-y-[1px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <span className="text-error text-xs ml-4 font-body-md">{error}</span>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Middle Section: Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 border-b border-[var(--border-nav-layout)] pb-12 mb-12">
          
          {/* Brand Info & Socials */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <img alt="NeetBand Logo" className="h-12 w-auto object-contain" src={logoImg} width={512} height={236}/>
            <p className="font-body-md text-sm text-on-surface-variant/80 max-w-[300px] leading-relaxed">
              Premium curriculum-aligned study songs designed to boost active recall and reduce screen fatigue. Turn textbooks into sound.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container border border-[var(--border-floating-card)] flex items-center justify-center text-on-surface-variant hover:text-[#FF0000] hover:border-[#FF0000]/45 hover:bg-surface transition-all duration-300" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container border border-[var(--border-floating-card)] flex items-center justify-center text-on-surface-variant hover:text-[#E1306C] hover:border-[#E1306C]/45 hover:bg-surface transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container border border-[var(--border-floating-card)] flex items-center justify-center text-on-surface-variant hover:text-[#0077B5] hover:border-[#0077B5]/45 hover:bg-surface transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container border border-[var(--border-floating-card)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/45 hover:bg-surface transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Syllabus Links */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-4">
            <h4 className="font-headline-md text-sm text-on-surface font-extrabold uppercase tracking-widest">Syllabus</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Class 11 Biology</a>
              <a href="#" className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Class 12 Biology</a>
              <a href="#" className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Physics Mnemonics</a>
              <a href="#" className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Chemistry Formulas</a>
            </nav>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-headline-md text-sm text-on-surface font-extrabold uppercase tracking-widest">Platform</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => document.getElementById('syllabus-library')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Syllabus Library</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('practice'); }} className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Practice Zone</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('student-hub'); }} className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Student Hub</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('blog'); }} className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">Study Insights (Blog)</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className="font-body-md text-sm text-on-surface-variant/80 hover:text-primary transition-all duration-200 hover:translate-x-1.5 inline-block">About Us</a>
            </nav>
          </div>

          {/* Support & Contact */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-headline-md text-sm text-on-surface font-extrabold uppercase tracking-widest">Contact & Support</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-on-surface-variant/80 font-body-md">
              <li className="flex items-start gap-2.5">
                <IconMail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} className="hover:text-primary transition-colors">support@neetband.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconPhone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+918047193393" className="hover:text-primary transition-colors">+91 80 4719 3393</a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconMapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Sector 62, Noida,<br/>Uttar Pradesh, 201301</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9 AM - 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright, Badges & Legal links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Left: Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="font-body-md text-xs text-on-surface-variant/70">
              © {new Date().getFullYear()} NeetBand. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="font-body-md text-xs text-on-surface-variant/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-body-md text-xs text-on-surface-variant/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="font-body-md text-xs text-on-surface-variant/60 hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>

          {/* Right: Startup Badge & Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Made In India label */}
            <div className="flex items-center gap-1 font-body-md text-xs text-on-surface-variant/70">
              <span>Made with</span>
              <IconHeartFilled size={14} className="text-red-500" />
              <span>in India</span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
