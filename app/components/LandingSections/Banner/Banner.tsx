import React from 'react'
import { HEADINGS } from '@/app/(styles)/variables'

const Banner = () => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className={`${HEADINGS.H1} font-bold`}>Your Ultimate Fitness Companion</h1>
        <p className="mt-2">Streamline Your Fitness Journey with our All-in-One App: Track Gym Progress & Manage Delicious Recipes for Optimal Health & Wellness!</p>

        <div className="mt-8">
          <span className="mr-6 p-2 bg-[#D1A8FF] text-[#000] rounded-[6px] cursor-pointer">Start!</span>
        </div>
      </section>
  )
}

export default Banner