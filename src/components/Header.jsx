import React, { useState, useEffect } from 'react';
import { IconMenu2, IconX, IconMoon, IconSun, IconLogin, IconSearch, IconHelp } from '@tabler/icons-react';
import logoImg from '../assets/logo.png';

export default function Header({ theme, toggleTheme, currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNav = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const linkClass = (page) => 
    `font-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-2 py-1 ${currentPage === page ? 'text-primary font-bold hover:opacity-80' : 'text-on-surface hover:text-primary'}`;

  return (
    <>
      <header data-gsap="header" className="fixed top-0 w-full z-[60] bg-surface/85 backdrop-blur-md border-b border-outline/20 transition-colors duration-300">
        <div className="flex justify-between items-center px-gutter py-4 md:py-2.5 w-full max-w-container-max mx-auto gap-8 relative z-[60] bg-transparent">
          <div className="flex items-center gap-sm">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl relative w-10 h-10 flex items-center justify-center overflow-hidden"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <IconMenu2 size={24} className={`absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} aria-hidden="true" />
              <IconX size={24} className={`absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} aria-hidden="true" />
            </button>
            <img alt="NeetBand Logo" className="h-14 md:h-16 w-[122px] md:w-[139px] object-contain transition-[height,width] duration-300" src={logoImg} width={512} height={236}/>
          </div>
          
          <nav className="hidden lg:flex items-center gap-5">
            <a className={linkClass('home')} href="#" onClick={(e) => handleNav(e, 'home')}>Home</a>
            <a className={linkClass('dashboard')} href="#" onClick={(e) => handleNav(e, 'dashboard')}>Dashboard</a>
            <a className={linkClass('blog')} href="#" onClick={(e) => handleNav(e, 'blog')}>Blog</a>
            <a className={linkClass('about')} href="#" onClick={(e) => handleNav(e, 'about')}>About</a>
            <a className={linkClass('contact')} href="#" onClick={(e) => handleNav(e, 'contact')}>Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              id="theme-toggle" 
              onClick={toggleTheme}
              className="hidden md:flex p-2.5 rounded-full hover:bg-surface-container transition-colors text-on-surface items-center justify-center border border-[var(--border-floating-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" 
              aria-label="Toggle Theme"
            >
              <IconMoon size={22} className="dark:hidden" aria-hidden="true" />
              <IconSun size={22} className="hidden dark:block" aria-hidden="true" />
            </button>
            
            <button className="group font-label-md text-on-primary bg-primary px-5 py-2.5 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-[colors,box-shadow,transform] shadow-sm hover:shadow-md active:scale-[0.98] active:translate-y-[1px] duration-200 flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
              Log In <IconLogin size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Page Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-surface z-[58] flex flex-col justify-center items-center gap-8 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container to-surface opacity-95 pointer-events-none"></div> 
        
        {/* Animated Links */}
        <div className={`flex flex-col items-center gap-6 pt-10 overflow-y-auto max-h-screen transition-all duration-700 delay-100 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a onClick={(e) => handleNav(e, 'home')} className={`font-headline-lg text-3xl md:text-5xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-6 py-2 relative z-10 ${currentPage === 'home' ? 'text-primary hover:scale-110' : 'text-on-surface hover:text-primary hover:scale-110'}`} href="#">Home</a>
          <a onClick={(e) => handleNav(e, 'dashboard')} className={`font-headline-lg text-3xl md:text-5xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-6 py-2 relative z-10 ${currentPage === 'dashboard' ? 'text-primary hover:scale-110' : 'text-on-surface hover:text-primary hover:scale-110'}`} href="#">Dashboard</a>
          <a onClick={(e) => handleNav(e, 'blog')} className={`font-headline-lg text-3xl md:text-5xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-6 py-2 relative z-10 ${currentPage === 'blog' ? 'text-primary hover:scale-110' : 'text-on-surface hover:text-primary hover:scale-110'}`} href="#">Blog</a>
          <a onClick={(e) => handleNav(e, 'about')} className={`font-headline-lg text-3xl md:text-5xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-6 py-2 relative z-10 ${currentPage === 'about' ? 'text-primary hover:scale-110' : 'text-on-surface hover:text-primary hover:scale-110'}`} href="#">About Us</a>
          <a onClick={(e) => handleNav(e, 'contact')} className={`font-headline-lg text-3xl md:text-5xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-6 py-2 relative z-10 ${currentPage === 'contact' ? 'text-primary hover:scale-110' : 'text-on-surface hover:text-primary hover:scale-110'}`} href="#">Contact Us</a>
        </div>

        {/* Decorative Bottom Elements */}
        <div className={`absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10 transition-all duration-700 delay-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button className="text-on-surface-variant hover:text-primary hover:scale-110 transition-[colors,transform] duration-200 p-2 rounded-full bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex items-center justify-center" aria-label="Search">
            <IconSearch size={28} className="block" />
          </button>
          <button 
            onClick={toggleTheme}
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-[colors,transform] duration-200 p-2 rounded-full bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex items-center justify-center" 
            aria-label="Toggle Theme"
          >
            <IconMoon size={28} className="block dark:hidden" aria-hidden="true" />
            <IconSun size={28} className="block hidden dark:block" aria-hidden="true" />
          </button>
          <button className="text-on-surface-variant hover:text-primary hover:scale-110 transition-[colors,transform] duration-200 p-2 rounded-full bg-surface-container-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex items-center justify-center" aria-label="Help">
            <IconHelp size={28} className="block" />
          </button>
        </div>
      </div>
    </>
  );
}

