"use client"

import React from 'react'
import RoutinesGrid from './(infrastucture)/components/ui/RoutinesGrid/RoutinesGrid'
import { HEADINGS } from '@/app/(styles)/variables'
import isAuth from '@/app/components/PrivateRoute/PrivateRoute'

const page = () => {
  return (
    <>
        <h2 className={`${HEADINGS.H1} font-bold`}>Routines</h2>

        <RoutinesGrid />
    </>
  )
}

export default isAuth(page)