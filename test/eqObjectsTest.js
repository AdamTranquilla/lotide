const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


const ab = { a: { z: 1 }, b: 2 }; 
const ba = { b: 2, a: { z: 1 }};
const AB = { a: { z: 1 }, b: 2 };
const cb = { a: { y: 0, z: 1 }, b: 2 };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

describe("#eqObjects", () => {
  
  it("{ a: { z: 1 }, b: 2 } = { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects(ab, AB));
  });

  it("{ a: { z: 1 }, b: 2 } = { b: 2, a: { z: 1 } }", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

/*   it("{ a: { z: 1 }, b: 2 } = { a: { y: 0, z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects(ab, cb));
  }); */

});

