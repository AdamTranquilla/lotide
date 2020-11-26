const assertObjectsEqual = function (actual, expected) {
  const fixObj = require('util').inspect; // takes the parameter and turns it into a object again
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${fixObj(actual)} === ${fixObj(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${fixObj(actual)} !== ${fixObj(expected)}`);
  }
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } else {
    for (const key in object1) {
      if (!object2.hasOwnProperty(key) || object1[key] !== object2[key]) {
        return false
      }
    }
  }
  return true
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);