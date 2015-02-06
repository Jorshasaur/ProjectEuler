assert = require "assert"
Solution = require "../../problems/problem10/solution.js"

describe "Solution for Problem 10", ->
  beforeEach ->
    @solution = new Solution()

  it "should find the primes below 10 as 2,3,5,7", ->
    primes = @solution.findPrimesLessThan 10
    assert.equal primes.length, 4
    assert.equal primes[0], 2
    assert.equal primes[1], 3
    assert.equal primes[2], 5
    assert.equal primes[3], 7

  it "should find the sum of primes less than 2 million as 142913828922", ->
    primes = @solution.findPrimesLessThan 2000000
    sum = @solution.findPrimesSum primes
    assert.equal sum, 142913828922
