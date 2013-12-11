var assert, test;

assert = require("assert");

test = require("../../problems/problem1/solution.js");

describe("initial test", function() {
  it("should be truthy", function() {
    return test.testPrint();
  });
  assert.equal(1, 1);
  return it("should have an error", function() {
    return assert.equal("this is a string", "this is a string");
  });
});
