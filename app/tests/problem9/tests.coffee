assert = require "assert"
Solution = require "../../problems/problem9/solution.js"

describe "Solution for Problem 9", ->
  beforeEach ->
    @solution = new Solution()

  it "should prove 3,4,5 as a triplet", ->
    isTriplet = @solution.testTriplet 3, 4, 5
    assert.equal isTriplet, true

  it "should find 3,4,5 with a triplet sum of 12", ->
    triplet = @solution.findTripletWithSum(12, 30)
    assert.equal triplet[0], 3
    assert.equal triplet[1], 4
    assert.equal triplet[2], 5

  it "should find the single triplet sum of 1000", ->
    @solutionTriplet = @solution.findTripletWithSum(1000, 500)
    assert.equal @solutionTriplet[0], 200
    assert.equal @solutionTriplet[1], 375
    assert.equal @solutionTriplet[2], 425

  it 'should 31,875,000 as the product of the final triplet', ->
    product = @solution.getTripletProduct @solutionTriplet
    assert.equal product, 31875000
