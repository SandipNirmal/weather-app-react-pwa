import React from 'react'

import {Card, Typography} from '../../components'
import {getWindDirection, milesToKms} from './../../services'

export const Wind = React.memo(({
  data: {
    chill,
    direction,
    speed
  }
}) => {
  return (
    <div className='wind'>
      <Card>
        <div className='title'>
          <Typography
            variant='subtitle1'
            style={{
            textTransform: 'uppercase'
          }}>Wind</Typography>
        </div>

        <div>
          <Typography>Chill: {chill}</Typography>
          <Typography>Direction: {getWindDirection(direction)}</Typography>
          <Typography>Speed: {milesToKms(speed).toFixed(2)}
            kmph</Typography>
        </div>
      </Card>
    </div>
  )
})
