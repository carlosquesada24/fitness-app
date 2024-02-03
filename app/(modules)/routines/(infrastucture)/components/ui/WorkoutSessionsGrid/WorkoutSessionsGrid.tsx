import React from 'react'
import Link from 'next/link'
import { HEADINGS } from '@/app/(styles)/variables'

interface WorkoutSessionGridProps {
    workoutSessionsList: any[]
}

const WorkoutSessionsGrid = ({workoutSessionsList}: WorkoutSessionGridProps) => {
  return (
    <>
    <h2 className={`${HEADINGS.H3} font-bold mt-12 mb-1`}>Workout Logs</h2>

<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full'>
  {
    workoutSessionsList.length > 0 ?
      workoutSessionsList.map((session: any) => {
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

export default WorkoutSessionsGrid