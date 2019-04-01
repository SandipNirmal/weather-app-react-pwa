/**
   * Tries to fetch current user location, if found returns current location
   * else returns last saved location
   */
const getCurrentLocation = () => {
  if ('geolocation' in navigator) {
    navigator
      .geolocation
      .getCurrentPosition(data => {
        console.log(data);
      }, err => {
        console.log('Error occurred', err)
        // Use fallback location to fetch weather data
      });
  }
}

export {getCurrentLocation}