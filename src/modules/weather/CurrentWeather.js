import React from 'react'

import { Typography } from './../../components'
import * as Cond from './../../resources/icons'
import { farenheitToCelsius, getConditionIcon } from './../../services'

export const CurrentWeather = React.memo(({weather: {text, code, temperature}}) => {
  return (
    <div>
      <div className='flex' style={{alignItems: 'center'}}>
        <img src={Cond[`Cond_${getConditionIcon(code)}`]} alt={text} />
        <Typography variant='h4'>{text}</Typography>
      </div>
      {/* <div>
        37<sup>o</sup>
        20<sup>o</sup>
      </div> */}
      <div style={{paddingLeft: 16}}>
        <Typography variant='h2'>{farenheitToCelsius(temperature)}&#xb0;C</Typography>
      </div>
    </div>
  )
})