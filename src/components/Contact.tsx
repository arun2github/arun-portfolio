'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook, Twitter,
  Briefcase, DollarSign, MessageSquare, UserCheck, ArrowRight
} from 'lucide-react'; 
import { socialMediaLinks, profileData } from '@/data/portfolioData';

const socialIconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  facebook: Facebook, 
  twitter: Twitter,
};

const openToIconMap: { [key: string]: React.ElementType } = {
  briefcase: Briefcase,
  dollarsign: DollarSign,
  messagesquare: MessageSquare,
  github: Github,
  usercheck: UserCheck,
  Briefcase: Briefcase,
  DollarSign: DollarSign,
  MessageSquare: MessageSquare,
  Github: Github,
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmissionStatus {
  success: boolean | null;
  message: string | null;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>({ success: null, message: null });
  const [isLoading, setIsLoading] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: '-50px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus({ success: null, message: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ success: true, message: result.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus({ success: false, message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmissionStatus({ success: false, message: 'An unexpected error occurred. Please try again.' });
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#08080c' }}>
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(203,183,251,0.03)', filter: 'blur(80px)' }} />
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(129,140,248,0.02)', filter: 'blur(60px)' }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-7xl">

        {/* ── Section Header ───────────────────────── */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(203,183,251,0.3)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>Contact</span>
          </motion.div>

          <motion.h2
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-[-0.03em]"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">Let's build</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-gradient-brand">together.</span>
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg max-w-lg mt-6"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Have a project in mind? Drop a message — I respond within 24 hours.
          </motion.p>
        </div>

        {/* ── Content Grid ─────────────────────────── */}
        <motion.div 
          ref={bodyRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 24 }}
          animate={bodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Left Column — Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Open to new projects, consulting, and freelance work.
                On a tight timeline? I can usually start within a week.
              </p>
              <div className="space-y-3">
                {profileData.email && (
                  <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
                      <Mail size={15} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-sm transition-colors duration-300 group-hover:text-[#cbb7fb]" style={{ color: 'rgba(255,255,255,0.45)' }}>{profileData.email}</span>
                  </a>
                )}
                {profileData.phone && (
                  <a href={`tel:${profileData.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
                      <Phone size={15} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-sm transition-colors duration-300 group-hover:text-[#cbb7fb]" style={{ color: 'rgba(255,255,255,0.45)' }}>{profileData.phone}</span>
                  </a>
                )}
                {profileData.location && (
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
                      <MapPin size={15} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{profileData.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Open To */}
            {profileData.openTo && profileData.openTo.length > 0 && (
              <div>
                <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(203,183,251,0.5)' }}>Currently Open To</h4>
                <div className="space-y-2">
                  {profileData.openTo.map((item, index) => {
                    const Icon = (item.icon && openToIconMap[item.icon.toLowerCase()] ? openToIconMap[item.icon.toLowerCase()] : UserCheck) as React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                      >
                        <Icon size={13} className="flex-shrink-0" style={{ color: '#cbb7fb' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Socials */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(203,183,251,0.5)' }}>Follow Me</h4>
              <div className="flex flex-wrap gap-2">
                {socialMediaLinks.map((link) => {
                  const IconComponent = socialIconMap[link.name.toLowerCase()];
                  return (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}
                    >
                      {IconComponent ? <IconComponent size={15} /> : <span className="text-[10px]">{link.name}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <div className="p-6 md:p-8 rounded-[1.5rem]" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold mb-1.5 tracking-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm"
                      style={{ background: 'rgba(203,183,251,0.03)', border: '1px solid rgba(203,183,251,0.06)', color: 'rgba(255,255,255,0.8)' }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold mb-1.5 tracking-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm"
                      style={{ background: 'rgba(203,183,251,0.03)', border: '1px solid rgba(203,183,251,0.06)', color: 'rgba(255,255,255,0.8)' }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold mb-1.5 tracking-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 text-sm"
                    style={{ background: 'rgba(203,183,251,0.03)', border: '1px solid rgba(203,183,251,0.06)', color: 'rgba(255,255,255,0.8)' }}
                    placeholder="What can I help you with?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold mb-1.5 tracking-tight" style={{ color: 'rgba(255,255,255,0.35)' }}>Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 resize-none text-sm"
                    style={{ background: 'rgba(203,183,251,0.03)', border: '1px solid rgba(203,183,251,0.06)', color: 'rgba(255,255,255,0.8)' }}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-full text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-[0_0_30px_rgba(203,183,251,0.2)]"
                  style={{ background: '#cbb7fb', color: '#08080c' }}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
                {submissionStatus.message && (
                  <p className={`text-xs text-center ${submissionStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                    {submissionStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;