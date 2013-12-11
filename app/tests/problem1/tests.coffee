assert = require "assert"
test = require "../../problems/problem1/solution.js"

describe "initial test", ->
  
	it "should be truthy", ->
    test.testPrint()
		assert.equal 1,1
    
	it "should have an error", ->
		assert.equal "this is a string", "this is a string"