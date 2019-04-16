import React from 'react'

import {Card, Typography} from '../../components'
import { pressureInchesToMillibar, milesToKms } from './../../services'

export const Atmosphere = React.memo(({
  data: {
    humidity,
    visibility,
    pressure
  }
}) => {
  return (
    <div className='atmosphere'>
      <Card>
        <div className='title'>
          <Typography
            variant='subtitle1'
            style={{
            textTransform: 'uppercase'
          }}>Atmosphere</Typography>
        </div>
        <div>
          <Typography>Humidity: {humidity} % </Typography>
          <Typography>Visibility: {milesToKms(visibility).toFixed(2)} km</Typography>
          <Typography>Pressure: {pressureInchesToMillibar(pressure)} millibar</Typography>
        </div>
      </Card>
    </div>
  )
})
