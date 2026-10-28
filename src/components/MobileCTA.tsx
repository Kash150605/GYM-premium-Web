"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approximately)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[80] lg:hidden"
        >
          {/* Glass background */}
          <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/5 px-4 py-3 safe-area-inset-bottom">
            <div className="flex gap-3 max-w-lg mx-auto">
              {/* Call Button */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                id="mobile-cta-call"
              >
                <Phone size={16} />
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.5] flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-colors shadow-lg shadow-[#25D366]/20"
                id="mobile-cta-whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
