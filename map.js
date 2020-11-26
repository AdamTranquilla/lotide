const assertEqual = function (actual, expected) {
  const fixObj = require('util').inspect; // takes the parameter and turns it into a object again
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${fixObj(actual)} === ${fixObj(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${fixObj(actual)} !== ${fixObj(expected)}`);
  }
};

const eqArrays = (a, b) => {
  if (a.length !== b.length) {
    return false
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      } 
    }
  }
  return true
}

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

assertEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => true

