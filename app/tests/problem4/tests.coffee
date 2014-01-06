assert = require "assert"
Solution = require "../../problems/problem4/solution.js"

describe "Solution for Problem 4", ->
    beforeEach ->
        @solution = new Solution()   

    it "should evaluate 9009 as a palindrome", ->
        isPalindrome = @solution.isPalindrome 9009
        assert.equal isPalindrome, true

    it "should evaluate 90509 as a palindrome", ->
        isPalindrome = @solution.isPalindrome 90509
        assert.equal isPalindrome, true

    it "should find the largest palindrome of two digit products to be 9009", ->
        largest = @solution.findLargestPalindrome 99
        assert.equal largest, 9009    

    it "should find the largest palindrome of three digit products to be 906609", ->
        largest = @solution.findLargestPalindrome 999
        assert.equal largest, 906609        
