"use client"
import React from 'react'

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

import { DEFAULT_LANDING_SECTION_TITLE, HEADINGS } from '@/app/(styles)/variables'

const HowItWorksSection = () => {
    let windowSize = 0;
    let videoStyles = {}

    if (typeof window !== "undefined") {
        windowSize = window.screen.width
        videoStyles = {
            width: windowSize >= 1280 ? "60%" : "100%"
        }
        return (
            <section className="min-h-[100vh]">
                <h1 className={`${DEFAULT_LANDING_SECTION_TITLE}`}>How it works?</h1>

                <div className="w-full mb-24 flex flex-col xl:flex-row justify-between items-center">
                    <div className="left xl:w-[50%] xl:pr-8 mb-12 xl:mb-0 text-center xl:text-left">
                        <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Log your workouts <span className='bg-[#D1A8FF] text-[#000] py-1 px-4 rounded-[6px] font-bold whitespace-pre'>super easy</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat ea nam natus commodi ut saepe temporibus architecto, qui similique, maxime reprehenderit adipisci aliquid quas porro voluptatem pariatur aspernatur asperiores dolorum accusantium.</p>
                    </div>

                    <CldVideoPlayer
                        width="1920"
                        height="1080"
                        src="./fitness-app/add-workout-log"
                        className='border-solid border-4 border-[#D1A8FF]'
                    />
                </div>

                <div className="w-full mb-24 flex flex-col xl:flex-row justify-between items-center">
                    <CldVideoPlayer
                        width="1920"
                        height="1080"
                        src="./fitness-app/sign-up"
                        className='border-solid border-4 border-[#D1A8FF]'
                    />

                    <div className="left xl:w-[50%] xl:pl-8 mt-12 mb-12 xl:mb-0 text-center xl:text-left">
                        <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Create your account in <span className='bg-[#D1A8FF] text-[#000] py-1 px-4 rounded-[6px] font-bold whitespace-pre-wrap'>less than 30 seconds</span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat ea nam natus commodi ut saepe temporibus architecto, qui similique, maxime reprehenderit adipisci aliquid quas porro voluptatem pariatur aspernatur asperiores dolorum accusantium.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default HowItWorksSection