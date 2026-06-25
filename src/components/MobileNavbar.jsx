import React from 'react';
import { IconHome, IconLayoutDashboard, IconArticle, IconInfoCircle, IconMail } from '@tabler/icons-react';

export default function MobileNavbar({ currentPage, setCurrentPage }) {
  const items = [
    { id: 'home',      label: 'Home',      icon: IconHome },
    { id: 'dashboard', label: 'Dashboard', icon: IconLayoutDashboard },
    { id: 'blog',      label: 'Blog',      icon: IconArticle },
    { id: 'about',     label: 'About',     icon: IconInfoCircle },
    { id: 'contact',   label: 'Contact',   icon: IconMail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[70] flex justify-around items-center px-2 h-20 bg-surface-container/90 backdrop-blur-xl border-t border-[var(--border-nav-layout)] shadow-[var(--shadow-nav-layout)] md:hidden transition-all duration-300 fixed-bottom-safe">
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = currentPage === id;
        return (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 active:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <Icon size={22} className="block" aria-hidden="true" />
            <span className="font-label-sm text-[10px] font-semibold">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
