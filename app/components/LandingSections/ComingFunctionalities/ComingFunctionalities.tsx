import React from 'react'
import { HEADINGS } from '@/app/(styles)/variables'

const comingFunctionalitiesList = [
    {
      version: 'v2',
      versionFontColor: '#D1A8FF',
      title: 'Build custom routines',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    },
    {
      version: 'v2',
      versionFontColor: '#D1A8FF',
      title: 'Set your own goals',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    },
    {
      version: 'v3',
      versionFontColor: '#d9c49a',
      title: 'Track your progress',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde.',
    }
  ];

const ComingFunctionalitiesSection = () => {
  return (
    <section id="coming-functionalities" className="min-h-[100vh]">
    <h1 className={`${HEADINGS.H1} mb-6 font-bold`}>Coming functionalities</h1>

    <div className="grid grid-cols-2 gap-2">
      {comingFunctionalitiesList.map((functionality, index) => (
        <div
          key={index}
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
            className={`text-[${functionality.versionFontColor}]`}
           >Coming soon on {functionality.version}!</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>{functionality.title}</h3>
          <p>{functionality.description}</p>
        </div>
      ))
      }

    </div>
  </section>
  )
}

export default ComingFunctionalitiesSection