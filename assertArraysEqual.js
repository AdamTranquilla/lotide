const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const fixObj = require('util').inspect; // takes the parameter and turns it into a object again
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${fixObj(actual)} === ${fixObj(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${fixObj(actual)} !== ${fixObj(expected)}`;
  }
};

module.exports = assertArraysEqual;