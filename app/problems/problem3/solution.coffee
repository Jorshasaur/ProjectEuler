#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

class Solution

    #A Prime Number can be divided evenly only by 1 or itself. And it must be a whole number greater than 1.
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

    getPrimeNumberRange: (start, end)->
        primes = []
        while start <= end
            if @isPrime(start) then primes.push start
            start++
        return primes

module.exports = Solution