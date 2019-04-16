import React from 'react'

import {Card, Typography} from '../../components'
import {getWindDirection, milesToKms} from './../../services'
import { Turbine } from './../../resources/icons'

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

        <div className='flex center' style={{justifyContent: 'space-between', paddingTop: 8}}>
          <img className="turbine" alt="tubine" src={Turbine} />
          <div>
            <Typography>Chill: {chill}</Typography>
            <Typography>Speed: {milesToKms(speed).toFixed(2)} kmph</Typography>
            <Typography>Sirection: {getWindDirection(direction)}</Typography>
          </div>
        </div>
      </Card>
    </div>
  )
})
