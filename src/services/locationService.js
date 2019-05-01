const lat = 18.491196888942024;
const lon = 73.7923624709481;

/**
  * Tries to fetch current user location, if found returns current location
  * else returns last saved location
  */
const getCurrentLocation = () => {
  return new Promise( (resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator
        .geolocation
        .getCurrentPosition(data => {
          console.log(data);
          resolve({
            lat: data.coords.latitude,
            lon: data.coords.longitude
          })
        }, err => {
          console.log('Error occurred', err)
          // Use fallback location to fetch weather data
          resolve({lat, lon})
        });
    } else {
      // Use default location if location service is disabled
      resolve({lat, lon})
    }
  })
}

export { getCurrentLocation }