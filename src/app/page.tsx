'use client';

import { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import MobileFallback from "@/components/MobileFallback";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  const [showDesktopOnMobile, setShowDesktopOnMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if user has previously chosen to view desktop on mobile
    const mobileViewPreference = localStorage.getItem('mobileViewEnabled');
    if (mobileViewPreference === 'true') {
      setShowDesktopOnMobile(true);
    }

    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    // Listen for the custom event from MobileFallback
    const handleMobileViewEnabled = () => {
      setShowDesktopOnMobile(true);
    };

    window.addEventListener('mobileViewEnabled', handleMobileViewEnabled);

    return () => {
      window.removeEventListener('mobileViewEnabled', handleMobileViewEnabled);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleBackToMobileView = () => {
    setShowDesktopOnMobile(false);
    localStorage.removeItem('mobileViewEnabled');
  };

  return (
    <main>
      {/* Mobile Fallback: Show only if user hasn't chosen to view desktop on mobile */}
      {!showDesktopOnMobile && (
        <div className="md:hidden">
          <MobileFallback />
        </div>
      )}

      {/* Desktop Content: Show on desktop OR when user chooses to view on mobile */}
      <div className={showDesktopOnMobile ? "block" : "hidden md:block"}>
        <Hero />
        <About />
        <WhatIBuild />
        <Experience />
        <Education />
        <Projects />
        <Technologies />
        <Contact />
        {/* Parallax scrolling will be implemented in these sections later */}
      </div>

      {/* Back to Mobile View Button - Only show on mobile when viewing desktop content */}
      {showDesktopOnMobile && isMobile && (
        <button
          onClick={handleBackToMobileView}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 backdrop-blur-sm rounded-full text-white shadow-lg hover:shadow-xl hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 border border-white/20 hover:border-white/40"
          title="Back to Mobile View"
        >
          <Smartphone size={20} />
        </button>
      )}
    </main>
  );
}
