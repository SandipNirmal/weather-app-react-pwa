/**
 * Wrapper for localStorage
 */
/**
 * Returns value for key from localStorage
 * 
 * @param {string} key
 * @returns {string}
 */
const getItem = (item) => {
  return localStorage.getItem(item)
}

/**
 * Sets value for key to localStorage
 * 
 * @param {string} key
 * @returns {string}
 */
const setItem = (item) => {
  return localStorage.setItem(item)
}

/**
 * Removes key:value pair from localStorage
 * 
 * @param {string} key
 * @returns {string}
 */
const removeItem = (item) => {
  return localStorage.removeItem(item)
}

export {
  getItem,
  setItem,
  removeItem
}
