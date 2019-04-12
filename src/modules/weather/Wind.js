import React from 'react'

import {Card} from '../../components'
import { getWindDirection } from './../../services'

export const Wind = React.memo(({data: {chill, direction, speed}}) => {
  return (
    <Card>
      <div>
        <div className='title'>Wind</div>
        <div>Chill: {chill}</div>
        <div>Direction: {getWindDirection(direction)}</div>
        <div>Speed: {speed}</div>
      </div>
  </Card>
  )
})