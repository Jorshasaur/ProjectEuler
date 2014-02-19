var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem5/solution.js");

describe("Solution for Problem 5", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should find 2520 completely divisible from 1 - 10", function() {
    var isDivisible;
    isDivisible = this.solution.numberIsDivisibleByRange(1, 10, 2520);
    return assert.equal(isDivisible, true);
  });
  it("should not find 2519 as completely divisible from 1 - 10", function() {
    var isDivisible;
    isDivisible = this.solution.numberIsDivisibleByRange(1, 10, 2519);
    return assert.equal(isDivisible, false);
  });
  it("should find 2520 as the smallest number divisible in the 1 - 10 range", function() {
    var smallest;
    smallest = this.solution.findSmallestDivisible(1, 10);
    return assert.equal(smallest, 2520);
  });
  return it("should find 232792560 as the smallest even number divisible in the 1 - 20 range", function() {
    var smallest;
    smallest = this.solution.findSmallestEvenDivisible(1, 20);
    return assert.equal(smallest, 232792560);
  });
});
