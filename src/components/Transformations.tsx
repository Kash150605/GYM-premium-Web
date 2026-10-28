"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface TransformationData {
  name: string;
  duration: string;
  weightLost: string;
  beforeLabel: string;
  afterLabel: string;
}

const transformations: TransformationData[] = [
  {
    name: "Amit K.",
    duration: "5 Months",
    weightLost: "Lost 18 kg",
    beforeLabel: "Before: 98 kg",
    afterLabel: "After: 80 kg",
  },
  {
    name: "Sneha P.",
    duration: "4 Months",
    weightLost: "Lost 12 kg",
    beforeLabel: "Before: 78 kg",
    afterLabel: "After: 66 kg",
  },
  {
    name: "Rahul D.",
    duration: "6 Months",
    weightLost: "Gained 8 kg Muscle",
    beforeLabel: "Before: 62 kg",
    afterLabel: "After: 70 kg",
  },
];

export default function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const current = transformations[activeIndex];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Transformation Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Real members, real transformations. See what dedication and expert
            guidance can achieve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Before/After Slider */}
          <div
            ref={sliderRef}
            className="relative h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass-card cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* "After" side (full background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0d] to-[#0A0A0A] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-[#25D366]/10 border-2 border-[#25D366]/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-[#25D366]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {current.afterLabel.split(": ")[1]}
                  </span>
                </div>
                <p className="text-lg font-semibold text-white">{current.afterLabel}</p>
                <p className="text-sm text-[#25D366] mt-1">After</p>
              </div>
            </div>

            {/* "Before" side (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#1a0d0d] to-[#0A0A0A] flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-[#651818]/10 border-2 border-[#651818]/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-[#8B2323]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {current.beforeLabel.split(": ")[1]}
                  </span>
                </div>
                <p className="text-lg font-semibold text-white">{current.beforeLabel}</p>
                <p className="text-sm text-[#8B2323] mt-1">Before</p>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/50 z-10"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Slider handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <div className="flex gap-0.5">
                  <ChevronLeft size={14} className="text-white" />
                  <ChevronRight size={14} className="text-white" />
                </div>
              </div>
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                    {current.name}
                  </p>
                  <p className="text-sm text-[#BDBDBD]">
                    {current.weightLost} in {current.duration}
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-2 !px-4 !text-xs !rounded-lg"
                >
                  <MessageCircle size={14} />
                  Start My Transformation
                </a>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setSliderPos(50);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#651818] scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View transformation ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
