var Solution, assert;

assert = require("assert");

Solution = require("../../problems/problem4/solution.js");

describe("Solution for Problem 4", function() {
  beforeEach(function() {
    return this.solution = new Solution();
  });
  it("should evaluate 9009 as a palindrome", function() {
    var isPalindrome;
    isPalindrome = this.solution.isPalindrome(9009);
    return assert.equal(isPalindrome, true);
  });
  it("should evaluate 90509 as a palindrome", function() {
    var isPalindrome;
    isPalindrome = this.solution.isPalindrome(90509);
    return assert.equal(isPalindrome, true);
  });
  it("should find the largest palindrome of two digit products to be 9009", function() {
    var largest;
    largest = this.solution.findLargestPalindrome(99);
    return assert.equal(largest, 9009);
  });
  return it("should find the largest palindrome of three digit products to be 906609", function() {
    var largest;
    largest = this.solution.findLargestPalindrome(999);
    return assert.equal(largest, 906609);
  });
});
