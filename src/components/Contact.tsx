'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, Twitter,
  Briefcase, DollarSign, MessageSquare, Network, UserCheck
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
  github: Github, // Re-using Github icon here
  usercheck: UserCheck,
  Briefcase: Briefcase,
  DollarSign: DollarSign,
  MessageSquare: MessageSquare,
  Github: Github, // Using the alias to avoid name collision
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, text: string, href?: string}> = ({ icon, text, href }) => {
  const content = (
    <span className="flex items-center group text-lg">
              <span className="mr-3 transition-colors" style={{color:'#cbb7fb'}}>
                {icon}
              </span>
              <span className="text-white/70 group-hover:underline">{text}</span>
    </span>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ success: true, message: result.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setSubmissionStatus({ success: false, message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmissionStatus({ success: false, message: 'An unexpected error occurred. Please try again.' });
    }
    setIsLoading(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Variants for the 'openTo' list items
  const openToItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.4, ease: "easeOut" },
    }),
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [headerRef, headerInView] = useScrollDownInView<HTMLElement>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bodyRef, bodyInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0D0F14] text-neutral-100 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 relative">
        {/* Decorative background element - subtle */}
        <div className="absolute -top-1/4 -left-1/4 w-full h-full opacity-[0.03] pointer-events-none md:opacity-[0.05]">
          <Network size="100%" className="text-[#535C91]" />
        </div>

        <motion.h2 
          ref={headerRef as React.RefObject<HTMLHeadingElement>}
          initial={{ opacity: 0, y: -40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-bold mb-6 text-center text-white relative z-10"
          style={{lineHeight:0.96, letterSpacing:'-0.02em'}}
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white/45 text-lg text-center mb-16 md:mb-20 relative z-10"
        >
          Have a project in mind? Drop a message — I respond within 24 hours.
        </motion.p>

        <motion.div 
          ref={bodyRef}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate={bodyInView ? 'visible' : 'hidden'}
        >
          {/* Left Column: Contact Info & Socials (takes 2/5ths width on md+) */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3" style={{lineHeight:1.14}}>Let&apos;s Connect</h3>
              <p className="text-white/50 leading-relaxed mb-8">
                Open to new projects, consulting, and freelance work.
                On a tight timeline? I can usually start within a week.
              </p>
              <div className="space-y-5 mb-10">
                {profileData.email && 
                  <ContactInfoItem icon={<Mail size={22} />} text={profileData.email} href={`mailto:${profileData.email}`} />
                }
                {profileData.phone && 
                  <ContactInfoItem icon={<Phone size={22} />} text={profileData.phone} href={`tel:${profileData.phone.replace(/\s/g, '')}`} />
                }
                {profileData.location && 
                  <ContactInfoItem icon={<MapPin size={22} />} text={profileData.location} />
                }
              </div>
            </div>

            {profileData.openTo && profileData.openTo.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-white mb-5">I&apos;m Currently Open To:</h4>
                <div className="space-y-3">
                  {profileData.openTo.map((item, index) => {
                    const Icon = (item.icon && openToIconMap[item.icon.toLowerCase()] ? openToIconMap[item.icon.toLowerCase()] : UserCheck) as React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center p-3 rounded-[8px] shadow-sm transition-colors duration-200"
                        style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}
                        custom={index} // Pass index as custom prop for the variant
                        variants={openToItemVariants} // Use the defined variants
                        initial="hidden"
                        animate="visible" // Trigger 'visible' variant
                      >
                        <Icon size={20} className="mr-3 flex-shrink-0" style={{color:'#cbb7fb'}} />
                        <span className="text-neutral-200 text-sm">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-2xl font-bold text-white mt-10 mb-5">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialMediaLinks.map((link) => {
                  const IconComponent = socialIconMap[link.name.toLowerCase()];
                  return (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="p-2.5 rounded-[8px] text-white/50 hover:text-white transition-all duration-200 shadow-md"
                      style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)'}}
                    >
                      {IconComponent ? <IconComponent size={24} /> : <span>{link.name}</span>} {/* Slightly smaller icons if preferred */}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (takes 3/5ths width on md+) */}
          <motion.div variants={itemVariants} className="md:col-span-3 p-8 md:p-10 rounded-2xl" style={{background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[8px] outline-none transition-all duration-200 placeholder-white/20 text-white/90"
                  style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/50 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[8px] outline-none transition-all duration-200 placeholder-white/20 text-white/90"
                  style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/50 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[8px] outline-none transition-all duration-200 placeholder-white/20 text-white/90"
                  style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}
                  placeholder="What can I help you with?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/50 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[8px] outline-none transition-all duration-200 placeholder-white/20 text-white/90 resize-none"
                  style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}
                  placeholder="Your message..."
                ></textarea>
            </div>
              <div>
                <button 
                  type="submit" 
                  data-button
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-6 py-3 font-bold rounded-[8px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                  style={{background:'#e9e5dd', color:'#1b1938'}}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                Send Message
                      <Send size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
              </button>
            </div>
              {submissionStatus.message && (
                <p className={`mt-4 text-sm text-center ${submissionStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {submissionStatus.message}
                </p>
              )}
          </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 