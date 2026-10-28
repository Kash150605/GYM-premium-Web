"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flame,
  Dumbbell,
  User,
  Activity,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { PROGRAMS, getWhatsAppUrl } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Dumbbell,
  User,
  Activity,
  Heart,
  Users,
};

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#651818] opacity-[0.05] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Our Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Training Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            From weight loss to muscle building — we have expert-designed programs
            for every fitness goal.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => {
            const Icon = iconMap[program.icon];
            return (
              <motion.a
                key={program.title}
                href={getWhatsAppUrl("training")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="glass-card-hover p-6 md:p-8 group cursor-pointer block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${program.color}20`,
                    border: `1px solid ${program.color}40`,
                  }}
                >
                  {Icon && (
                    <Icon size={22} style={{ color: program.color }} />
                  )}
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {program.title}
                </h3>
                <p className="text-sm text-[#BDBDBD] leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#8B2323] group-hover:text-[#D4A853] transition-colors">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
