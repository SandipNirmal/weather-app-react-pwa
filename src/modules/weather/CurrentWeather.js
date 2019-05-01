import React from 'react'
import Typography from 'typography-material'

import * as Cond from './../../resources/icons'
import {farenheitToCelsius, getConditionIcon} from './../../services'

export const CurrentWeather = React.memo(({
  weather: {
    text,
    code,
    temperature
  }
}) => {
  return (
    <div style={{
      marginBottom: `32px`
    }}>
      <div className='flex center' style={{
        flexDirection: 'column'
      }}>
        <Typography>{text}</Typography>
        <div className='flex center' style={{paddingTop: 16}}>
          <img
            src={Cond[`Cond_${getConditionIcon(code)}`]}
            alt={text}
            className='cond-code'/>
          <Typography variant='h1'>{temperature ? farenheitToCelsius(temperature) : '--' }&#xb0;</Typography>
        </div>
      </div>
    </div>
  )
})