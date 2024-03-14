import React from 'react'
import NextVideo from 'next-video'
import { HEADINGS } from '@/app/(styles)/variables'

import LogWorkoutVideo from "../../../../videos/fitness-app-add-workout-log.mp4";

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
                <h1 className={`${HEADINGS.H1} mb-14 font-bold`}>How it works?</h1>

                <div className="w-full mb-24 flex flex-col xl:flex-row justify-between items-center">
                    <div className="left xl:w-[50%] xl:pr-6 mb-12 xl:mb-0 text-center xl:text-left">
                        <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Log your workouts super easy</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat ea nam natus commodi ut saepe temporibus architecto, qui similique, maxime reprehenderit adipisci aliquid quas porro voluptatem pariatur aspernatur asperiores dolorum accusantium.</p>
                    </div>

                    <NextVideo
                        style={{ zIndex: "1", ...videoStyles }}
                        className="border border-solid border-[#555555] rounded-[6px]"
                        src={LogWorkoutVideo}
                    />
                </div>
            </section>
        )
    }
}

export default HowItWorksSection