import React from 'react'

export const CityItem = React.memo(({city: { name, country }}) => <div> {name}, {country} </div>)
