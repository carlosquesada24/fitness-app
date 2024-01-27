import React from 'react'

const page = ({params}: any) => {
  return (
    <div>
        <h2>Session</h2>
        <p>id: {params.id}</p>
    </div>
  )
}

export default page