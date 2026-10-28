"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#651818] opacity-[0.07] blur-[120px]" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Prince Fitness Text Logo */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="text-white">Prince</span>
            </motion.h1>
            <motion.p
              className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-gradient-primary font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fitness
            </motion.p>

            {/* Progress bar */}
            <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #651818, #8B2323, #D4A853)",
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="mt-4 text-xs text-[#888] tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
