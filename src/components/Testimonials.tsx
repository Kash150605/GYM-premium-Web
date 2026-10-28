"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prev = () => goTo((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo((activeIndex + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Don&apos;t just take our word for it — hear from our community of
            500+ satisfied members.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-12 relative">
            {/* Quote icon */}
            <Quote
              size={48}
              className="text-[#651818]/20 absolute top-6 left-6"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[#D4A853] fill-[#D4A853]"
                />
              ))}
            </div>

            {/* Quote text */}
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-[#BDBDBD] text-center leading-relaxed mb-8 italic"
            >
              &ldquo;{TESTIMONIALS[activeIndex].text}&rdquo;
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#651818] to-[#8B2323] flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                  {TESTIMONIALS[activeIndex].name.charAt(0)}
                </span>
              </div>
              <p className="text-white font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                {TESTIMONIALS[activeIndex].name}
              </p>
              <p className="text-sm text-[#888]">
                {TESTIMONIALS[activeIndex].role}
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-[#651818]"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
