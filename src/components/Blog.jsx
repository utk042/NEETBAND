import React from 'react';
import { IconArrowRight, IconCalendarEvent, IconClock } from '@tabler/icons-react';
import blogAuditoryMemory from '../assets/blog_auditory_memory.png';
import blogEyeFatigue from '../assets/blog_eye_fatigue.png';
import blogDnaReplication from '../assets/blog_dna_replication.png';
import blogActiveRecall from '../assets/blog_active_recall.png';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Leveraging Auditory Memory for High-Stakes Exams",
      excerpt: "Discover how turning complex biology pathways into rhythmic mnemonics can increase retention rates by up to 40% compared to traditional rote learning.",
      date: "Oct 15, 2024",
      readTime: "5 min read",
      category: "Study Hacks",
      image: blogAuditoryMemory
    },
    {
      id: 2,
      title: "Preventing Eye Fatigue in CBSE Preparation",
      excerpt: "Screen time is unavoidable, but eye strain doesn't have to be. Learn the 20-20-20 rule and other ophthalmologist-recommended practices.",
      date: "Oct 08, 2024",
      readTime: "7 min read",
      category: "Wellness",
      image: blogEyeFatigue
    },
    {
      id: 3,
      title: "Mastering DNA Replication Before the Boards",
      excerpt: "A step-by-step breakdown of how to use our DNA Replication Mnemonic track to memorize enzymes and processes perfectly.",
      date: "Sep 28, 2024",
      readTime: "4 min read",
      category: "Curriculum",
      image: blogDnaReplication
    },
    {
      id: 4,
      title: "The Science of Active Recall",
      excerpt: "Why passive reading gives you an illusion of competence, and how to structure your study sessions for true mastery.",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      category: "Methodology",
      image: blogActiveRecall
    }
  ];

  return (
    <section className="py-32 px-gutter bg-transparent relative min-h-screen transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(var(--color-outline),0.1)] to-transparent"></div>
      
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg font-bold text-headline-lg-mobile md:text-4xl text-on-surface mb-3 text-balance">Study Insights</h2>
          <p className="font-body-md font-normal text-lg text-on-surface-variant opacity-80">
            Expert advice, scientifically backed study methods, and wellness tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const isFeatured = index === 0;
            return (
              <article 
                key={article.id} 
                className={`bg-surface-container-lowest rounded-3xl border border-[var(--border-floating-card)] shadow-[var(--shadow-floating-card)] overflow-hidden hover:border-primary/30 transition-all duration-300 group flex flex-col ${
                  isFeatured 
                    ? 'md:col-span-2 lg:col-span-3 lg:flex-row' 
                    : 'col-span-1'
                }`}
              >
                {/* Image Section */}
                <div className={`overflow-hidden relative border-[var(--border-floating-card)] ${
                  isFeatured 
                    ? 'w-full lg:w-1/2 h-64 lg:h-auto border-b lg:border-b-0 lg:border-r' 
                    : 'w-full h-48 border-b'
                }`}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md text-on-surface text-[10px] font-bold uppercase tracking-wider border border-[var(--border-floating-card)]">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`p-6 md:p-8 flex-1 flex flex-col justify-center ${isFeatured ? 'lg:p-12' : ''}`}>
                  <div className="flex items-center gap-4 mb-3 text-on-surface-variant/70 text-xs font-body-md">
                    <span className="flex items-center gap-1.5"><IconCalendarEvent size={14} /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><IconClock size={14} /> {article.readTime}</span>
                  </div>
                  
                  <h3 className={`font-headline-md font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug ${
                    isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <a href="#" className="inline-flex items-center gap-2 font-label-md text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Read Article <IconArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3.5 rounded-xl border border-[var(--border-floating-card)] bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
