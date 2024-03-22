"use client"
import React, { useEffect } from 'react'

import { useAuth } from './(modules)/authentication/(infrastucture)/(context)/AuthContext';
import { useRouter } from 'next/navigation';

import BannerSection from './components/LandingSections/Banner/Banner';
import ComingFunctionalitiesSection from "./components/LandingSections/ComingFunctionalities/ComingFunctionalities";
import HowItWorksSection from "./components/LandingSections/HowItWorks/HowItWorks";
import BenefitsSection from "./components/LandingSections/Benefits/Benefits"
import ContactSection from "./components/LandingSections/Contact/Contact"


export default function Home() {

  const {isLogged} = useAuth()
  const router = useRouter()

  useEffect(() => {
    if ( isLogged ) {
      router.push('/routines')
    }
  }, [isLogged])

  return (
    <>
      <BannerSection />
      <HowItWorksSection />
      <ComingFunctionalitiesSection />
      <BenefitsSection />
      <ContactSection />
    </>
  )
}
