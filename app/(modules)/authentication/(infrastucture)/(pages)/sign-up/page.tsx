"use client"
import React from 'react'
import Form from '../../(components)/(Form)/Form';
import isAuth from '@/app/components/PrivateRoute/PrivateRoute';
import { HEADINGS } from '@/app/(styles)/variables';

const SignUp = () =>
  (
    <>
      <h1 className={`${HEADINGS.H2} text-center font-bold mb-8`}>Sign Up</h1>
      <Form />
    </>
  )

export default SignUp 