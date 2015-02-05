class Solution

  constructor: (largeNumber) ->
    @number = largeNumber
    @containers = []

  getAdjacent: (count) ->
    for stringNum, i in @number
      hasMore = @number[i+count-1]?
      if hasMore
        container = new PrimesContainer()
        container.add(stringNum)
        end = count - 1
        for m in [1..end] by 1
           children = @number[i + m]
           container.add children
        @containers.push container
    this

  highestProduct: () ->
    highest = 0
    for container in @containers
      product = container.product()
      if product > highest then highest = product
    highest

  highestSequence: () ->
    highest = 0
    sequence = []
    for container in @containers
      product = container.product()
      if product > highest
        highest = product
        sequence = container
    sequence.contents

class PrimesContainer

  constructor: () ->
    @contents = []

  add: (value) ->
    @contents.push parseInt(value)

  product: () ->
    prod = @contents[0]
    for singleNum in [1..@contents.length - 1]
      num = @contents[singleNum]
      prod = num * prod
    prod

module.exports = Solution
