// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`✅✅✅Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function (actual) {
  let newArray = []
  if (actual.length > 1) {
    return newArray = actual.slice(1, actual.length);
  } 
};

const result = tail(["Hello", "Lighthouse", "Labs"])

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

