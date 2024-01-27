import React from 'react'

const routine = {
  id: 'c1024c29-cca3-48c2-87ea-408946301c44',
  name: "Best chest for motherfuckers",
  description: "Description 1",
  totalExercisesCount: 3,
  estimatedTime: 35,
  exercisesList: [
    {
      id: 1,
      name: "Diamond push-ups",
      estimatedTime: 1
    },
    {
      id: 2,
      name: "Standard push-ups",
      estimatedTime: 1
    }
  ]
}

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

export default page