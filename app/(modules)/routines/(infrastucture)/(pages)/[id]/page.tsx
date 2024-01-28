import React from 'react'
import { routinesList } from '../../../domain/data'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'
import Link from 'next/link'
import { buttonStyles } from '@/app/(styles)'
import { HEADINGS } from '@/app/(styles)/variables'


const page = ({ params }: any) => {

  const routine = routinesList.find(routine => routine.id === params.id)
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
    </>
  )
}

export default page