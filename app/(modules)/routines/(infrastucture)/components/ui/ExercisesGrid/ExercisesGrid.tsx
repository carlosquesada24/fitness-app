import { routine } from '@/app/(modules)/routines/data'
import React from 'react'

const ExercisesGrid = () => {
    return (
        <>
            <h4 className='text-[28px] sm:text-[32px] font-bold mb-1'>Exercises</h4>
            <div className='w-full'>
                {
                    routine.exercisesList.map(exercise => (
                        <div className='
            p-4
            my-4

            flex 
            justify-between
            hover:cursor-pointer
            hover:bg-[#2e2e2e]
            transition
            duration-350
          '>
                            <h3 className='inline'>{exercise.name}</h3>
                            <span>{exercise.estimatedTime} min</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ExercisesGrid