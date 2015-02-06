Solution3 = require "../problem3/solution.coffee"

class Solution

  constructor: () ->
    @solution3 = new Solution3()

  findPrimesLessThan: (number) ->
    primes = @solution3.getPrimeNumberRange 1, number-1
    primes

  findPrimesSum: (primes) ->
    sum = 0
    for prime in primes
      sum += prime
    sum

module.exports = Solution
