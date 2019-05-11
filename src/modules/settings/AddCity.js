import React, { useState, useEffect } from 'react'
import { getCityInfo } from './../../services'

import {CityList} from './'

export const AddCity = () => {
  const [searchText, setSeachText] = useState('')
  const [cities, setCities] = useState([])

  const handleChange = async (e) => {
    const cityName = e.target.value
    setSeachText(cityName)
    const {data = []} = cityName.length > 3 && await getCityInfo(cityName)
    setCities(data.filter(({type}) => type === 'CITY'))
  }

  useEffect(() => {})

  return (
    <article className='add-city'>
      <div>
        <input
          type='text'
          placeholder='City Name'
          value={searchText}
          onChange={handleChange}
          />
      </div>

      <CityList cities={cities} />
    </article>
  )
}
