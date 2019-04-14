import React from 'react'

import {Card, Typography} from './../../components'
import {ForecastItem} from './ForecastItem'

const ForecastsComponent = ({forecasts}) => {
  return (
    <Card>
      <div className='title'>
        <Typography variant='subtitle1' style={{textTransform: 'uppercase'}}>Forecasts</Typography>
      </div>
      <div className='forecasts'>
        {forecasts.map(({day, low, high, code, text}) => {
          return <ForecastItem key={`${day}-${low}-${high}`} day={day} min={low} max={high} code={code} text={text}/>
        })}
      </div>
    </Card>
  )
}

export const Forecasts = React.memo(ForecastsComponent)
