import React from 'react'

const CardComponent = ({children}) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export const Card = React.memo(CardComponent)
