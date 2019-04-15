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

          <div className='flex center'>
            <div className="sun-pos">
              <canvas id="astro-img" width="200" height="120"></canvas>
            </div>

            <div>
              <Typography>Rise: {sunrise}</Typography>
              <Typography>Set: {sunset}</Typography>
            </div>
          </div>

        </Card>
      </div>
    )
  }
}
