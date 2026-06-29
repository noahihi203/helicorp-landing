'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SpecsSection from '@/components/SpecsSection';
import ScrollytellSection from '@/components/ScrollytellSection';
import ReviewsSection from '@/components/ReviewsSection';
import SubscribeSection from '@/components/SubscribeSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScrollytellSection />
      <SpecsSection />
      <ReviewsSection />
      <SubscribeSection />
      <Footer />
      <ChatBot />
    </main>
  );
}
