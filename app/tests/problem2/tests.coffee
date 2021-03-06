assert = require "assert"
Solution = require "../../problems/problem2/solution.js"

describe "Solution for Problem 2", ->
    beforeEach ->
        @solution = new Solution()
  
    it "should generate a fibonnaci from 1 - 89", ->
        assert.deepEqual @solution.buildFibonacci(89).result, [1,2,3,5,8,13,21,34,55,89]

    it "should generate a fibonnaci from 1 - 89 with evens", ->
        assert.deepEqual @solution.buildFibonacci(89).evens().result, [2,8,34]

    it "should total a fibonnaci from 1 - 89 as 231", ->
        assert.equal @solution.buildFibonacci(89).sum().result, 231

    it "should total a fibonnaci from 1 - 89 evens as 44", ->
        assert.equal @solution.buildFibonacci(89).evens().sum().result, 44

    it "should total a fibonnaci from 1 - 3999999 evens as 4613732", ->
        assert.equal @solution.buildFibonacci(3999999).evens().sum().result, 4613732       