import { routine } from '@/app/(modules)/routines/domain/data'
import { Exercise } from '@/app/(modules)/routines/domain/entities'
import { HEADINGS } from '@/app/(styles)/variables'
import React from 'react'

interface Props {
exersisesList: Exercise[]
}

const ExercisesGrid = (props: Props) => {
    return (
        <>
            <h4 className={`${HEADINGS.H3} font-bold mb-1`}>Exercises</h4>
            <div className='w-full'>
                {
                    props.exersisesList.map(exercise => (
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