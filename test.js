"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var mergesort = _interopRequire(require("./index.js"));

var expect = _interopRequire(require("expect.js"));

function randomArray(length) {

  var result = [];

  for (var i = length; i > 0; i -= 1) {
    result.push(parseFloat((Math.random() * 100).toFixed(2)));
  }
  return result;
}

describe("mergesort", function () {
  var desc = function (a, b) {
    return b - a;
  };

  it("should sort an unsorted array", function () {
    expect(mergesort([])).to.eql([]);
    expect(mergesort([1])).to.eql([1]);
    expect(mergesort([3, 1])).to.eql([1, 3]);
    expect(mergesort([3, 1, 2])).to.eql([1, 2, 3]);
    expect(mergesort([3, 1, 2, 4])).to.eql([1, 2, 3, 4]);
    expect(mergesort([3, 6, 2, 1])).to.eql([1, 2, 3, 6]);
    expect(mergesort([-3, -6, 2, 1])).to.eql([-6, -3, 1, 2]);
    expect(mergesort([3, 1, 2, 4, 2])).to.eql([1, 2, 2, 3, 4]);
    expect(mergesort([-3, 1, -2, 4, 2])).to.eql([-3, -2, 1, 2, 4]);
  });

  it("should sort using a custom comparator", function () {
    expect(mergesort([], desc)).to.eql([]);
    expect(mergesort([1], desc)).to.eql([1]);
    expect(mergesort([3, 1], desc)).to.eql([3, 1]);
    expect(mergesort([3, 1, 2], desc)).to.eql([3, 2, 1]);
    expect(mergesort([3, 1, 2, 4], desc)).to.eql([4, 3, 2, 1]);
    expect(mergesort([3, 1, 2, 4, 2], desc)).to.eql([4, 3, 2, 2, 1]);
    expect(mergesort([-3, 1, -2, 4, 2], desc)).to.eql([4, 2, 1, -2, -3]);
  });

  it("should not change the unsorted array", function () {
    var unsorted = [-3, 1, -2, 4, 2];
    expect(mergesort(unsorted, desc)).to.eql([4, 2, 1, -2, -3]);
    expect(unsorted).to.eql([-3, 1, -2, 4, 2]);
  });

  it("should work with random array", function () {

    var array = randomArray(100);
    var sorted = mergesort(array);

    for (var i = 0; i < sorted.length - 1; i += 1) {
      expect(sorted[i] <= sorted[i + 1]).to.be.ok();
    }
  });
});