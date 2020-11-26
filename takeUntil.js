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

const takeUntil = function (array, callback) { // taking array and 1line funct
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);