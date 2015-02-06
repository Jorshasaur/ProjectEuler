var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem10/solution.js");

describe("Solution for Problem 10", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should find the primes below 10 as 2,3,5,7", function() {
    var primes;
    primes = this.solution.findPrimesLessThan(10);
    assert.equal(primes.length, 4);
    assert.equal(primes[0], 2);
    assert.equal(primes[1], 3);
    assert.equal(primes[2], 5);
    return assert.equal(primes[3], 7);
  });
  return it("should find the sum of primes less than 2 million as 142913828922", function() {
    var primes, sum;
    primes = this.solution.findPrimesLessThan(2000000);
    sum = this.solution.findPrimesSum(primes);
    return assert.equal(sum, 142913828922);
  });
});
