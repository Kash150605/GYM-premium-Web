"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator, MessageCircle, ArrowRight, AlertCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  advice: string;
}

export function calculateBMI(
  heightCm: number,
  weightKg: number
): number | null {
  if (
    !Number.isFinite(heightCm) ||
    !Number.isFinite(weightKg) ||
    heightCm <= 0 ||
    weightKg <= 0
  ) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  if (!Number.isFinite(bmi)) {
    return null;
  }

  return Math.round(bmi * 10) / 10;
}

export function getBMICategory(bmi: number): Omit<BMIResult, "bmi"> {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      color: "#2196F3",
      advice: "Our muscle building program can help you gain healthy weight with proper nutrition.",
    };
  } else if (bmi < 25) {
    return {
      category: "Normal Weight",
      color: "#4CAF50",
      advice: "Great job! Maintain your fitness with our guided training programs.",
    };
  } else if (bmi < 30) {
    return {
      category: "Overweight",
      color: "#FF9800",
      advice: "Our weight loss program combines HIIT and nutrition planning for effective results.",
    };
  } else {
    return {
      category: "Obese",
      color: "#F44336",
      advice: "Our certified trainers specialize in safe, effective weight loss journeys. Let us help you.",
    };
  }
}

export default function BMICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);

  const handleCalculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    const isHInvalid = !Number.isFinite(h) || h <= 0;
    const isWInvalid = !Number.isFinite(w) || w <= 0;

    setHeightError(isHInvalid);
    setWeightError(isWInvalid);

    const bmi = calculateBMI(h, w);

    if (bmi === null) {
      if (isHInvalid && isWInvalid) {
        setErrorMessage("Invalid input: Please enter valid positive values for height (cm) and weight (kg).");
      } else if (isHInvalid) {
        setErrorMessage("Invalid input: Height must be a positive number in centimetres.");
      } else if (isWInvalid) {
        setErrorMessage("Invalid input: Weight must be a positive number in kilograms.");
      } else {
        setErrorMessage("Invalid input: Please enter valid numbers.");
      }
      setResult(null);
      return;
    }

    setErrorMessage(null);
    setHeightError(false);
    setWeightError(false);
    const categoryInfo = getBMICategory(bmi);
    setResult({
      bmi,
      ...categoryInfo,
    });
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setResult(null);
    setErrorMessage(null);
    setHeightError(false);
    setWeightError(false);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#651818] opacity-[0.04] blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] text-[#8B2323] mb-4 font-medium"
          >
            Free Tool
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title text-gradient"
          >
            BMI Calculator
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Calculate your Body Mass Index and get personalized fitness
            recommendations from our experts.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10">
            {!result ? (
              <>
                {/* Calculator icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#651818]/20 border border-[#651818]/30 flex items-center justify-center mx-auto mb-8">
                  <Calculator size={24} className="text-[#8B2323]" />
                </div>

                {/* Inputs */}
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="bmi-height"
                      className="block text-sm font-medium text-[#BDBDBD] mb-2"
                    >
                      Height (cm)
                    </label>
                    <input
                      id="bmi-height"
                      type="number"
                      placeholder="e.g., 175"
                      value={height}
                      onChange={(e) => {
                        setHeight(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                        if (heightError) setHeightError(false);
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm ${
                        heightError
                          ? "border-red-500/70 focus:border-red-500 focus:bg-red-500/[0.05]"
                          : "border-white/10 focus:border-[#651818]/50 focus:bg-white/[0.07]"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bmi-weight"
                      className="block text-sm font-medium text-[#BDBDBD] mb-2"
                    >
                      Weight (kg)
                    </label>
                    <input
                      id="bmi-weight"
                      type="number"
                      placeholder="e.g., 70"
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                        if (weightError) setWeightError(false);
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm ${
                        weightError
                          ? "border-red-500/70 focus:border-red-500 focus:bg-red-500/[0.05]"
                          : "border-white/10 focus:border-[#651818]/50 focus:bg-white/[0.07]"
                      }`}
                    />
                  </div>
                </div>

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2.5 mt-5"
                    role="alert"
                  >
                    <AlertCircle size={18} className="shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <button
                  onClick={handleCalculate}
                  className="btn-primary w-full mt-8 justify-center cursor-pointer"
                  id="bmi-calculate"
                >
                  Calculate BMI
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-[#888] text-center mt-6 leading-relaxed">
                  Note: BMI is a screening measure, not a diagnosis or a complete measure of health.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* BMI Score */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    border: `3px solid ${result.color}`,
                    background: `${result.color}15`,
                  }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: result.color, fontFamily: "var(--font-outfit)" }}
                  >
                    {result.bmi.toFixed(1)}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: result.color, fontFamily: "var(--font-outfit)" }}
                >
                  {result.category}
                </h3>

                <p className="text-sm text-[#BDBDBD] mb-8 leading-relaxed max-w-sm mx-auto">
                  {result.advice}
                </p>

                {/* BMI Scale */}
                <div className="mb-8">
                  <div className="flex h-2 rounded-full overflow-hidden gap-0.5 mb-2">
                    <div className="flex-1 bg-[#2196F3] rounded-l-full" />
                    <div className="flex-1 bg-[#4CAF50]" />
                    <div className="flex-1 bg-[#FF9800]" />
                    <div className="flex-1 bg-[#F44336] rounded-r-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#888]">
                    <span>Under 18.5</span>
                    <span>18.5-24.9</span>
                    <span>25-29.9</span>
                    <span>30+</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl("bmi")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 justify-center"
                    id="bmi-cta-whatsapp"
                  >
                    <MessageCircle size={16} />
                    Get Free Consultation
                  </a>
                  <button
                    onClick={handleReset}
                    className="btn-secondary flex-1 justify-center"
                  >
                    Calculate Again
                  </button>
                </div>

                <p className="text-xs text-[#888] text-center mt-6 leading-relaxed">
                  Note: BMI is a screening measure, not a diagnosis or a complete measure of health.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
