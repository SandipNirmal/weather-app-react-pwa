import React from 'react'

import { CityItem } from './'

export const CityList = ({cities}) => {
  return cities.map((city) => <CityItem key={city.id} city={city}/> )
}
