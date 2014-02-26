assert = require "assert"
Solution = require "../../problems/problem7/solution.js"

describe "Solution for Problem 7", ->
  beforeEach ->
    @solution = new Solution()

  it "should find the 6th prime number to be 13", ->
    prime = @solution.getNthPrime 6
    assert.equal prime, 13

  it "should find the 10001st prime number to be 104743", ->
    prime = @solution.getNthPrime 10001
    assert.equal prime, 104743