import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BMICalculator from "@/components/BMICalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <About />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Programs />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Membership />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Trainers />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Transformations />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Gallery />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Testimonials />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <BMICalculator />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <FAQ />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Contact />
      </main>

      <Footer />

      {/* Conversion Elements */}
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
