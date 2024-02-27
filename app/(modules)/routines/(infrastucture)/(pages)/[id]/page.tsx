"use client"

import React, { useContext } from 'react'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'
import Link from 'next/link'
import { START_WORKOUT_SESSION_BUTTON_STYLES } from '@/app/(styles)'
import { HEADINGS } from '@/app/(styles)/variables'
import { RoutinesContext } from '../../(hooks)/RoutinesContext'
import WorkoutSessionsGrid from '../../components/ui/WorkoutSessionsGrid/WorkoutSessionsGrid'

import START_WORKOUT_SESSION_ICON from '@/app/(assets)/startWorkoutSession.svg'
import Image from 'next/image'

const Page = ({ params }: any) => {

  const { routinesList } = useContext(RoutinesContext)

  const workoutSessionLogsList =
    routinesList
      ?.find(routine => routine.id === params.id)
      ?.workoutSessionLogsList
    ?? []

  const routine =
    routinesList
      ?.find(routine => routine.id === params.id)

  const exercisesListFiltered =
    routine
      ?.exercisesList
    ?? []

  return (
    <>
      <h2 className={`${HEADINGS.H1} font-bold mt-6 mb-10`}>{routine?.name}</h2>

      <div className='mb-12 flex items-center'>
        <Link
          href={`/routines/session/${crypto.randomUUID()}`}
          className={`
            ${START_WORKOUT_SESSION_BUTTON_STYLES}
            mr-auto
          `}
          style={{ borderRadius: '50%'}}
        >
          <Image
            src={START_WORKOUT_SESSION_ICON} 
            alt="Start workout session icon" 
            className={`flex font-bold`}
            width={26}
            height={15}
          />
        </Link>

        <span className='ml-auto mr-5'>176 calories 🔥</span>
        <span className=''>32 min 🕙</span>
      </div>

      <ExercisesGrid
        exersisesList={exercisesListFiltered}
      />

      <WorkoutSessionsGrid workoutSessionsList={workoutSessionLogsList} />
    </>
  )
}

export default Page