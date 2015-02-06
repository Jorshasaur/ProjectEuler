class Solution

  findTriplets: (generations, start = 1) ->
    @triplets = []
    for first in [start..generations] by 1
      for second in [first+1..generations] by 1
        for third in [second+1..generations] by 1
          isTriplet = @testTriplet first, second, third
          if isTriplet then @triplets.push [first, second, third]

  testTriplet: (first, second, third) ->
    if Math.pow(first, 2) + Math.pow(second, 2) == Math.pow(third, 2) then return true
    false

  findTripletWithSum: (sum, generations, start = 1) ->
    @findTriplets generations, start
    for triplet in @triplets
      tripletSum = triplet[0] + triplet[1] + triplet[2]
      if tripletSum == sum then return triplet
    return [0,0,0]

  # Kinda pointless, but needed to answer the problem's final question
  getTripletProduct: (triplet) ->
    return triplet[0] * triplet[1] * triplet[2]

module.exports = Solution
