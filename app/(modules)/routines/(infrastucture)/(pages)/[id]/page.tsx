"use client"

import React, { useContext } from 'react'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'
import Link from 'next/link'
import { buttonStyles } from '@/app/(styles)'
import { HEADINGS } from '@/app/(styles)/variables'
import { RoutinesContext, useRoutines } from '../../(hooks)/RoutinesContext'


const Page = ({ params }: any) => {

  const { routinesList, sessionWorkout } = useContext(RoutinesContext)

  const routine = routinesList?.find(routine => routine.id === params.id)
  const exercisesListFiltered = routine?.exercisesList ?? []

  return (
    <>
      <h2 className={`${HEADINGS.H1} font-bold mb-10`}>{routine?.name}</h2>

      <div className='mb-12'>
        <Link
          href={`/routines/session/${crypto.randomUUID()}`}
          className={`
            ${buttonStyles}
            mr-5
            `}
        >Start</Link>

        <span className='mr-5'>32 min</span>

        <span className=''>176 calories</span>

      </div>

      <ExercisesGrid
        exersisesList={exercisesListFiltered}
      />

      <h2 className={`${HEADINGS.H3} font-bold mt-12 mb-1`}>Workout Logs</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full'>
        {
          sessionWorkout.length > 0 ?
            sessionWorkout.map((session: any) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={`/routines/${session.id}`}
                >
                  <article key={crypto.randomUUID()} className='
                p-4 
                flex 
                
                flex-col
                sm:flex-row

                justify-between 
                hover:cursor-pointer
                hover:bg-[#2e2e2e]
                transition
                duration-350
              '>
                    <h2>{session.date}</h2>
                  </article>
                </Link>
              )
            })
            : <h3>There are no routines yet</h3>
        }
      </div>
    </>
  )
}

export default Page