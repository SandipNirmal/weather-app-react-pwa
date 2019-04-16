import React from 'react'

import {Card, Typography} from '../../components'
import {drawAstroImage} from './../../services'

export class Astronomy extends React.PureComponent {

  componentDidMount() {
    const {
      props: {
        data: {
          sunrise,
          sunset
        }
      }
    } = this
    drawAstroImage(sunrise, sunset)
  }

  render() {
    const {
      props: {
        data: {
          sunrise,
          sunset
        }
      }
    } = this
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
              <Typography variant='overline'>Sunrise</Typography>
              <Typography variant='caption'>{sunrise}</Typography>
              <Typography variant='overline'>Sunset</Typography>
              <Typography variant='caption'>{sunset}</Typography>
            </div>
          </div>

        </Card>
      </div>
    )
  }
}
