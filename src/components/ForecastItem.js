import React from 'react'

const ForecastItemComponent = ({day, min, max, cond}) => {
  return (
    <div>
      <div>{day}</div>
      <div>{cond}</div>
      <div>{`${min} / ${max}`}</div>
    </div>
  )
}

export const ForecastItem = React.memo(ForecastItemComponent)
