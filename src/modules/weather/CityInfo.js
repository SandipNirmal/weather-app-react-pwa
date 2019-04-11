import React from 'react'

export const CityInfo = React.memo(({info: {city, region, country}}) => {
    return (
      <div>
        <div><h3>{city} ({region})</h3></div>
        <div>{country}</div>
        <div>01/04, 8:45 AM</div>
      </div>
    )
})
