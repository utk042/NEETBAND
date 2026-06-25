import React from 'react';
import { IconHeadphones, IconArrowLeft } from '@tabler/icons-react';

export default function Dashboard({ setCurrentPage }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Icon */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(236,194,70,0.12)]">
          <IconHeadphones size={36} className="text-primary" aria-hidden="true" />
        </div>
        {/* Ping rings */}
        <span className="absolute inset-0 rounded-2xl border border-primary/20 animate-ping opacity-40" />
      </div>

      {/* Text */}
      <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold mb-4">
        Dashboard
      </p>

      <h1 className="font-headline-lg font-bold text-3xl md:text-5xl text-on-surface text-center leading-tight tracking-tight mb-4 max-w-lg">
        Something great<br />is on its way.
      </h1>

      <p className="text-on-surface-variant/70 text-base md:text-lg text-center max-w-sm leading-relaxed mb-10">
        We're building your personalised study dashboard — Library, Practice Zone, Student Hub &amp; Favourites — all in one place.
      </p>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-surface-container rounded-full overflow-hidden mb-10">
        <div
          className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
          style={{ width: '42%', animation: 'shimmer 2s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Back button */}
      <button
        onClick={() => setCurrentPage?.('home')}
        className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl px-3 py-2 group"
      >
        <IconArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        Back to Home
      </button>

      <style>{`
        @keyframes shimmer {
          from { width: 36%; opacity: 0.7; }
          to   { width: 52%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
