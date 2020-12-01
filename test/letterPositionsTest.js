const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns h: [0], e: [1], etc.. for 'hello'", () => {
    assert.deepEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it("returns { a: [ 0, 1, 2 ], b: [ 3, 4 ], etc.. }  for 'aaab'", () => {
    assert.deepEqual(letterPositions('aaab'), { a: [ 0, 1, 2 ], b: [ 3 ] });
  });
});