import React from 'react'

const routinesList = [
  {
    name: "Best chest for motherfuckers",
    description: "Description 1",
    totalExercisesCount: 3,
    estimatedTime: 35
  },
  {
    name: "Back",
    description: "Description 2",
    totalExercisesCount: 5,
    estimatedTime: 90
  },
  {
    name: "Arms",
    description: "Description 3",
    totalExercisesCount: 9,
    estimatedTime: 73
  },
  {
    name: "Legs",
    description: "Description 4",
    totalExercisesCount: 5,
    estimatedTime: 54
  },
]


const page = () => {
  return (
    <>
        <h2 className='text-[52px] font-bold'>Routines</h2>


        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full'>
        {
          routinesList.length>0 ?
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
    </>
  )
}

export default page