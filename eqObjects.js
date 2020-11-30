const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (!object2.hasOwnProperty(key) || object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;