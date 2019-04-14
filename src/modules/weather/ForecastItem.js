import React from 'react'

import {Typography} from '../../components';
import * as Cond from './../../resources/icons'
import {farenheitToCelsius, getConditionIcon} from './../../services'

const ForecastItemComponent = ({day, min, max, code, text}) => {
  return (
    <div className='forecast-item'>
      <div className='flex forecast-item-day'>
        <Typography variant='overline'>{day}</Typography>
      </div>

      <div className='flex forecast-item-cond'>
        <div className='flex center'>
          <img
            src={Cond[`Cond_${getConditionIcon(code)}`]}
            alt={text}
            className='forecast-cond-code'/>
          <Typography variant='caption'>{text}</Typography>
        </div>
        <div>
          <Typography variant='subtitle2'>
            {farenheitToCelsius(min)}&#xb0; / {farenheitToCelsius(max)}&#xb0;
          </Typography>
        </div>
      </div>
    </div>
  )
}

export const ForecastItem = React.memo(ForecastItemComponent)
