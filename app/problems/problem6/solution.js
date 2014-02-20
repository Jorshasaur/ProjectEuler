var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.sumOfSquares = function(start, end) {
    var number, sum, _i;
    sum = 0;
    for (number = _i = start; _i <= end; number = _i += 1) {
      sum += Math.pow(number, 2);
    }
    return sum;
  };

  Solution.prototype.squareOfSum = function(start, end) {
    var number, sum, _i;
    sum = 0;
    for (number = _i = start; _i <= end; number = _i += 1) {
      sum += number;
    }
    return Math.pow(sum, 2);
  };

  Solution.prototype.differenceSquaredAndSummed = function(start, end) {
    var squares, sums;
    sums = this.sumOfSquares(start, end);
    squares = this.squareOfSum(start, end);
    return squares - sums;
  };

  return Solution;

})();

module.exports = Solution;
