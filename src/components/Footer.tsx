"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  MessageCircle,
} from "lucide-react";
import { BUSINESS, NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";

// Inline SVG icons for social media (lucide-react removed brand icons)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
  </svg>
);

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const quickLinks = NAV_LINKS.slice(0, 4);
  const serviceLinks = NAV_LINKS.slice(4);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/5 bg-[#070707]">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start"
          >
            <div className="flex items-center gap-1 mb-4">
              <span
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Prince
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-gradient-primary ml-1 font-bold">
                Fitness
              </span>
            </div>
            <p className="text-sm text-[#888] leading-relaxed mb-6 max-w-xs">
              Mumbai's premier luxury fitness destination. Transforming lives through science-backed training, elite equipment, and custom nutrition protocols.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: BUSINESS.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: BUSINESS.social.facebook, label: "Facebook" },
                { icon: YoutubeIcon, href: BUSINESS.social.youtube, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#888] hover:text-white hover:bg-[#651818]/20 hover:border-[#651818]/30 transition-all duration-300"
                  aria-label={`Follow Prince Fitness on ${social.label}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Explore
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#888] hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#888] hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-[#888]">
              <li className="flex items-start gap-2 leading-relaxed">
                <MapPin size={16} className="text-[#651818] shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#651818] shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#651818] shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Gym Hours Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Gym Hours
            </h4>
            <div className="text-sm text-[#888] space-y-2 mb-6">
              <div>
                <span className="text-white block font-medium">Mon – Sat:</span>
                {BUSINESS.timings.weekdays}
              </div>
              <div>
                <span className="text-white block font-medium">Sunday:</span>
                {BUSINESS.timings.weekends}
              </div>
            </div>
            <div>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 text-sm font-semibold shadow-[0_4px_20px_rgba(34,197,94,0.1)]"
              >
                <MessageCircle size={16} />
                Free Trial Pass
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555]">
          <div>
            &copy; {new Date().getFullYear()} Prince Fitness. All Rights Reserved.
          </div>
          <div className="flex items-center">
            Designed with <Heart size={12} className="text-[#651818] fill-[#651818] mx-1 animate-pulse" /> in Ghatkopar, Mumbai
          </div>
        </div>
      </div>
    </footer>
  );
}