"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, MessageCircle } from "lucide-react";
import { MEMBERSHIPS, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function Membership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#651818] opacity-[0.05] blur-[200px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Membership Plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Flexible membership plans designed to fit your fitness goals and budget.
            Start your transformation today.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {MEMBERSHIPS.map((plan, i) => {
            const whatsappKey = plan.name.toLowerCase() as keyof typeof WHATSAPP_MESSAGES;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "md:-mt-4 md:mb-0"
                    : ""
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#651818] via-[#D4A853] to-[#651818]" />
                )}

                <div
                  className={`p-6 md:p-8 h-full flex flex-col ${
                    plan.popular
                      ? "glass-card border-[#651818]/30 glow-primary"
                      : "glass-card"
                  }`}
                >
                  {/* Popular tag */}
                  {plan.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={14} className="text-[#D4A853] fill-[#D4A853]" />
                      <span className="text-xs font-medium tracking-wider uppercase text-[#D4A853]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <h3
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-sm text-[#BDBDBD]">₹</span>
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-gradient-primary" : "text-white"
                      }`}
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#BDBDBD]">{plan.period}</span>
                  </div>

                  <p className="text-sm text-[#888] mb-6">{plan.description}</p>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-6" />

                  {/* Features */}
                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            plan.popular ? "text-[#D4A853]" : "text-[#8B2323]"
                          }`}
                        />
                        <span className="text-sm text-[#BDBDBD]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={getWhatsAppUrl(whatsappKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#651818] to-[#8B2323] text-white hover:shadow-lg hover:shadow-[#651818]/30 hover:-translate-y-0.5"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
                    }`}
                    id={`membership-cta-${plan.name.toLowerCase()}`}
                  >
                    <MessageCircle size={16} />
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-[#888] mt-8"
        >
          No joining fee • No hidden charges • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
