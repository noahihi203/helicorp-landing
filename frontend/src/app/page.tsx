"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AsSeenOnSection from "@/components/AsSeenOnSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollytellSection from "@/components/ScrollytellSection";
import ExpertInsightSection from "@/components/ExpertInsightSection";
import UseCaseSection from "@/components/UseCaseSection";
import InstallStepsSection from "@/components/InstallStepsSection";
import SpecsSection from "@/components/SpecsSection";
import FAQSection from "@/components/FAQSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AsSeenOnSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ReviewsSection />
      <ScrollytellSection />
      <ExpertInsightSection />
      <UseCaseSection />
      <InstallStepsSection />
      <SpecsSection />
      <FAQSection />
      <SubscribeSection />
      <Footer />
      <ChatBot />
    </main>
  );
}
