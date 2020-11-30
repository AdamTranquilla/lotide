const findKey = (shows, callback) => {
  let targetKey = '';
  for (let show in shows) {
    if (callback(shows[show])) {
      targetKey = show;
      break;
    }
  }
  return targetKey;
};

module.exports = findKey;