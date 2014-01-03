var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.isPrime = function(number) {
    var end, i, start, _i;
    if (number === 1) {
      return false;
    }
    start = 2;
    end = Math.round(Math.pow(number, 0.5));
    for (i = _i = start; _i <= end; i = _i += 1) {
      if (this.isNumberDivisibleBy(number, i)) {
        return false;
      }
    }
    return true;
  };

  Solution.prototype.isNumberDivisibleBy = function(n, divisor) {
    if (n === divisor) {
      return false;
    }
    return n % divisor === 0;
  };

  Solution.prototype.getPrimeNumberRange = function(start, end) {
    var primes;
    primes = [];
    while (start <= end) {
      if (this.isPrime(start)) {
        primes.push(start);
      }
      start++;
    }
    return primes;
  };

  return Solution;

})();

module.exports = Solution;
