"use client"
import React from 'react'
import Form from '../../(components)/(Form)/Form';
import isAuth from '@/app/components/PrivateRoute/PrivateRoute';

const SignUp = () =>
  (
    <>
      <h1>Sign Up</h1>
      <Form />
    </>
  )

export default isAuth(SignUp) 