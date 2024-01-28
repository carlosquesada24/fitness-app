import React from 'react'
import { routine } from '../../../data'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'
import Link from 'next/link'
import { buttonStyles } from '@/app/(styles)'

const page = ({ params }: any) => {

  return (
    <>
      <h2 className='text-[38px] sm:text-[52px] font-bold mb-10'>{routine.name}</h2>

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

      <ExercisesGrid />
    </>
  )
}

export default page