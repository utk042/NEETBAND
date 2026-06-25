import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyPlayer from './components/StickyPlayer';
import MobilePlayer from './components/MobilePlayer';
import PremiumModal from './components/PremiumModal';
import MobileNavbar from './components/MobileNavbar';
import FAQ from './components/FAQ';
import LoadingScreen from './components/LoadingScreen';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import useScrollAnimations from './hooks/useScrollAnimations';

// Import images
import mendelianGeneticsAnthemCover from './assets/mendelian_genetics_anthem.png';
import chromosomalTheoryFlowCover from './assets/chromosomal_theory_flow.png';
import molecularStructureCover from './assets/molecular_structure.png';

const TRACKS = [
  {
    id: 1,
    title: "Mendelian Genetics Anthem",
    chapter: "Genetics & Evolution",
    duration: "4:20",
    durationSeconds: 260,
    cover: mendelianGeneticsAnthemCover,
    premium: false
  },
  {
    id: 2,
    title: "Chromosomal Theory Flow",
    chapter: "Genetics & Evolution",
    duration: "3:45",
    durationSeconds: 225,
    cover: chromosomalTheoryFlowCover,
    premium: true
  },
  {
    id: 3,
    title: "DNA Replication Mnemonic",
    chapter: "Molecular Basis of Inheritance",
    duration: "6:12",
    durationSeconds: 372,
    cover: molecularStructureCover,
    premium: true
  },
  {
    id: 4,
    title: "Transcription Mnemonic",
    chapter: "Molecular Basis of Inheritance",
    duration: "5:05",
    durationSeconds: 305,
    cover: chromosomalTheoryFlowCover,
    premium: true
  },
  {
    id: 5,
    title: "Translation Flow",
    chapter: "Molecular Basis of Inheritance",
    duration: "4:40",
    durationSeconds: 280,
    cover: mendelianGeneticsAnthemCover,
    premium: true
  }
];

export default function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('home');

  // Favorites state
  const [favoritedTrackIds, setFavoritedTrackIds] = useState([]);

  // Loading screen state
  const [isLoading, setIsLoading] = useState(true);

  // Activate GSAP scroll animations once loading is done
  useScrollAnimations(!isLoading);

  // Theme state
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Audio Playback state
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Modals state
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

  // Sync theme to root html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Mock audio interval timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.durationSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const togglePlay = () => {
    if (currentTrack.premium) {
      setIsPremiumModalOpen(true);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  const handleToggleFavorite = (trackId) => {
    setFavoritedTrackIds((prev) => {
      if (prev.includes(trackId)) {
        return prev.filter(id => id !== trackId);
      } else {
        return [...prev, trackId];
      }
    });
  };

  const handleTrackSelect = (track) => {
    if (track.premium) {
      setIsPremiumModalOpen(true);
      return;
    }
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const handleNext = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id);
    const nextIdx = (idx + 1) % TRACKS.length;
    const nextTrack = TRACKS[nextIdx];
    if (nextTrack.premium) {
      setIsPremiumModalOpen(true);
      setIsPlaying(false);
    } else {
      setCurrentTrack(nextTrack);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const handlePrev = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id);
    const prevIdx = (idx - 1 + TRACKS.length) % TRACKS.length;
    const prevTrack = TRACKS[prevIdx];
    if (prevTrack.premium) {
      setIsPremiumModalOpen(true);
      setIsPlaying(false);
    } else {
      setCurrentTrack(prevTrack);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header theme={theme} toggleTheme={toggleTheme} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero 
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              onUpgradeClick={() => setIsPremiumModalOpen(true)}
            />
            <Features />
            <StatsSection appReady={!isLoading} />
            <Pricing onUpgrade={() => setIsPremiumModalOpen(true)} />
            <FAQ />
          </>
        )}

        {currentPage === 'dashboard' && (
          <Dashboard
            setCurrentPage={setCurrentPage}
            tracks={TRACKS}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onTrackSelect={handleTrackSelect}
            currentTime={currentTime}
            favoritedTrackIds={favoritedTrackIds}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {currentPage === 'blog' && <Blog />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'contact' && <ContactUs />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Players */}
      <StickyPlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentTime={currentTime}
        onNext={handleNext}
        onPrev={handlePrev}
        onSeek={setCurrentTime}
        favoritedTrackIds={favoritedTrackIds}
        onToggleFavorite={handleToggleFavorite}
      />

      <MobilePlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentTime={currentTime}
        onNext={handleNext}
        favoritedTrackIds={favoritedTrackIds}
        onToggleFavorite={handleToggleFavorite}
      />

      <MobileNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* PWA install prompt */}
      <PWAInstallPrompt />

      {/* Modals */}
      <PremiumModal 
        isOpen={isPremiumModalOpen} 
        onClose={() => setIsPremiumModalOpen(false)} 
      />
    </>
  );
}
