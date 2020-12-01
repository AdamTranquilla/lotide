const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const key in itemsToCount) {
    if (itemsToCount[key]) {
      for (const name of allItems) {
        if (name === key) {
          if (results[key]) {
            results[key] += 1;
          } else {
            results[key] = 1;
          }
        }
      }
    }
  }
  return results;
};

module.exports = countOnly;