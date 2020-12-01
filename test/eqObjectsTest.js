const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

describe("#eqObjects", () => {
  
  it("{ a: 1, b: 2 } = { b: 2, a: 1 }", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("{ a: 1, b: 2 } = { a: 1, b: 2, c: 3 }", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

});

