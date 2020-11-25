const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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

const flatten = (arr) => {
  flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // not arr.isArray
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j])
      }
    } else {
      flatArr.push(arr[i])
    }
  }
  return flatArr
};

console.log("final array",flatten([1, 2, [3, 4], 5, [6]]))