const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([5,6,7]), [6]);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);