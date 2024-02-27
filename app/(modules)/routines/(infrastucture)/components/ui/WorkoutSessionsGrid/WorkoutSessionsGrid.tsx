import React from 'react'
import Link from 'next/link'
import { HEADINGS } from '@/app/(styles)/variables'
import { WORKOUT_LOGS_CARD_STYLES } from '@/app/(styles)'

interface WorkoutSessionGridProps {
    workoutSessionsList: any[]
}

const WorkoutSessionsGrid = ({workoutSessionsList}: WorkoutSessionGridProps) => {
  return (
    <>
    <h2 className={`${HEADINGS.H3} font-bold mt-12 mb-1`}>Workout Logs</h2>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full overflow-hidden'>
  {
    workoutSessionsList.length > 0 ?
      workoutSessionsList.map((session: any) => {
        return (
          <Link
            key={crypto.randomUUID()}
            className='text-center overflow-hidden'
            href={`/routines/${session.id}`}
          >
            <article 
              key={crypto.randomUUID()} 
              className={`
                ${WORKOUT_LOGS_CARD_STYLES}
              `}>
              <h2 className='m-auto'>{session.date}</h2>
            </article>
          </Link>
        )
      })
      : <h3>There are no workout logs yet</h3>
  }
</div>
    </>
  )
}

export default WorkoutSessionsGrid