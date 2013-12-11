var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.buildFibonacci = function(end) {
    var count, firstNumber, secondNumber, value;
    this.result = [1, 2];
    count = 2;
    value = 0;
    while (value < end) {
      firstNumber = this.result[count - 2];
      secondNumber = this.result[count - 1];
      value = firstNumber + secondNumber;
      this.result.push(value);
      count++;
    }
    return this;
  };

  Solution.prototype.evens = function() {
    var newResult, term, _i, _len, _ref;
    newResult = [];
    _ref = this.result;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      term = _ref[_i];
      if (term % 2 === 0) {
        newResult.push(term);
      }
    }
    this.result = newResult;
    return this;
  };

  Solution.prototype.sum = function() {
    var number, total, _i, _len, _ref;
    total = 0;
    _ref = this.result;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      number = _ref[_i];
      total += number;
    }
    this.result = total;
    return this;
  };

  return Solution;

})();

module.exports = Solution;
