import { DEFAULT_CARDS_STYLES, DEFAULT_H3_STYLES, DEFAULT_LANDING_SECTION_TITLE, HEADINGS } from '@/app/(styles)/variables'
import React from 'react'

const Benefits = () => {
  return (
    <section className="mb-20">
      <h1 className={`${DEFAULT_LANDING_SECTION_TITLE}`}>Benefits</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className={DEFAULT_CARDS_STYLES}>
          <h3 className={`${DEFAULT_H3_STYLES} font-bold mb-2`}>More realistic training</h3>
          <p>Unleash your greatest potential by taking into account more complex variables that are not normally in predetermined routines for average people.
          </p>
        </div>

        <div className={DEFAULT_CARDS_STYLES}>
          <h3 className={`${DEFAULT_H3_STYLES}`}>Save time and stress</h3>
          <p>You don't have to search through your notes for the marks of your exercises since in addition to being saved in the app, they can be viewed very easily by exercise to know how much load you have to do for each exercise</p>
        </div>
      </div>
    </section>
  )
}

export default Benefits