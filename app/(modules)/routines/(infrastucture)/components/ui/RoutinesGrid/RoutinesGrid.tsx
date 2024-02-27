import React from 'react'
// import { routinesList } from '@/app/(modules)/routines/domain/data'
import Link from 'next/link'
import { useRoutines } from '../../../(hooks)/RoutinesContext'
import { COLORS } from '@/app/(styles)/variables'


// #2F3543

const RoutinesGrid = () => {

 const {routinesList} = useRoutines()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full'>
        {
          routinesList.length > 0 ?
          routinesList.map((routine: any) => {
            return (
              <Link
                key={crypto.randomUUID()}
                href={`/routines/${routine.id}`}
                className={`
                border-solid
                border-1
                border-[#535353]
                `}
              >
              <article 
                key={crypto.randomUUID()} 
                className={`
                  p-4 
                  flex 
                  
                  flex-col
                  sm:flex-row

                  bg-[#464646]
                  
                  rounded-[6px]
                  justify-between 
                  hover:cursor-pointer
                  hover:bg-[#525252]
                  
                  transition
                  duration-350
                `}
                style={{
                  border: "1px solid #535353",
                }}
              >
                <div className='text-center text-[#efefef] sm:text-left my-3 sm:my-0'>
                  <h3 className='md:text-[32px] text-[26px] font-bold my-2 sm:my-0'>{routine.name}</h3>
                  <span className='text-[#d4cee8]'>{routine.totalExercisesCount} exercises</span>
                </div>
                <div className='text-center sm:text-left my-3 sm:my-0'>
                  <span className='block md:text-[32px] text-[26px] font-bold my-2 sm:my-0'>23%</span>
                  <span className='text-[#d4cee8]'>{routine.estimatedTime} min</span>
                </div>
              </article>
              </Link>
            )
          })
          : <h3>There are no routines yet</h3>
        }
        </div>
  )
}

export default RoutinesGrid