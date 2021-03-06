import React, { useEffect } from 'react'
import Typography from 'typography-material'

import {Card} from '../../components'
import {drawAstroImage} from './../../services'

export const Astronomy = React.memo(({ data: { sunrise, sunset }}) => {
  useEffect(() => drawAstroImage(sunrise, sunset), [])

  return (
    <div className='astrology'>
      <Card>
        <div className='title'>
          <Typography
            variant='subtitle1'
            style={{
            textTransform: 'uppercase'
          }}>Sun &amp; Moon</Typography>
        </div>

        <div className='flex astrology-detail'>
          <div className="sun-pos">
            <canvas id="astro-img" width="200" height="120"></canvas>
          </div>

          <div className='flex' style={{flexDirection: 'column'}}>
            <Typography variant='subtitle3'>Sunrise</Typography>
            <Typography variant='caption'>{sunrise}</Typography>
            <Typography variant='subtitle3'>Sunset</Typography>
            <Typography variant='caption'>{sunset}</Typography>
          </div>
        </div>

      </Card>
    </div>
  )
})
