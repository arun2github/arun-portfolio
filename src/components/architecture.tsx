"use client";
import React from "react";
import { motion } from "framer-motion";
import { Folder, CheckCircle2 } from "lucide-react";

const ArchitectureSection: React.FC = () => {
  return (
    <section
      id="architecture"
      className="py-20 md:py-32 relative bg-gradient-to-br from-[#0F1117] via-[#1A1D24] to-[#0F1117] overflow-hidden"
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#7E8CE0]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#535C91]/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#9EA3E5] to-[#535C91]"
        >
          How I Build Apps & Websites
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto text-neutral-300 mb-12 text-lg"
        >
          My development process combines{" "}
          <span className="text-[#7E8CE0] font-semibold">Clean Architecture</span>,{" "}
          <span className="text-[#7E8CE0] font-semibold">MVVM</span>, and{" "}
          <span className="text-[#7E8CE0] font-semibold">Next.js best practices</span>{" "}
          to deliver solutions that are <strong>scalable, maintainable, and future-ready.</strong>
        </motion.p>

        {/* 🌟 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <ArchitectureCard
            title="Clean Architecture"
            description="For large-scale apps — separates UI, data & logic for a maintainable and bug-free system."
            structure={`lib/
├── core/          
├── data/          
├── domain/        
├── presentation/  
└── routes/`}
          />

          <ArchitectureCard
            title="MVVM"
            description="Perfect for small to mid-size apps — keeps business logic away from UI for easy updates."
            structure={`lib/
├── models/       
├── viewmodels/   
├── views/        
└── services/`}
          />

          <ArchitectureCard
            title="Next.js Website"
            description="For web projects — structured for performance, scalability, and clean development."
            structure={`project-root/
├── app/ or pages/     
├── components/        
├── styles/            
├── lib/               
├── public/            
├── hooks/             
└── context/`}
          />
        </div>

        {/* ✅ What This Means for You */}
        <div className="text-center max-w-3xl mx-auto mt-20">
          <h4 className="text-2xl font-bold text-[#9EA3E5] mb-6">
            💡 What This Means for You
          </h4>

          {/* Icons + Text neatly aligned */}
          <ul className="text-neutral-300 text-lg space-y-4 inline-block">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 text-left"
              >
                {/* ✅ Gradient Glow Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#7E8CE0] to-[#535C91] shadow-md shadow-[#7E8CE0]/50 mt-1"
                >
                  <CheckCircle2 className="text-white w-5 h-5" />
                </motion.div>

                {/* Text */}
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;

const benefits = [
  "Faster development & future-proof updates",
  "Cleaner code, fewer bugs & better stability",
  "Scalable design that grows with your needs",
  "Easy collaboration if more devs join your project",
];

/* ✅ Reusable Card Component */
interface CardProps {
  title: string;
  description: string;
  structure: string;
}

const ArchitectureCard: React.FC<CardProps> = ({ title, description, structure }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-[#7E8CE0]/30"
    >
      {/* 📂 Title */}
      <h3 className="text-2xl font-semibold text-[#9EA3E5] flex items-center gap-2">
        <Folder className="w-5 h-5 text-[#7E8CE0]" /> {title}
      </h3>
      <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{description}</p>

      {/* 🗂 Folder Viewer */}
      <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
        {/* VS Code style header */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#2B2F40] border-b border-white/10">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-2 text-xs text-neutral-400">project-structure.ts</span>
        </div>

        {/* Code Box */}
        <div className="bg-[#1F2230] p-4">
          <pre className="text-green-300 font-mono text-sm leading-6 whitespace-pre">
            {structure}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};
