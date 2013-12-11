assert = require "assert"
Solution = require "../../problems/problem1/solution.js"

describe "Solution", ->
  
	it "should have factors of 3,5,6,9 below 10.", ->
		solution = new Solution()
		assert.deepEqual solution.findMultiples([3,5], 1, 10).result, [3,5,6,9]

	it "should not repeat factors.", ->
		solution = new Solution()
		assert.deepEqual solution.findMultiples([3,5], 1, 18).result, [3,5,6,9,10,12,15]

	it "should calculate the sum of 3,5,6,9 to be 23.", ->
		solution = new Solution()
		solution.findMultiples([3,5], 1, 10)
		assert.equal solution.sum(), 23

	it "should calculate multiples to 999 with a sum of 233168.", ->
		solution = new Solution()
		solution.findMultiples([3,5], 1, 1000)
		assert.equal solution.sum(), 233168