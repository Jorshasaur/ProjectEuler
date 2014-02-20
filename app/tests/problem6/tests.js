var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem6/solution.js");

describe("Solution for Problem 6", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should find the sum of the squares of the first ten natural numbers to be 385", function() {
    var sum;
    sum = this.solution.sumOfSquares(1, 10);
    return assert.equal(sum, 385);
  });
  it("should find the square of the sum of the first ten natural numbers to be 3025", function() {
    var sum;
    sum = this.solution.squareOfSum(1, 10);
    return assert.equal(sum, 3025);
  });
  it("should find the difference of the squared sums and the sum of the squares from 1-10 to be 2640", function() {
    var difference;
    difference = this.solution.differenceSquaredAndSummed(1, 10);
    return assert.equal(difference, 2640);
  });
  return it("should find the difference of the squared sums and the sum of the squares from 1-100 to be 25164150", function() {
    var difference;
    difference = this.solution.differenceSquaredAndSummed(1, 100);
    return assert.equal(difference, 25164150);
  });
});
