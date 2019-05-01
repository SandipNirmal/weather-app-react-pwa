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
            <Typography>Chill: {chill || 'NA'}</Typography>
            <Typography>Speed: {speed ? milesToKms(speed).toFixed(2) : 'NA'} kmph</Typography>
            <Typography>Sirection: {direction ? getWindDirection(direction) : 'NA'}</Typography>
          </div>
        </div>
      </Card>
    </div>
  )
})
