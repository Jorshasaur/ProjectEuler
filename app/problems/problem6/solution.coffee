class Solution

  sumOfSquares: (start, end)->
    sum = 0
    for number in [start..end] by 1
      sum += (Math.pow number, 2)
    return sum

  squareOfSum: (start, end)->
    sum = 0
    for number in [start..end] by 1
      sum += number
    return Math.pow sum, 2

  differenceSquaredAndSummed: (start, end)->
    sums = @sumOfSquares start, end
    squares = @squareOfSum start, end
    return squares - sums

module.exports = Solution