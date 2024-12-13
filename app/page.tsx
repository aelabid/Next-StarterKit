// app/(routes)/page.tsx
'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import HeroSection from './landing/sections/HeroSection';
import FeaturesSection from './landing/sections/FeaturesSection';
import StackSection from './landing/sections/StackSection';
import FooterSection from './landing/sections/FooterSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      <main>
        <HeroSection id="hero" />
        <FeaturesSection id="features" />
        <StackSection id="stack" />
      </main>
    </>
  );
}
