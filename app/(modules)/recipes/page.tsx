import isAuth from '@/app/components/PrivateRoute/PrivateRoute'
import React from 'react'

const page = () => {
  return (
    <>
        <h2>Recipes</h2>
        <p>asd</p>
    </>
  )
}

export default isAuth(page) 