import React from 'react'

import {Typography} from './../../components'
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
      margin: `32px 0`
    }}>
      <div className='flex center' style={{
        flexDirection: 'column'
      }}>
        <Typography>{text}</Typography>
        <div className='flex center'>
          <img
            src={Cond[`Cond_${getConditionIcon(code)}`]}
            alt={text}
            className='cond-code'/>
          <Typography variant='h2'>{farenheitToCelsius(temperature)}&#xb0;</Typography>
        </div>
      </div>
    </div>
  )
})