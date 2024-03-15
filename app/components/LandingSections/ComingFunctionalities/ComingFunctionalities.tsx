import React from 'react'
import { DEFAULT_LANDING_SECTION_TITLE, HEADINGS } from '@/app/(styles)/variables'

const comingFunctionalitiesList = [
    {
      theme: {
        version: 'v2',
        bgColor: "#a0af55",
        fontColor: "#F8F8F8"
      },
      title: 'Build custom routines',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    },
    {
      theme: {
        version: 'v2',
        bgColor: "#a0af55",
        fontColor: "#F8F8F8"
      },
      title: 'Set your own goals',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    },
    {
      theme: {
        version: "v3",
        bgColor: "#6e0015",
        fontColor: "#ffe2aE",
      },
      title: 'Track your progress',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    }
  ];

const ComingFunctionalitiesSection = () => {
  return (
    <section id="coming-functionalities" className="min-h-[100vh]">
    <h1 className={`${DEFAULT_LANDING_SECTION_TITLE}`}>Coming Functionalities</h1>

    <div className="grid grid-cols-2 gap-2">
    <div
        key={crypto.randomUUID()} 
          className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
        >
          <span 
            // className={`text-[${functionality.versionFontColor}]`}
            className={`py-1 px-3 bg-[#a0af55] font-bold rounded-[6px] mb-4 inline-block text-[#F8F8F8]`}
           >Release on version 2.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Build custom routines</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</p>
        </div>

        <div
        key={crypto.randomUUID()} 
          className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
        >
          <span 
            // className={`text-[${functionality.versionFontColor}]`}
            className={`py-1 px-3 bg-[#a0af55] font-bold rounded-[6px] mb-4 inline-block text-[#F8F8F8]`}
           >Release on version 2.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Set your own goals</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta.</p>
        </div>

        <div
        key={crypto.randomUUID()} 
          className="   
            p-5
            bg-[#464646]
            border-[#535353]
            rounded-[6px]

            hover:cursor-pointer
            hover:bg-[#525252]
            transition
            duration-350"
        >
          <span 
            // className={`text-[${functionality.versionFontColor}]`}
            className={`
              py-1 
              px-3 
              bg-[#ffe2aE] 
              font-bold 
              rounded-[6px] 
              mb-4 
              inline-block 
              text-[#c33a53]
            `}
           >Release on version 3.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Track your progress</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore!</p>
        </div>

    </div>
  </section>
  )
}

export default ComingFunctionalitiesSection