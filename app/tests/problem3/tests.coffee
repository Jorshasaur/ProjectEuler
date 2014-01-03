assert = require "assert"
Solution = require "../../problems/problem3/solution.js"

describe "Solution for Problem 3", ->
    beforeEach ->
        @solution = new Solution()   

    it "should find prime numbers to 17", ->
        primes = @solution.getPrimeNumberRange 1, 17
        assert.deepEqual primes, [2,3,5,7,11,13,17]

    it "should find prime numbers to 67", ->
        primes = @solution.getPrimeNumberRange 1, 67
        assert.deepEqual primes, [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67]

    it "should find prime numbers to 163", ->
        primes = @solution.getPrimeNumberRange 1, 163
        assert.deepEqual primes, [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163]        

    it "should calculate the highest number to divide from 1375164 as 1172", ->
        highest = @solution.getHighestFactor 1375164
        assert.equal highest, 1172

    it "should find the prime factorization of 1375164", ->
        primes = @solution.getPrimes 1375164
        assert.deepEqual primes, [2,2,3,3,3,7,17,107]   

    it "should find the largest prime factorization of 600851475143 to be 6857", ->
        primes = @solution.getPrimes 600851475143
        highest = primes[primes.length-1]
        assert.deepEqual highest, 6857