import React from 'react'

export const CurrentWeather = React.memo(({weather: {text, code, temperature}}) => {
  return (
    <div>
      <div>{text}(Condition Icon on Left)</div>
      {/* <div>
        37<sup>o</sup>
        20<sup>o</sup>
      </div> */}
      <div style={{display: 'flex'}}>
        <h1>{temperature}</h1> <sup>o</sup> C
      </div>
    </div>
  )
})