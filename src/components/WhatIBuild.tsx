'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Zap, Layers, Code2, Cpu, Workflow, Palette, Rocket, Shield } from 'lucide-react';

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
      stats: "10+ Apps Built",
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
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-gradient-to-br ${item.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 overflow-hidden`}>
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-bold shadow-lg`}>
                      {item.badge}
                    </div>
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 shadow-2xl relative overflow-hidden`}
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Icon Background Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                    <IconComponent size={32} className="text-white relative z-10" />
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral-300 leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => {
                      const FeatureIcon = typeof feature.icon === 'string' ? null : feature.icon;
                      return (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + featureIndex * 0.1 + 0.3 
                          }}
                          className="flex items-center text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300"
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${item.accent} flex items-center justify-center mr-3 shadow-lg`}>
                            {typeof feature.icon === 'string' ? (
                              <span className="text-xs">{feature.icon}</span>
                            ) : (
                              FeatureIcon && <FeatureIcon size={12} className="text-white" />
                            )}
                          </div>
                          <span className="font-medium">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stats Badge */}
                  <div className={`mt-6 inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-semibold shadow-lg`}>
                    {item.stats}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Layers size={24} className="text-white" />
                  </div>
                  
                  {/* Bottom Glow */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
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