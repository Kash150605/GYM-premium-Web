"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Our Facility
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Explore Prince Fitness
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Take a virtual tour of our world-class facilities designed to
            inspire your best workouts.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(i)}
            >
              <div className={`relative ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"} sm:${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-72"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <ZoomIn size={24} className="text-white" />
                    <span className="text-sm text-white font-medium">{img.label}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0A0A0A]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Image label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium text-lg">{GALLERY_IMAGES[selectedImage].label}</p>
              <p className="text-[#BDBDBD] text-sm mt-1">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </p>
            </div>

            {/* Nav arrows */}
            {selectedImage > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                aria-label="Previous image"
              >
                <span className="text-white text-xl">‹</span>
              </button>
            )}
            {selectedImage < GALLERY_IMAGES.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                aria-label="Next image"
              >
                <span className="text-white text-xl">›</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
