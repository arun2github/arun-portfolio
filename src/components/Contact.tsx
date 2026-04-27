'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, Twitter,
  Briefcase, DollarSign, MessageSquare, UserCheck, ArrowRight
} from 'lucide-react'; 
import { socialMediaLinks, profileData } from '@/data/portfolioData';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bodyRef, bodyInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0D0F14] overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(203,183,251,0.03)', filter: 'blur(80px)' }} />
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(129,140,248,0.02)', filter: 'blur(60px)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
            <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#cbb7fb' }}>Contact</span>
            <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ lineHeight: 0.96, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Build Something{' '}
            <span className="text-gradient-brand">Together</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Have a project in mind? Drop a message — I respond within 24 hours.
          </motion.p>
        </div>

        <motion.div 
          ref={bodyRef}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start"
          initial={{ opacity: 0, y: 24 }}
          animate={bodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Contact info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ letterSpacing: '-0.01em' }}>Let's Connect</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Open to new projects, consulting, and freelance work.
                On a tight timeline? I can usually start within a week.
              </p>
              <div className="space-y-4">
                {profileData.email && (
                  <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.12)' }}>
                      <Mail size={16} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-white/60 text-sm group-hover:text-[#cbb7fb] transition-colors duration-300">{profileData.email}</span>
                  </a>
                )}
                {profileData.phone && (
                  <a href={`tel:${profileData.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.12)' }}>
                      <Phone size={16} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-white/60 text-sm group-hover:text-[#cbb7fb] transition-colors duration-300">{profileData.phone}</span>
                  </a>
                )}
                {profileData.location && (
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.12)' }}>
                      <MapPin size={16} style={{ color: '#cbb7fb' }} />
                    </span>
                    <span className="text-white/60 text-sm">{profileData.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Open To */}
            {profileData.openTo && profileData.openTo.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-white mb-3 tracking-tight">Currently Open To</h4>
                <div className="space-y-2">
                  {profileData.openTo.map((item, index) => {
                    const Icon = (item.icon && openToIconMap[item.icon.toLowerCase()] ? openToIconMap[item.icon.toLowerCase()] : UserCheck) as React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300"
                        style={{ background: 'rgba(203,183,251,0.03)', border: '1px solid rgba(203,183,251,0.06)' }}
                      >
                        <Icon size={14} className="flex-shrink-0" style={{ color: '#cbb7fb' }} />
                        <span className="text-white/50 text-xs">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Socials */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 tracking-tight">Follow Me</h4>
              <div className="flex flex-wrap gap-2.5">
                {socialMediaLinks.map((link) => {
                  const IconComponent = socialIconMap[link.name.toLowerCase()];
                  return (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-[#cbb7fb] transition-all duration-300 hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]"
                      style={{ background: 'rgba(203,183,251,0.04)', border: '1px solid rgba(203,183,251,0.08)' }}
                    >
                      {IconComponent ? <IconComponent size={16} /> : <span className="text-xs">{link.name}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-3 glass-card rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-white/50 mb-1.5 tracking-tight">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 placeholder-white/20 text-white/90 text-sm"
                    style={{ background: 'rgba(203,183,251,0.04)', border: '1px solid rgba(203,183,251,0.08)' }}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-white/50 mb-1.5 tracking-tight">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 placeholder-white/20 text-white/90 text-sm"
                    style={{ background: 'rgba(203,183,251,0.04)', border: '1px solid rgba(203,183,251,0.08)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-white/50 mb-1.5 tracking-tight">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 placeholder-white/20 text-white/90 text-sm"
                  style={{ background: 'rgba(203,183,251,0.04)', border: '1px solid rgba(203,183,251,0.08)' }}
                  placeholder="What can I help you with?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-white/50 mb-1.5 tracking-tight">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-200 placeholder-white/20 text-white/90 resize-none text-sm"
                  style={{ background: 'rgba(203,183,251,0.04)', border: '1px solid rgba(203,183,251,0.08)' }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="magnetic-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-[0_0_30px_rgba(203,183,251,0.2)]"
                style={{ background: '#e9e5dd', color: '#1b1938' }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;