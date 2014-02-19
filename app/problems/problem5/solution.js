var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.findSmallestDivisible = function(start, end) {
    var counting, smallest;
    counting = true;
    smallest = 1;
    while (counting === true) {
      if (this.numberIsDivisibleByRange(start, end, smallest)) {
        counting = false;
      } else {
        smallest++;
      }
    }
    return smallest;
  };

  Solution.prototype.findSmallestEvenDivisible = function(start, end) {
    var counting, smallest;
    counting = true;
    smallest = 1;
    while (counting === true) {
      if (smallest % 2 === 0) {
        if (this.numberIsDivisibleByRange(start, end, smallest)) {
          counting = false;
        } else {
          smallest++;
        }
      } else {
        smallest++;
      }
    }
    return smallest;
  };

  Solution.prototype.numberIsDivisibleByRange = function(start, end, number) {
    var count, _i;
    for (count = _i = start; _i <= end; count = _i += 1) {
      if (number % count > 0) {
        return false;
      }
    }
    return true;
  };

  return Solution;

})();

module.exports = Solution;
