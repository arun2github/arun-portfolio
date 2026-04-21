import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import ClientTestimonials from "@/components/ClientTestimonials";
import Clients from "@/components/Clients";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="pt-16">{/* 64px offset for fixed navbar */}
      <div>

{/* 🟦 FIRST IMPRESSION */}
<Hero />
<MetricsBar />
<About />

{/* 🟩 WHAT I CAN DO FOR YOU */}
<WhatIBuild />
<Technologies />

{/* 🟨 WHY TRUST ME */}
<Experience />
<Education />

{/* 🟥 PROOF OF WORK */}
<Projects />

{/* 🟪 SOCIAL PROOF */}
<Clients />
<ClientTestimonials />

{/* 🟧 CALL TO ACTION */}
<Process />
<Contact />

</div>
    </main>
  );
}
