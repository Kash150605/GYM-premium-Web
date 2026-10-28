"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Apple, Dumbbell, Target, ArrowRight } from "lucide-react";
import { ABOUT_FEATURES, getWhatsAppUrl } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Apple,
  Dumbbell,
  Target,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#651818] opacity-[0.03] blur-[120px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Why Choose Prince Fitness
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Experience the perfect blend of premium equipment, expert guidance, and a
            community that pushes you beyond your limits.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="glass-card-hover p-6 md:p-8 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#651818]/20 border border-[#651818]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#651818]/30 group-hover:scale-110 transition-all duration-300">
                  {Icon && <Icon size={24} className="text-[#8B2323]" />}
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-[#BDBDBD] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={getWhatsAppUrl("trial")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="about-cta"
          >
            Book a Free Trial
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
