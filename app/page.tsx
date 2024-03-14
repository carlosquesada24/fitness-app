"use client"
import React from 'react'

import BannerSection from './components/LandingSections/Banner/Banner';
import ComingFunctionalitiesSection from "./components/LandingSections/ComingFunctionalities/ComingFunctionalities";
import HowItWorksSection from "./components/LandingSections/HowItWorks/HowItWorks";
import BenefitsSection from './components/LandingSections/Benefits/Benefits';
import ContactSection from './components/LandingSections/Contact/Contact';

export default function Home() {
  return (
    <>
      <BannerSection />
      <HowItWorksSection />
      <ComingFunctionalitiesSection />
      {/* <BenefitsSection /> */}
      {/* <ContactSection /> */}
    </>
  )
}
