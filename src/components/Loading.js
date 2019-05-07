import React from 'react'

const dots = [1, 2, 3]

export const Loading = React.memo(() => {
  return (
    <div className='bouncing-loader'>
      {dots.map((i) => <div key={i} />)}
    </div>
  )
})

