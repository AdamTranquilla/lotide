const takeUntil = function(array, callback) { 
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;