var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem9/solution.js");

describe("Solution for Problem 9", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should prove 3,4,5 as a triplet", function() {
    var isTriplet;
    isTriplet = this.solution.testTriplet(3, 4, 5);
    return assert.equal(isTriplet, true);
  });
  it("should find 3,4,5 with a triplet sum of 12", function() {
    var triplet;
    triplet = this.solution.findTripletWithSum(12, 30);
    assert.equal(triplet[0], 3);
    assert.equal(triplet[1], 4);
    return assert.equal(triplet[2], 5);
  });
  it("should find the single triplet sum of 1000", function() {
    this.solutionTriplet = this.solution.findTripletWithSum(1000, 500);
    assert.equal(this.solutionTriplet[0], 200);
    assert.equal(this.solutionTriplet[1], 375);
    return assert.equal(this.solutionTriplet[2], 425);
  });
  return it('should 31,875,000 as the product of the final triplet', function() {
    var product;
    product = this.solution.getTripletProduct(this.solutionTriplet);
    return assert.equal(product, 31875000);
  });
});
