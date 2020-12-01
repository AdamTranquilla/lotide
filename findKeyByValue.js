const findKeyByValue = (bestTV, candidate) => {
  for (const genre in bestTV) {
    if ( bestTV[genre] === candidate) {
      return genre
    }
  }
};

module.exports = findKeyByValue;