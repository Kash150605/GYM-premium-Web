"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, BUSINESS } from "@/lib/constants";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownTooltip, setHasShownTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 2500);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    // Show tooltip after button appears (only once)
    if (isVisible && !hasShownTooltip) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        setHasShownTooltip(true);
      }, 3000);

      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible, hasShownTooltip]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="relative glass-card px-4 py-3 mr-1 max-w-[220px]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close tooltip"
                >
                  <X size={10} />
                </button>
                <p className="text-xs text-[#BDBDBD] leading-relaxed">
                  👋 Hi! Need help choosing a membership plan? Chat with us!
                </p>
                {/* Arrow */}
                <div className="absolute bottom-3 -right-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white/10" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 animate-pulse-glow"
            aria-label={`Chat with ${BUSINESS.name} on WhatsApp`}
            id="floating-whatsapp-btn"
          >
            <MessageCircle
              size={26}
              className="text-white fill-white"
            />
            
            {/* Ping animation */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-white" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
