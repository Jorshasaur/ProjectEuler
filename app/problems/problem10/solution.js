var Solution, Solution3;

Solution3 = require("../problem3/solution.coffee");

Solution = (function() {
  function Solution() {
    this.solution3 = new Solution3();
  }

  Solution.prototype.findPrimesLessThan = function(number) {
    var primes;
    primes = this.solution3.getPrimeNumberRange(1, number - 1);
    return primes;
  };

  Solution.prototype.findPrimesSum = function(primes) {
    var prime, sum, _i, _len;
    sum = 0;
    for (_i = 0, _len = primes.length; _i < _len; _i++) {
      prime = primes[_i];
      sum += prime;
    }
    return sum;
  };

  return Solution;

})();

module.exports = Solution;
