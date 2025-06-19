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
  return (
    <main>
      {/* Mobile Fallback: Hidden on medium and larger screens */}
      <div className="md:hidden">
        <MobileFallback />
      </div>

      {/* Desktop Content: Hidden on small screens, visible on medium and larger screens */}
      <div className="hidden md:block">
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
    </main>
  );
}
