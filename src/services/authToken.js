import CryptoJS from 'crypto-js'

/**
 * Generates OAuth token for Yahoo Weather API
 * 
 * @param {object} location {lat: '', lon: ''}
 */
const getAuthToken = (location) => {
  const concat = '&';
  const method = 'GET';
  const oauth = {
    'oauth_consumer_key': process.env.REACT_APP_CONSUMER_KEY,
    'oauth_nonce': Math
      .random()
      .toString(36)
      .substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
  };

  const merged = Object.assign({}, {
    ...location,
    'format': 'json'
  }, oauth)

  // Note the sorting here is required
  const merged_arr = Object
    .keys(merged)
    .sort()
    .map(function (k) {
      return [k + '=' + encodeURIComponent(merged[k])];
    });

  const signature_base_str = method + concat + encodeURIComponent(process.env.REACT_APP_YAHOO_WEATHER_API_ENDPOINT) + concat + encodeURIComponent(merged_arr.join(concat));

  const composite_key = encodeURIComponent(process.env.REACT_APP_CONSUMER_SECRET) + concat;
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(CryptoJS.enc.Base64);

  oauth['oauth_signature'] = signature;
  return 'OAuth ' + Object
    .keys(oauth)
    .map((k) => [k + '="' + oauth[k] + '"'])
    .join(',');
}

export {
  getAuthToken
}
