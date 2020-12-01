const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("Returns 1 for Count 'Jason'", () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  it("Returns 2 for Count 'Fang'", () => {
    assert.deepEqual(result1["Fang"], 2);
  });
});