import Video from "next-video";
import { HEADINGS } from "./(styles)/variables";

import LogWorkoutVideo from "../videos/fitness-app-add-workout-log.mp4";

export default function Home() {
  let windowSize = 0;
  let videoStyles = {}

  if (typeof window !== "undefined") {
    windowSize = window.screen.width
    videoStyles = {
      width: windowSize >= 1280 ? "60%" : "100%"
    }

  }

  return (
    <>
      <section className="h-[100vh] flex flex-col items-center justify-center">
        <h1 className={`${HEADINGS.H1} font-bold`}>Your Ultimate Fitness Companion</h1>
        <p className="mt-2">Streamline Your Fitness Journey with our All-in-One App: Track Gym Progress & Manage Delicious Recipes for Optimal Health & Wellness!</p>

        <div className="mt-8">
          <span className="mr-6 p-2 bg-[#D1A8FF] text-[#000] rounded-[6px] cursor-pointer">Start!</span>
        </div>
      </section>

      <section className="min-h-[100vh]">
        <h1 className={`${HEADINGS.H1} mb-14 font-bold`}>How it works?</h1>

        <div className="w-full mb-24 flex flex-col xl:flex-row justify-between items-center">
          <div className="left xl:w-[50%] xl:pr-6 mb-12 xl:mb-0 text-center xl:text-left">
            <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Log your workouts super easy</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, repellat ea nam natus commodi ut saepe temporibus architecto, qui similique, maxime reprehenderit adipisci aliquid quas porro voluptatem pariatur aspernatur asperiores dolorum accusantium.</p>
          </div>

          <Video
            style={videoStyles}
            className="border border-solid border-[#555555] rounded-[6px]"
            src={LogWorkoutVideo}
          />
        </div>
      </section>

      <section className="min-h-[100vh]">
        <h1 className={`${HEADINGS.H1} mb-6 font-bold`}>Coming functionalities</h1>

        <div className="grid grid-cols-2 gap-2">
          <div className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
          >
            <span className="text-[#D1A8FF]">Coming soon on v2!</span>
            <h3>Build custom routines</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.</p>
          </div>
          <div className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
          >
            <span className="text-[#D1A8FF]">Coming soon on v2!</span>
            <h3>Set your own goals</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.</p>
          </div>
          <div className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

           
            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
          >
            <span className="text-[#d9c49a]">Coming soon on v3!</span>
            <h3>Track your progress</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.</p>
          </div>

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
