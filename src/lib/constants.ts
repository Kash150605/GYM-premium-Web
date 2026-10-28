// ============================================================
// Prince Fitness — Constants & Content
// All business data, content copy, and configuration in one place
// ============================================================

export const BUSINESS = {
  name: "Prince Fitness",
  tagline: "Transform Your Body. Elevate Your Lifestyle.",
  location: "Ghatkopar, Mumbai, Maharashtra, India",
  address: "Shop No. 1, Ground Floor, Near Ghatkopar Station, LBS Marg, Ghatkopar West, Mumbai 400086",
  phone: "+91 9867234716",
  phoneFormatted: "+91 98672 34716",
  email: "info@princefitness.com",
  whatsappNumber: "919867234716",
  whatsappUrl: "https://wa.me/919867234716",
  whatsappMessage: "Hello Prince Fitness, I would like to know more about membership plans.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7963!2d72.9080!3d19.0860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGhatkopar%20West!5e0!3m2!1sen!2sin!4v1",
  timings: {
    weekdays: "5:00 AM – 11:00 PM",
    weekends: "6:00 AM – 10:00 PM",
  },
  social: {
    instagram: "https://instagram.com/princefitness",
    facebook: "https://facebook.com/princefitness",
    youtube: "https://youtube.com/@princefitness",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 20, suffix: "+", label: "Premium Machines" },
  { value: 10, suffix: "+", label: "Expert Trainers" },
  { value: 5, suffix: "★", label: "Google Rating" },
] as const;

export const ABOUT_FEATURES = [
  {
    icon: "Award",
    title: "Certified Trainers",
    description:
      "Our NASM & ACE-certified trainers design personalized programs backed by sports science to help you reach your goals faster.",
  },
  {
    icon: "Apple",
    title: "Nutrition Support",
    description:
      "Get customized diet plans and nutritional guidance from our in-house dieticians to complement your workout regime.",
  },
  {
    icon: "Dumbbell",
    title: "Premium Equipment",
    description:
      "Train with world-class Hammer Strength, Life Fitness, and Technogym equipment — maintained to perfection daily.",
  },
  {
    icon: "Target",
    title: "Personalized Programs",
    description:
      "Every member gets a tailored fitness program designed around their body type, goals, and schedule for maximum results.",
  },
] as const;

export const PROGRAMS = [
  {
    title: "Weight Loss",
    description:
      "Intensive fat-burning programs combining HIIT, cardio, and strength training with nutrition coaching for sustainable weight loss.",
    icon: "Flame",
    color: "#FF6B35",
  },
  {
    title: "Muscle Building",
    description:
      "Progressive overload training with periodized programs designed by certified strength coaches to maximize hypertrophy.",
    icon: "Dumbbell",
    color: "#651818",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one sessions with certified trainers who focus 100% on your form, progress, and goals every single rep.",
    icon: "User",
    color: "#D4A853",
  },
  {
    title: "Functional Training",
    description:
      "Improve everyday movement, balance, and flexibility with our functional fitness programs using TRX, kettlebells, and more.",
    icon: "Activity",
    color: "#4CAF50",
  },
  {
    title: "Cardio Fitness",
    description:
      "State-of-the-art cardio equipment with guided programs to improve your heart health and endurance levels.",
    icon: "Heart",
    color: "#E91E63",
  },
  {
    title: "Group Classes",
    description:
      "High-energy Zumba, yoga, CrossFit, and bootcamp sessions that make fitness fun, social, and incredibly effective.",
    icon: "Users",
    color: "#2196F3",
  },
] as const;

export const MEMBERSHIPS = [
  {
    name: "Starter",
    price: "1,999",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Gym Access (6 AM - 10 PM)",
      "Basic Equipment Usage",
      "Locker Facility",
      "1 Fitness Assessment",
      "Access to Cardio Zone",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Popular",
    price: "3,499",
    period: "/month",
    description: "Most popular plan with personal training included",
    features: [
      "Full Gym Access (5 AM - 11 PM)",
      "All Equipment & Zones",
      "2 Personal Training Sessions/Week",
      "Customized Workout Plan",
      "Nutrition Consultation",
      "Group Classes Access",
      "Towel & Locker Service",
    ],
    popular: true,
    cta: "Join Now",
  },
  {
    name: "Elite",
    price: "5,999",
    period: "/month",
    description: "The ultimate premium fitness experience",
    features: [
      "24/7 Unlimited Gym Access",
      "Unlimited Personal Training",
      "Custom Diet Plan (Monthly)",
      "Body Composition Analysis",
      "Priority Equipment Access",
      "Steam & Sauna",
      "Supplement Guidance",
      "Monthly Progress Review",
      "Guest Pass (2/month)",
    ],
    popular: false,
    cta: "Go Elite",
  },
] as const;

export const TRAINERS = [
  {
    name: "Rajesh Patil",
    role: "Head Trainer — Strength & Conditioning",
    specialization: "Muscle Building & Powerlifting",
    experience: "8+ Years",
    certifications: "NASM, ACE Certified",
    image: "/images/trainer-1.png",
  },
  {
    name: "Priya Sharma",
    role: "Senior Trainer — Weight Loss & HIIT",
    specialization: "Fat Loss & Functional Training",
    experience: "6+ Years",
    certifications: "ISSA, CrossFit L2",
    image: "/images/trainer-2.png",
  },
  {
    name: "Vikram Singh",
    role: "Trainer — Sports Performance",
    specialization: "Athletic Training & Rehab",
    experience: "5+ Years",
    certifications: "NSCA, CSCS",
    image: "/images/trainer-3.png",
  },
  {
    name: "Ananya Desai",
    role: "Trainer — Yoga & Flexibility",
    specialization: "Yoga, Pilates & Mobility",
    experience: "7+ Years",
    certifications: "RYT-500, ACE Group Fitness",
    image: "/images/trainer-4.png",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amit Mehta",
    role: "IT Professional",
    text: "Prince Fitness completely changed my life. I lost 18 kgs in just 5 months with their personalized training and diet plans. The trainers here truly care about your progress.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Marketing Manager",
    text: "As a working professional, I needed flexible timings and expert guidance. Prince Fitness delivers both perfectly. The premium equipment and clean environment make every workout enjoyable.",
    rating: 5,
  },
  {
    name: "Rahul Joshi",
    role: "College Student",
    text: "Best gym in Ghatkopar, hands down! The trainers are knowledgeable, equipment is top-notch, and the atmosphere is incredibly motivating. Gained 8 kgs of lean muscle in 4 months.",
    rating: 5,
  },
  {
    name: "Pooja Nair",
    role: "Homemaker",
    text: "I was intimidated to join a gym at 42, but Prince Fitness made me feel welcome from day one. The group classes are amazing and I've never felt healthier. Highly recommend!",
    rating: 5,
  },
  {
    name: "Arjun Deshmukh",
    role: "Entrepreneur",
    text: "The Elite membership is worth every rupee. Personal training, nutrition plans, and the steam room — it's a complete wellness experience. Prince Fitness is premium fitness at its finest.",
    rating: 5,
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery-1.png", alt: "Prince Fitness Strength Training Zone", label: "Strength Zone" },
  { src: "/images/gallery-2.png", alt: "Prince Fitness Cardio Zone", label: "Cardio Zone" },
  { src: "/images/gallery-3.png", alt: "Prince Fitness Functional Training Area", label: "Functional Area" },
  { src: "/images/gallery-4.png", alt: "Prince Fitness Personal Training Studio", label: "Personal Training" },
  { src: "/images/gallery-5.png", alt: "Prince Fitness Group Class Studio", label: "Group Classes" },
  { src: "/images/hero.png", alt: "Prince Fitness Premium Gym Interior", label: "Main Floor" },
] as const;

export const FAQS = [
  {
    question: "What are the gym timings?",
    answer:
      "Prince Fitness is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sundays from 6:00 AM to 10:00 PM. Elite members enjoy 24/7 access.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a complimentary 1-day trial pass so you can experience our facilities, equipment, and training environment before committing to a membership.",
  },
  {
    question: "Is personal training included in the membership?",
    answer:
      "Personal training is included in our Popular plan (2 sessions/week) and Elite plan (unlimited sessions). Starter members can add personal training at an additional cost.",
  },
  {
    question: "Do you provide diet and nutrition plans?",
    answer:
      "Absolutely! Our Popular and Elite plans include nutrition consultation. Our in-house dieticians create customized meal plans based on your goals, preferences, and dietary needs.",
  },
  {
    question: "What equipment brands do you have?",
    answer:
      "We feature premium equipment from Hammer Strength, Life Fitness, Technogym, and Rogue Fitness — all regularly maintained and sanitized for the best training experience.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have dedicated two-wheeler parking for members. Four-wheeler street parking is available nearby. We're also conveniently located near Ghatkopar railway station.",
  },
  {
    question: "Can I freeze my membership?",
    answer:
      "Yes, Popular and Elite members can freeze their membership for up to 15 days per quarter due to medical reasons or travel. Just inform our front desk in advance.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We maintain the highest hygiene standards with regular equipment sanitization, proper ventilation, first-aid availability, and CCTV monitoring throughout the facility.",
  },
] as const;

export const WHATSAPP_MESSAGES = {
  general: "Hello Prince Fitness, I would like to know more about membership plans.",
  starter: "Hi Prince Fitness, I'm interested in the Starter membership plan at ₹1,999/month. Please share more details.",
  popular: "Hi Prince Fitness, I'm interested in the Popular membership plan at ₹3,499/month. Please share more details.",
  elite: "Hi Prince Fitness, I'm interested in the Elite membership plan at ₹5,999/month. Please share more details.",
  trial: "Hi Prince Fitness, I'd like to book a free trial session. When can I visit?",
  bmi: "Hi Prince Fitness, I just calculated my BMI on your website and would like to discuss a fitness plan.",
  training: "Hi Prince Fitness, I'm interested in personal training sessions. Please share more details.",
} as const;

export const getWhatsAppUrl = (messageKey: keyof typeof WHATSAPP_MESSAGES = "general") => {
  const message = encodeURIComponent(WHATSAPP_MESSAGES[messageKey]);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${message}`;
};

export const SEO = {
  title: "Prince Fitness — Best Premium Gym in Ghatkopar, Mumbai | Transform Your Body",
  description:
    "Prince Fitness is the #1 premium gym in Ghatkopar, Mumbai. Certified trainers, world-class equipment, personal training, weight loss & muscle building programs. Join 500+ members today!",
  keywords: [
    "gym in ghatkopar",
    "best gym in ghatkopar",
    "fitness center ghatkopar",
    "personal trainer ghatkopar",
    "weight loss gym ghatkopar",
    "muscle building gym ghatkopar",
    "premium gym mumbai",
    "ghatkopar gym membership",
    "gym near ghatkopar station",
    "best fitness center mumbai",
  ],
  ogImage: "/images/hero.png",
} as const;
