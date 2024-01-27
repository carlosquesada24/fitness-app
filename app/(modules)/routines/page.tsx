import React from 'react'
import { routinesList } from './data'
import RoutinesGrid from './infrastucture/components/ui/RoutinesGrid/RoutinesGrid'

const page = () => {
  return (
    <>
        <h2 className='text-[52px] font-bold'>Routines</h2>

        <RoutinesGrid />
    </>
  )
}

export default page