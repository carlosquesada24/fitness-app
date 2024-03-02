import Video from "next-video";
import { HEADINGS } from "./(styles)/variables";

import LogWorkoutVideo from "../videos/fitness-app-workout-log.webm";

export default function Home() {
  return (
    <>
      <section className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className={`${HEADINGS.H1} font-bold`}>Your Ultimate Fitness Companion</h1>
        <p className="mt-2">Streamline Your Fitness Journey with our All-in-One App: Track Gym Progress & Manage Delicious Recipes for Optimal Health & Wellness!</p>
      
        <div className="mt-8">
          <span className="mr-6 p-2 bg-[#D1A8FF] text-[#000] rounded-[6px] cursor-pointer">Start!</span>
          <span className="p-2 bg-[#444] rounded-[6px] cursor-pointer">Documentation</span>
        </div>
      </section>
      <section className="min-h-[100vh]">
        <h1 className={`${HEADINGS.H1} mb-14 font-bold`}>Main Features</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div 
            className="bg-[#444] p-4 rounded-[6px]"
          >
            <h2 className={`${HEADINGS.H3} font-bold mb-2`}>Log your workouts super easy</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi neque numquam ipsum mollitia pariatur.</p>
          </div>

          <div 
            className="bg-[#444] p-4 rounded-[6px]"
          >
            <span className="text-[#D1A8FF]">Coming soon!</span>
            <h2 className={`${HEADINGS.H3} font-bold mb-2`}>Build custom routines</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi neque numquam ipsum mollitia pariatur.</p>
          </div>

          <div 
            className="bg-[#444] p-4 rounded-[6px]"
          >
            <span className="text-[#D1A8FF]">Coming soon!</span>
            <h2 className={`${HEADINGS.H3} font-bold mb-2`}>Set your own goals</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi neque numquam ipsum mollitia pariatur.</p>
          </div>

          <div 
            className="bg-[#444] p-4 rounded-[6px]"
          >
            <span className="text-[#D1A8FF]">Coming soon!</span>
            <h2 className={`${HEADINGS.H3} font-bold mb-2`}>Track your progress</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quasi neque numquam ipsum mollitia pariatur.</p>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh]">
        <h1 className={`${HEADINGS.H1} mb-14 font-bold`}>How it works?</h1>

        <div className="w-full flex flex-col xl:flex-row justify-between items-center">
          <div className="left w-[50%]">
            <h2>First</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sunt?</p>
          </div>

          <Video className="border border-solid border-[#fff] w-[50%]" src={LogWorkoutVideo} />
        </div>
      </section>
      <section className="min-h-[100vh]">
        <h1>Benefits</h1>
      </section>
      <section className="min-h-[100vh]">
        <h1>Contact</h1>
      </section>
    </>
  )
}
