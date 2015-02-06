var Solution;

Solution = (function() {
  function Solution() {}

  Solution.prototype.findTriplets = function(generations, start) {
    var first, isTriplet, second, third, _i, _results;
    if (start == null) {
      start = 1;
    }
    this.triplets = [];
    _results = [];
    for (first = _i = start; _i <= generations; first = _i += 1) {
      _results.push((function() {
        var _j, _ref, _results1;
        _results1 = [];
        for (second = _j = _ref = first + 1; _j <= generations; second = _j += 1) {
          _results1.push((function() {
            var _k, _ref1, _results2;
            _results2 = [];
            for (third = _k = _ref1 = second + 1; _k <= generations; third = _k += 1) {
              isTriplet = this.testTriplet(first, second, third);
              if (isTriplet) {
                _results2.push(this.triplets.push([first, second, third]));
              } else {
                _results2.push(void 0);
              }
            }
            return _results2;
          }).call(this));
        }
        return _results1;
      }).call(this));
    }
    return _results;
  };

  Solution.prototype.testTriplet = function(first, second, third) {
    if (Math.pow(first, 2) + Math.pow(second, 2) === Math.pow(third, 2)) {
      return true;
    }
    return false;
  };

  Solution.prototype.findTripletWithSum = function(sum, generations, start) {
    var triplet, tripletSum, _i, _len, _ref;
    if (start == null) {
      start = 1;
    }
    this.findTriplets(generations, start);
    _ref = this.triplets;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      triplet = _ref[_i];
      tripletSum = triplet[0] + triplet[1] + triplet[2];
      if (tripletSum === sum) {
        return triplet;
      }
    }
    return [0, 0, 0];
  };

  Solution.prototype.getTripletProduct = function(triplet) {
    return triplet[0] * triplet[1] * triplet[2];
  };

  return Solution;

})();

module.exports = Solution;
