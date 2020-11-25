// FUNCTION IMPLEMENTATION


const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }


};

const head = function (actual) {

  return actual[0]
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('a', 'a');
assertEqual('a', 'b');
assertEqual(1, 1);
assertEqual(1, 2);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");