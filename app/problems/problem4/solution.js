var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.isPalindrome = function(number) {
    var numberString, reversed;
    numberString = number.toString();
    reversed = this.reverse(numberString);
    return numberString === reversed;
  };

  Solution.prototype.reverse = function(string) {
    return string.split("").reverse().join("");
  };

  Solution.prototype.findLargestPalindrome = function(factor) {
    var i, largest, m, result, _i, _j;
    largest = 0;
    result = 0;
    for (i = _i = factor; _i >= 0; i = _i += -1) {
      for (m = _j = factor; _j >= 0; m = _j += -1) {
        result = i * m;
        if (result > largest && this.isPalindrome(result)) {
          largest = result;
        }
      }
    }
    return largest;
  };

  return Solution;

})();

module.exports = Solution;
