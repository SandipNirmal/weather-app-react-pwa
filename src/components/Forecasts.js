import React from 'react'

import {ForecastItem} from './ForecastItem'

const ForecastsComponent = ({forecasts}) => {
  return (
    <div>
      {forecasts.map(({day, min, max, cond}) => {
        return <ForecastItem key={day} day={day} min={min} max={max} cond={cond} />
      })}
    </div>
  )
}

export const Forecasts = React.memo(ForecastsComponent)
