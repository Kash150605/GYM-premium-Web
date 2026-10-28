"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className={`glass-card overflow-hidden transition-all duration-300 ${
          isOpen ? "border-[#651818]/30" : ""
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
          aria-expanded={isOpen}
        >
          <span
            className="text-sm sm:text-base font-medium text-white pr-4 group-hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {question}
          </span>
          <ChevronDown
            size={18}
            className={`text-[#BDBDBD] flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#8B2323]" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <div className="h-px bg-white/5 mb-4" />
                <p className="text-sm text-[#BDBDBD] leading-relaxed">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#651818] opacity-[0.03] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            FAQs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Everything you need to know about Prince Fitness. Can&apos;t find what
            you&apos;re looking for? Chat with us on WhatsApp.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
