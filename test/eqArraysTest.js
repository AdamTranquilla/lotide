const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("[[2, 3], [4]] = [[2, 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("[[2, 3], [4]] != [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("[[2, 3], [4]] != [[2, 3], 4]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});