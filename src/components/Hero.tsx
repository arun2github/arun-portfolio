'use client';

import React from 'react';
import CodeRainBackground from './CodeRainBackground';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  const headline = "Hello, I'm Arun";
  const tagline = "Mobile App & Web Developer | AI Agent Specialist | n8n Automation Expert | Strategic Technology Partner | Delivering Scalable Solutions Across Platforms";

  const devCharacters = 
    "const function async await => {} [] () : Widget build StatelessWidget StatefulWidget Future<void> " +
    "import export default class interface type new return if else for while true false null undefined " +
    "React.FC useState useEffect useRef useCallback useMemo useContext useReducer <div/> <span/> <p/> " +
    "NextPage GetServerSideProps GetStaticProps App Router API Route Middleware Edge Functions " +
    "TailwindCSS @apply theme extend plugins JIT AOT Flutter Dart Material Cupertino BLoC Provider Riverpod " +
    "setState build(BuildContext context) Scaffold AppBar Text Center Column Row Stack Padding Image.asset " +
    "010101011100101010111101010101010000111101010101010101<λ> ()=> γ Σ α β ƒ π ∞ ≠ ≤ ≥ ≈ Δ";

  // Placeholder URLs - replace with your actual links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/imarunjnv/",
    instagram: "https://www.instagram.com/infamous_fluky?igsh=MWQ4MTUzbjFibTM2MA==",
    github: "https://github.com/arun2github",
  };

  return (
    <section 
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-[#1A1D24]" // New dark background
    >
      <CodeRainBackground 
        textColor="#535C91" // Updated CodeRainBackground text color
        trailColor="rgba(26, 29, 36, 0.1)" // Trail color based on new bg, slightly more opaque for subtlety
        fontSize={15} // Slightly increased font size
        characters={devCharacters}
        animationFPS={20} // Slower animation (20 frames per second)
      />
      
      {/* <Hero3DScene 
        numShapes={35}          // Number of small 3D shapes
        spread={7}              // How far out the shapes can spread
        baseColor="#4FD1C5"     // Color for the wireframes and subtle lighting
        baseRotationSpeed={0.0015} // Base speed for individual shape rotation
      /> */} {/* Removed */}

      <div className="relative z-20 flex flex-col items-center text-center p-4 sm:p-8 max-w-4xl mx-auto">
        <div className="mb-6 animate-fadeInUp delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold whitespace-pre">
          {(() => {
            const beforeName = "Hello, I'm";
            const nameToStyle = "Arun";
            
            const elements = [];
            let charIndex = 0;
            
            // Part before the name
            for (let i = 0; i < beforeName.length; i++) {
              elements.push(
                <span 
                  key={`before-${i}`} 
                  className="inline-block char-animate"
                  style={{ animationDelay: `${charIndex * 0.05}s` }}
                >
                  {beforeName[i] === ' ' ? ' ' : beforeName[i]}
                </span>
              );
              charIndex++;
            }

            // Add extra space with margin
            elements.push(
              <span 
                key="extra-space"
                className="inline-block char-animate"
                style={{ 
                  animationDelay: `${charIndex * 0.05}s`,
                  marginRight: '0.5rem'
                }}
              >
                {' '}
              </span>
            );
            charIndex++;

            // Styled name part
            elements.push(
              <span key="namePart" className="inline-block">
                {nameToStyle.split("").map((nameChar, nameCharIndex) => (
                  <span 
                    key={`name-${nameCharIndex}`} 
                    className="char-animate bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-fuchsia-300 to-indigo-300 drop-shadow-lg"
                    style={{ animationDelay: `${(charIndex + nameCharIndex) * 0.05}s` }}
                  >
                    {nameChar}
                  </span>
                ))}
              </span>
            );

            return elements;
          })()}
        </div>
        <p 
          className="text-xl sm:text-2xl md:text-3xl text-neutral-300 mb-10 animate-fadeInUp" // Brighter text for tagline
          style={{ animationDelay: `${headline.length * 0.05 + 0.4}s` }}
        >
          {tagline}
        </p>
        <a 
          href="#projects"
          className="group relative px-8 py-3 bg-[#535C91] text-white font-semibold rounded-lg text-lg 
                     overflow-hidden shadow-lg transform transition-all duration-300 
                     hover:shadow-2xl hover:scale-105 
                     animate-fadeInUp"
          style={{ animationDelay: `${headline.length * 0.05 + 0.9}s` }}
        >
          <span className="absolute inset-0 w-0 bg-[#7E8CE0] transition-all duration-[350ms] ease-out group-hover:w-full"></span>
          <span className="relative group-hover:text-white transition-colors duration-300">View My Work</span>
        </a>
      </div>

      {/* Social Icons - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-30 flex space-x-4">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
          <Linkedin size={28} />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
          <Instagram size={28} />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
          <Github size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;