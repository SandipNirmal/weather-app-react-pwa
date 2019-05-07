import React, { useState, useEffect } from 'react'

import {CityList} from './'

export const AddCity = () => {
  const [searchText, setSeachText] = useState('')
  const [cities, setCities] = useState([])

  useEffect(() => {})

  return (
    <article>
      <div>
        <input
          type='text'
          placeholder='City Name'
          value={searchText}
          onChange={setSeachText}
          />
      </div>

      <CityList cities={cities} />
    </article>
  )
}
