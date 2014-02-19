assert = require "assert"
Solution = require "../../problems/problem5/solution.js"

describe "Solution for Problem 5", ->
  beforeEach ->
    @solution = new Solution()

  it "should find 2520 completely divisible from 1 - 10", ->
    isDivisible = @solution.numberIsDivisibleByRange 1, 10, 2520
    assert.equal isDivisible, true

  it "should not find 2519 as completely divisible from 1 - 10", ->
    isDivisible = @solution.numberIsDivisibleByRange 1, 10, 2519
    assert.equal isDivisible, false

  it "should find 2520 as the smallest number divisible in the 1 - 10 range", ->
    smallest = @solution.findSmallestDivisible 1, 10
    assert.equal smallest, 2520

  it "should find 232792560 as the smallest even number divisible in the 1 - 20 range", ->
    smallest = @solution.findSmallestEvenDivisible 1, 20
    assert.equal smallest, 232792560

