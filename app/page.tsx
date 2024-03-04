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
          <span className="p-2 bg-[#444] rounded-[6px] cursor-pointer">Documentation</span>
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

        <div className="w-full mb-24 flex flex-col-reverse xl:flex-row justify-between items-center">
          <Video
            style={videoStyles}
            className="border border-solid border-[#555555] rounded-[6px]"
            src=""
          />

          <div className="left xl:w-[50%] pl-6 text-center xl:text-right mb-12">
            <span className="text-[#D1A8FF]">Coming soon on v2!</span>
            <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Build custom routines</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima minus corporis maiores obcaecati id. Quasi id asperiores perferendis, qui accusamus odit! Quas non laboriosam quaerat asperiores placeat.</p>
          </div>


        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between items-center">
          <div className="left xl:w-[50%] pr-6 text-center xl:text-left mb-12">
            <span className="text-[#D1A8FF]">Coming soon on v2!</span>
            <h2 className={`${HEADINGS.H2} mb-4 font-bold`}>Set your own goals</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est assumenda corrupti tempora esse non, amet, distinctio minima pariatur expedita tempore soluta quisquam, ipsum ducimus quam?</p>
          </div>

          <Video
            style={videoStyles}
            className="border border-solid border-[#555555] rounded-[6px]"
            src=""
          />
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
