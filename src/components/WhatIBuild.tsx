'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Zap, Code2, Cpu, Workflow, Palette, Rocket, Shield } from 'lucide-react';

const WhatIBuild = () => {
  const buildItems = [
    {
      icon: Brain,
      title: "AI Agents",
      description: "Intelligent automation solutions that understand, learn, and execute complex tasks autonomously",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      bgGradient: "from-violet-500/5 via-purple-500/10 to-fuchsia-500/5",
      glowColor: "violet-500/40",
      accent: "from-violet-400 to-fuchsia-400",
      features: [
        { text: "NLP Processing", icon: Cpu },
        { text: "Task Automation", icon: Workflow },
        { text: "Smart Workflows", icon: Brain }
      ],
      stats: "60% Automation Rate",
      badge: "🤖 AI"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Cross-platform native apps for Android & iOS with exceptional user experiences",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      bgGradient: "from-blue-500/5 via-indigo-500/10 to-purple-500/5",
      glowColor: "blue-500/40",
      accent: "from-blue-400 to-purple-400",
      features: [
        { text: "Android Development", icon: "🤖" },
        { text: "iOS Development", icon: "🍎" },
        { text: "Cross-Platform", icon: Code2 }
      ],
      stats: "5+ Apps  & 20+ micro apps built",
      badge: "📱 Mobile"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, scalable web solutions with cutting-edge technologies and stunning design",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-500/5 via-teal-500/10 to-cyan-500/5",
      glowColor: "emerald-500/40",
      accent: "from-emerald-400 to-cyan-400",
      features: [
        { text: "React & Next.js", icon: Rocket },
        { text: "Responsive Design", icon: Palette },
        { text: "Performance Optimized", icon: Shield }
      ],
      stats: "99.9% Uptime",
      badge: "🌐 Web"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]">
            What I Build
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Crafting innovative solutions across multiple domains with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {buildItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-300`}></div>
                
                {/* Neumorphism Card */}
                <div className={`relative bg-[#1A1D24] rounded-3xl p-8 h-full shadow-[inset_1px_1px_4px_rgba(255,255,255,0.02),inset_-1px_-1px_4px_rgba(0,0,0,0.2),4px_4px_12px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.01)] overflow-hidden`}>
                  
                  {/* Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <div className={`px-4 py-1.5 rounded-full bg-[#1A1D24] shadow-[inset_1px_1px_3px_rgba(255,255,255,0.02),inset_-1px_-1px_3px_rgba(0,0,0,0.2),3px_3px_6px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.01)] text-white text-xs font-bold`}>
                      {item.badge}
                    </div>
                  </div>

                  {/* Icon with Neumorphism */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r ${item.gradient} mb-8 shadow-[inset_1px_1px_4px_rgba(255,255,255,0.05),inset_-1px_-1px_4px_rgba(0,0,0,0.15),4px_4px_12px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.02)] relative overflow-hidden`}>
                    <IconComponent size={40} className="text-white relative z-10" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-extrabold mb-4 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed mb-8 text-base">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    {item.features.map((feature, featureIndex) => {
                      const FeatureIcon = typeof feature.icon === 'string' ? null : feature.icon;
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-white/80"
                        >
                          <div className={`w-8 h-8 rounded-xl bg-[#1A1D24] shadow-[inset_1px_1px_3px_rgba(255,255,255,0.02),inset_-1px_-1px_3px_rgba(0,0,0,0.2),3px_3px_6px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.01)] flex items-center justify-center mr-4`}>
                            {typeof feature.icon === 'string' ? (
                              <span className="text-sm">{feature.icon}</span>
                            ) : (
                              FeatureIcon && <FeatureIcon size={16} className="text-white" />
                            )}
                          </div>
                          <span className="font-semibold text-base">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-[#1A1D24] shadow-[inset_1px_1px_3px_rgba(255,255,255,0.02),inset_-1px_-1px_3px_rgba(0,0,0,0.2),3px_3px_6px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.01)] text-white text-sm font-bold`}>
                    {item.stats}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <Zap size={18} className="text-yellow-400" />
            <span className="text-lg">Ready to bring your ideas to life</span>
            <Zap size={18} className="text-yellow-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIBuild; 