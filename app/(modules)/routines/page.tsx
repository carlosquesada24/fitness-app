import React from 'react'
import { routinesList } from './data'
import RoutinesGrid from './(infrastucture)/components/ui/RoutinesGrid/RoutinesGrid'
import { HEADINGS } from '@/app/(styles)/variables'

const page = () => {
  return (
    <>
        <h2 className={`${HEADINGS.H1} font-bold`}>Routines</h2>

        <RoutinesGrid />
    </>
  )
}

export default page