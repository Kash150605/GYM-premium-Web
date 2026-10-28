"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Clock, MessageCircle } from "lucide-react";
import { TRAINERS, getWhatsAppUrl } from "@/lib/constants";

export default function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Expert Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Meet Our Trainers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Our certified fitness professionals are dedicated to helping you achieve
            your goals with personalized attention.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-72 sm:h-64 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name} — ${trainer.role} at Prince Fitness`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#651818]/0 group-hover:bg-[#651818]/10 transition-colors duration-500" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {trainer.name}
                </h3>
                <p className="text-xs text-[#8B2323] font-medium mb-3">
                  {trainer.role}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-[#BDBDBD]">
                    <Award size={12} className="text-[#D4A853]" />
                    {trainer.certifications}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#BDBDBD]">
                    <Clock size={12} className="text-[#D4A853]" />
                    {trainer.experience} Experience
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("training")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-[#651818]/20 hover:border-[#651818]/30 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  Book Session
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
