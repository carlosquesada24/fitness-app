import React from 'react'

const page = ({ params }: any) => {

  return (
    <>
      <h2>Routine view</h2>
      <p>id: {params.id}</p>
    </>
  )
}

export default page