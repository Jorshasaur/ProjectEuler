#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.

class Solution

    findMultiples: (multiples, start, end)->
        @result = []
        count = start
        while count < end
            for number in multiples
                if count % number is 0 
                    @result.push count
                    break
            count++
        return @

    sum: ->
        value = 0
        for number in @result
            value+= number
        return value


module.exports = Solution