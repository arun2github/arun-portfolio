import React from 'react';

const FlutterUIDemo = () => (
  <section className="hidden md:block py-12 md:py-20 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] flex flex-col items-center justify-center w-full">
    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]">
      Flutter UI Showcase
    </h2>
    <p className="max-w-xl text-center text-base md:text-lg text-slate-300 mb-8 px-2 mx-auto">
      Explore a showcase of my Flutter expertise—modern, aesthetic, and responsive UIs crafted for real-world impact. This interactive demo highlights my ability to blend design and engineering for seamless user experiences.
    </p>
    {/* iPhone 16 Pro Max Frame - Larger Size */}
    <div className="relative mt-6 w-full flex justify-center">
      {/* 3D Background Effect */}
      <div className="absolute w-[620px] h-[1100px] bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-slate-900/30 rounded-[80px] blur-3xl transform scale-110"></div>
      {/* Phone Body - Titanium Finish */}
      <div className="relative w-[520px] h-[1020px] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-[80px] p-5 shadow-2xl border-8 border-slate-600/30 backdrop-blur-sm">
        {/* Inner Frame Glow */}
        <div className="absolute inset-0 rounded-[80px] bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none"></div>
        {/* 3D Edge Highlights */}
        <div className="absolute inset-0 rounded-[80px] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 rounded-[80px] bg-gradient-to-tl from-black/40 via-transparent to-transparent pointer-events-none"></div>
        {/* Screen */}
        <div className="relative w-full h-full bg-black rounded-[72px] overflow-hidden shadow-inner">
          {/* Screen Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/40 rounded-[72px] pointer-events-none z-10"></div>
          {/* Screen Content - Full Screen */}
          <div className="w-full h-full relative z-0">
            <iframe
              src="https://aestheticflutterui.netlify.app/"
              title="Flutter UI Showcase"
              width="100%"
              height="100%"
              className="w-full h-full border-0 rounded-[72px]"
              allow="fullscreen"
            />
          </div>
          {/* Home Indicator */}
          <div className="absolute bottom-[18px] left-1/2 transform -translate-x-1/2 w-[150px] h-[7px] bg-white/80 rounded-full opacity-80 z-20 shadow-sm"></div>
        </div>
        {/* Action Button (Right Side) */}
        <div className="absolute top-[160px] -right-[3px] w-[3px] h-[40px] bg-gradient-to-b from-slate-500 to-slate-700 rounded-r-sm shadow-sm">
          <div className="w-full h-full bg-gradient-to-b from-slate-400/50 to-slate-600/50 rounded-r-sm"></div>
        </div>
        {/* Volume Up Button */}
        <div className="absolute top-[240px] -right-[3px] w-[3px] h-[40px] bg-gradient-to-b from-slate-500 to-slate-700 rounded-r-sm shadow-sm">
          <div className="w-full h-full bg-gradient-to-b from-slate-400/50 to-slate-600/50 rounded-r-sm"></div>
        </div>
        {/* Volume Down Button */}
        <div className="absolute top-[320px] -right-[3px] w-[3px] h-[40px] bg-gradient-to-b from-slate-500 to-slate-700 rounded-r-sm shadow-sm">
          <div className="w-full h-full bg-gradient-to-b from-slate-400/50 to-slate-600/50 rounded-r-sm"></div>
        </div>
        {/* Mute Switch (Left Side) */}
        <div className="absolute top-[160px] -left-[3px] w-[3px] h-[40px] bg-gradient-to-b from-slate-500 to-slate-700 rounded-l-sm shadow-sm">
          <div className="w-full h-full bg-gradient-to-b from-slate-400/50 to-slate-600/50 rounded-l-sm"></div>
        </div>
        {/* Bottom Speaker Grille */}
        <div className="absolute bottom-[32px] left-1/2 transform -translate-x-1/2 w-[150px] h-[6px] bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-full shadow-inner">
          <div className="w-full h-full bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 rounded-full"></div>
        </div>
        {/* Top Speaker */}
        <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 w-[90px] h-[4px] bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-full shadow-inner"></div>
      </div>
      {/* Ambient Light Effect */}
      <div className="absolute w-[620px] h-[1100px] bg-gradient-to-br from-slate-400/5 via-transparent to-slate-600/5 rounded-[80px] blur-2xl scale-105 pointer-events-none"></div>
    </div>
  </section>
);

export default FlutterUIDemo;