#A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
#
#Find the largest palindrome made from the product of two 3-digit numbers.

class Solution

    isPalindrome: (number)->
        numberString = number.toString()
        reversed = @reverse numberString
        return numberString is reversed

    reverse: (string)->
        string.split("").reverse().join("")

    findLargestPalindrome: (factor)->
        largest = 0
        result = 0
        for i in [factor..0] by -1
            for m in [factor..0] by -1
                result = i * m
                if result > largest && @isPalindrome result 
                    largest = result
        return largest


module.exports = Solution