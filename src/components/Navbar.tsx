"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-1 group"
            >
              <span
                className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Prince
              </span>
              <span
                className="text-xs tracking-[0.2em] uppercase text-gradient-primary ml-1 hidden sm:block font-bold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Fitness
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-[#BDBDBD] hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#651818] to-[#8B2323] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-2.5 !px-5 !text-sm !rounded-lg"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#BDBDBD] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[#0A0A0A]/98 backdrop-blur-xl lg:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 -mt-16">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-xl font-medium py-3 px-8 rounded-xl transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-white/5"
                      : "text-[#BDBDBD] hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="btn-whatsapp mt-4 !text-base"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
