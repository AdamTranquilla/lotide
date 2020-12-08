const eqObjects = (obj1, obj2) => {
  if (typeof obj1 != typeof obj2 || Object(obj1) !== obj1) return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) return false;
      if (typeof obj1[key] === 'object' && !(obj1[key] instanceof Array)) {
        if (!eqObjects(obj1[key], obj2[key])) return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;