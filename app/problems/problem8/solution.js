var PrimesContainer, Solution;

Solution = (function() {
  function Solution(largeNumber) {
    this.number = largeNumber;
    this.containers = [];
  }

  Solution.prototype.getAdjacent = function(count) {
    var children, container, end, hasMore, i, m, stringNum, _i, _j, _len, _ref;
    _ref = this.number;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      stringNum = _ref[i];
      hasMore = this.number[i + count - 1] != null;
      if (hasMore) {
        container = new PrimesContainer();
        container.add(stringNum);
        end = count - 1;
        for (m = _j = 1; _j <= end; m = _j += 1) {
          children = this.number[i + m];
          container.add(children);
        }
        this.containers.push(container);
      }
    }
    return this;
  };

  Solution.prototype.highestProduct = function() {
    var container, highest, product, _i, _len, _ref;
    highest = 0;
    _ref = this.containers;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      container = _ref[_i];
      product = container.product();
      if (product > highest) {
        highest = product;
      }
    }
    return highest;
  };

  Solution.prototype.highestSequence = function() {
    var container, highest, product, sequence, _i, _len, _ref;
    highest = 0;
    sequence = [];
    _ref = this.containers;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      container = _ref[_i];
      product = container.product();
      if (product > highest) {
        highest = product;
        sequence = container;
      }
    }
    return sequence.contents;
  };

  return Solution;

})();

PrimesContainer = (function() {
  function PrimesContainer() {
    this.contents = [];
  }

  PrimesContainer.prototype.add = function(value) {
    return this.contents.push(parseInt(value));
  };

  PrimesContainer.prototype.product = function() {
    var num, prod, singleNum, _i, _ref;
    prod = this.contents[0];
    for (singleNum = _i = 1, _ref = this.contents.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; singleNum = 1 <= _ref ? ++_i : --_i) {
      num = this.contents[singleNum];
      prod = num * prod;
    }
    return prod;
  };

  return PrimesContainer;

})();

module.exports = Solution;
