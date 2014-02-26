var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem7/solution.js");

describe("Solution for Problem 7", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should find the 6th prime number to be 13", function() {
    var prime;
    prime = this.solution.getNthPrime(6);
    return assert.equal(prime, 13);
  });
  return it("should find the 10001st prime number to be 104743", function() {
    var prime;
    prime = this.solution.getNthPrime(10001);
    return assert.equal(prime, 104743);
  });
});
