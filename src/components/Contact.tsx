"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export async function submitContactForm(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!data.name.trim() || !data.phone.trim() || !data.message.trim()) {
    throw new Error("Please fill in all required fields.");
  }

  // Build WhatsApp message from form data
  const msg = `Hello Prince Fitness,\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
  const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  // Small async delay to ensure guarded submission prevents duplicate clicks
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (typeof window !== "undefined") {
    const win = window.open(url, "_blank");
    if (!win) {
      window.location.href = url;
    }
  }
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus("");
    setIsError(false);

    try {
      await submitContactForm(formState);
      setStatus("Your request was submitted successfully.");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormState({ name: "", phone: "", email: "", message: "" });
    } catch (err: unknown) {
      setIsError(true);
      setStatus(
        err instanceof Error && err.message
          ? err.message
          : "Unable to submit your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: BUSINESS.address,
      href: "https://maps.google.com/?q=Ghatkopar+West+Mumbai",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: BUSINESS.phoneFormatted,
      href: `tel:${BUSINESS.phone}`,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
    },
    {
      icon: Clock,
      label: "Gym Timings",
      value: `Mon-Sat: ${BUSINESS.timings.weekdays}\nSun: ${BUSINESS.timings.weekends}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Ready to start your fitness journey? Visit us, call us, or chat on
            WhatsApp — we&apos;re here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <div key={info.label} className="glass-card p-5 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#651818]/20 border border-[#651818]/30 flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-[#8B2323]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#888] uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#BDBDBD] hover:text-white transition-colors break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#BDBDBD] whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden rounded-2xl h-[250px] sm:h-[300px]">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prince Fitness Location — Ghatkopar, Mumbai"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center !py-4 !text-base"
              id="contact-cta-whatsapp"
            >
              <MessageCircle size={20} />
              Chat with Us on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <h3
                className="text-xl font-semibold text-white mb-6"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle size={48} className="text-[#25D366] mb-4" />
                  <p className="text-lg font-semibold text-white mb-2">
                    Message Sent!
                  </p>
                  <p className="text-sm text-[#BDBDBD] text-center">
                    Your message has been forwarded via WhatsApp. We&apos;ll
                    respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#BDBDBD] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#651818]/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#BDBDBD] mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#651818]/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#BDBDBD] mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="you@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#651818]/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#BDBDBD] mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="I'm interested in membership plans..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#651818]/50 focus:bg-white/[0.07] transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    id="contact-form-submit"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>

                  {status && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`text-sm text-center font-medium ${
                        isError ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {status}
                    </p>
                  )}

                  <p className="text-xs text-[#888] text-center">
                    Your message will be sent via WhatsApp for instant response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
