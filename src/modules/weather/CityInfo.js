import React from 'react'

import { Typography } from './../../components'

export const CityInfo = React.memo(({info: {city, region, country}}) => {
    return (
      <div className={'flex center'}>
        <Typography variant='h5'>{city} ({region.trim()}), {country}</Typography>
        {/* <div>01/04, 8:45 AM</div> */}
      </div>
    )
})
