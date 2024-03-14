import React from 'react'
import Form from '../../(components)/(Form)/Form'
import isAuth from '@/app/components/PrivateRoute/PrivateRoute'

const page = () => {
  return (
    <>
      <h1>Login</h1>
      <Form/>
    </>
  )
}

export default page