#2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#
#What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

class Solution

  findSmallestDivisible: (start, end)->
    counting = true
    smallest = 1
    while counting is true
      if @numberIsDivisibleByRange start, end, smallest
        counting = false
      else
        smallest++
    return smallest

  findSmallestEvenDivisible: (start, end)->
    counting = true
    smallest = 1
    while counting is true
      if smallest % 2 == 0
        if @numberIsDivisibleByRange start, end, smallest
          counting = false
        else smallest++
      else
        smallest++
    return smallest

  numberIsDivisibleByRange: (start, end, number)->
    for count in [start..end] by 1
      if number % count > 0 then return false
    return true


module.exports = Solution