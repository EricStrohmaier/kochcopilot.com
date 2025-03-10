"use client";

import { Inter } from "next/font/google";
import { colors } from "./config/siteConfig";

// Import components
import HeroSection from "./components/HeroSection";
import ProductFeatures from "./components/ProductFeatures";
import EmailCapture from "./components/EmailCapture";
import FaqSection from "./components/FaqSection";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Function to scroll to notification section
  const scrollToNotify = () => {
    document.getElementById("notify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen bg-[${colors.light}] ${inter.className}`}>
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <HeroSection onClickCta={scrollToNotify} />

        {/* Product Features */}
        <ProductFeatures />

        {/* Email Capture Section */}
        <EmailCapture />

        {/* FAQ Section */}
        <FaqSection />


        {/* Final CTA Section */}
        <FinalCta onClickCta={scrollToNotify} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
