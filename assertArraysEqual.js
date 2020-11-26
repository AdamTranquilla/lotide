// FUNCTION IMPLEMENTATION
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

// TEST CODE
assertEqual([1, 2, 3], [1, 2, 3]); // => true
assertEqual([1, 2, 3], [3, 2, 1]); // => false
assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false