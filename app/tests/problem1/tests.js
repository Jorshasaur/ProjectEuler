var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem1/solution.js");

describe("Solution", function() {
  it("should have factors of 3,5,6,9 below 10.", function() {
    var solution;
    solution = new Solution();
    return assert.deepEqual(solution.findMultiples([3, 5], 1, 10).result, [3, 5, 6, 9]);
  });
  it("should not repeat factors.", function() {
    var solution;
    solution = new Solution();
    return assert.deepEqual(solution.findMultiples([3, 5], 1, 18).result, [3, 5, 6, 9, 10, 12, 15]);
  });
  it("should calculate the sum of 3,5,6,9 to be 23.", function() {
    var solution;
    solution = new Solution();
    solution.findMultiples([3, 5], 1, 10);
    return assert.equal(solution.sum(), 23);
  });
  return it("should calculate multiples to 999 with a sum of 233168.", function() {
    var solution;
    solution = new Solution();
    solution.findMultiples([3, 5], 1, 1000);
    return assert.equal(solution.sum(), 233168);
  });
});
