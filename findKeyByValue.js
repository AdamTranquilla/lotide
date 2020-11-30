const findKeyByValue = (bestTV, candidate) => {
  for (const genre in bestTV) {
    if ( bestTV[genre] === candidate) {
      return genre
    }
  }
};

/* const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}; */

module.exports = findKeyByValue;