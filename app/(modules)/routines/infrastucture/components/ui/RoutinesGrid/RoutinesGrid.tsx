import React from 'react'
import { routinesList } from '@/app/(modules)/routines/domain/data'

const RoutinesGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full'>
        {
          routinesList.length > 0 ?
          routinesList.map((routine, index) => {
            return (
              <article key={index} className='
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
                <div className='text-center sm:text-left my-3 sm:my-0'>
                  <h3 className='md:text-[32px] text-[26px] font-bold my-2 sm:my-0'>{routine.name}</h3>
                  <span>{routine.totalExercisesCount} exercises</span>
                </div>
                <div className='text-center sm:text-left my-3 sm:my-0'>
                  <span className='block md:text-[32px] text-[26px] font-bold my-2 sm:my-0'>23%</span>
                  <span>{routine.estimatedTime} min</span>
                </div>
              </article>
            )
          })
          : <h3>There are no routines yet</h3>
        }
        </div>
  )
}

export default RoutinesGrid