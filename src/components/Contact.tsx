'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Facebook, Twitter, // Added Facebook, Twitter
  Briefcase, DollarSign, MessageSquare, Network, UserCheck // Added icons for 'openTo' and decorative
} from 'lucide-react'; 
import { socialMediaLinks, profileData } from '@/data/portfolioData';

const socialIconMap: { [key: string]: React.ElementType } = {
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
      <span className="mr-3 text-[#7E8CE0] group-hover:text-[#A0AEC0] transition-colors">
        {icon}
      </span>
      <span className="text-neutral-200 group-hover:underline">{text}</span>
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

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-neutral-100 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 relative">
        {/* Decorative background element - subtle */}
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-full h-full opacity-[0.03] pointer-events-none md:opacity-[0.05]"
          initial={{ opacity: 0, scale: 0.8, rotate: -30}}
          whileInView={{ opacity: [0.03, 0.05, 0.03], scale: 1, rotate: 0}}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "circOut"}}
        >
          <Network size="100%" className="text-[#535C91]" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0] relative z-10"
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start relative z-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Contact Info & Socials (takes 2/5ths width on md+) */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-[#A0AEC0] mb-4">Let's Connect</h3>
              <p className="text-neutral-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
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
                <h4 className="text-2xl font-medium text-[#A0AEC0] mb-5">I'm Currently Open To:</h4>
                <div className="space-y-3">
                  {profileData.openTo.map((item, index) => {
                    const Icon = item.icon && openToIconMap[item.icon.toLowerCase()] ? openToIconMap[item.icon.toLowerCase()] : UserCheck;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center bg-[#2D3748]/30 p-3 rounded-md shadow-sm hover:bg-[#2D3748]/60 transition-colors duration-200"
                        custom={index} // Pass index as custom prop for the variant
                        variants={openToItemVariants} // Use the defined variants
                        initial="hidden"
                        animate="visible" // Trigger 'visible' variant
                      >
                        <Icon size={20} className="mr-3 text-[#7E8CE0] flex-shrink-0" />
                        <span className="text-neutral-200 text-sm">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-2xl font-medium text-[#A0AEC0] mt-10 mb-5">Follow Me</h4>
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
                      className="p-2.5 bg-[#2D3748]/50 hover:bg-[#535C91] rounded-full text-neutral-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                    >
                      {IconComponent ? <IconComponent size={24} /> : <span>{link.name}</span>} {/* Slightly smaller icons if preferred */}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (takes 3/5ths width on md+) */}
          <motion.div variants={itemVariants} className="md:col-span-3 bg-[#2D3748]/50 p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-[#535C91]/40 transition-shadow duration-300">
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
                  className="w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100"
                  placeholder="What can I help you with?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100 resize-none"
                  placeholder="Your message..."
                ></textarea>
            </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#535C91] to-[#7E8CE0] hover:from-[#7E8CE0] hover:to-[#535C91] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group"
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