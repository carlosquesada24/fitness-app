import React from 'react'
import { DEFAULT_LANDING_SECTION_TITLE, HEADINGS } from '@/app/(styles)/variables'
import { COMING_FUNCTIONALITIES_CARD_STYLES, COMING_FUNCTIONALITIES_VERSION_TEXT_STYLES } from './styles';

const ComingFunctionalitiesSection = () => {
  return (
    <section
      id="coming-functionalities"
      className='h-auto mb-20'
    >
      <h1 className={`${DEFAULT_LANDING_SECTION_TITLE}`}>Coming Functionalities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className={COMING_FUNCTIONALITIES_CARD_STYLES}>
          <span
            className={`${COMING_FUNCTIONALITIES_VERSION_TEXT_STYLES} bg-[#a0af55] text-[#F8F8F8]`}
          >Release on version 2.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Build custom routines</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, sed.</p>
        </div>

        <div className={COMING_FUNCTIONALITIES_CARD_STYLES}>
          <span
            className={`${COMING_FUNCTIONALITIES_VERSION_TEXT_STYLES} bg-[#a0af55] text-[#F8F8F8]`}
          >Release on version 2.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Set your own goals</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta.</p>
        </div>

        <div className={COMING_FUNCTIONALITIES_CARD_STYLES}>
          <span
            className={`${COMING_FUNCTIONALITIES_VERSION_TEXT_STYLES} bg-[#ffe2aE]  text-[#c33a53]`}
          >Release on version 3.0</span>
          <h3 className={`${HEADINGS.H3} font-bold`}>Track your progress</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, tempore!</p>
        </div>
      </div>
    </section>
  )
}

export default ComingFunctionalitiesSection