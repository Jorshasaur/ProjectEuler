var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem1/solution.js");

describe("Solution", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should have factors of 3,5,6,9 below 10.", function() {
    return assert.deepEqual(this.solution.findMultiples([3, 5], 1, 10).result, [3, 5, 6, 9]);
  });
  it("should not repeat factors.", function() {
    return assert.deepEqual(this.solution.findMultiples([3, 5], 1, 18).result, [3, 5, 6, 9, 10, 12, 15]);
  });
  it("should calculate the sum of 3,5,6,9 to be 23.", function() {
    this.solution.findMultiples([3, 5], 1, 10);
    return assert.equal(this.solution.sum(), 23);
  });
  return it("should calculate multiples to 999 with a sum of 233168.", function() {
    this.solution.findMultiples([3, 5], 1, 1000);
    return assert.equal(this.solution.sum(), 233168);
  });
});
