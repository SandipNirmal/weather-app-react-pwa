import React from 'react'

import { CityItem } from './'

export const CityList = ({cities}) => {
  return cities.map((city, index) => <CityItem key={index} city={city}/> )
}
