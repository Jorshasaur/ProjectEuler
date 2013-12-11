var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.findMultiples = function(multiples, start, end) {
    var count, number, _i, _len;
    this.result = [];
    count = start;
    while (count < end) {
      for (_i = 0, _len = multiples.length; _i < _len; _i++) {
        number = multiples[_i];
        if (count % number === 0) {
          this.result.push(count);
          break;
        }
      }
      count++;
    }
    return this;
  };

  Solution.prototype.sum = function() {
    var number, value, _i, _len, _ref;
    value = 0;
    _ref = this.result;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      number = _ref[_i];
      value += number;
    }
    return value;
  };

  return Solution;

})();

module.exports = Solution;
