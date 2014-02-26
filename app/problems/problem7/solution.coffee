class Solution

  #Borrowed from solution #3, A Prime Number can be divided evenly only by 1 or itself. And it must be a whole number greater than 1.
  isPrime: (number)->
    if number is 1 then return false
    start = 2
    end = Math.round(Math.pow number, 0.5)
    for i in [start..end] by 1
      if @isNumberDivisibleBy number, i then return false
    return true

  isNumberDivisibleBy: (n, divisor)->
    if n is divisor then return false
    return n % divisor is 0

  getNthPrime: (n)->
    primeCount = 0
    currentPrime = 1
    while primeCount != n
      if @isPrime currentPrime then primeCount++
      if primeCount != n then currentPrime++
    return currentPrime



module.exports = Solution