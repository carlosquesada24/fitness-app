import React from 'react'
import { routine } from '../../../data'
import ExercisesGrid from '../../components/ui/ExercisesGrid/ExercisesGrid'

const page = ({ params }: any) => {

  return (
    <>
      <h2 className='text-[38px] sm:text-[52px] font-bold mb-10'>{routine.name}</h2>

      <div className='mb-12'>
        <span className='
        p-2

        bg-[#fff]
        text-[#000]
        hover:cursor-pointer
        hover:bg-[#cfcfcf]
        transition
        duration-350
        mr-5
      '>Start</span>

        <span className='mr-5'>32 min</span>

        <span className=''>176 calories</span>

      </div>

      <ExercisesGrid />
    </>
  )
}

export default page