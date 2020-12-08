const eqObjects = (object1, object2) => {
  if (typeof object1 != typeof object2 || Object(obj1) !== obj1) return false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (!object2.hasOwnProperty(key)) return false;
      if (typeof object1[key] === 'object' && !(object1[key] instanceof Array)) {
        if (!eqObjects(object1[key], object2[key])) return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;