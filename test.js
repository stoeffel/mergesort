var mergesort = require('./index.js'),
  expect = require('expect.js');

function desc(a, b) {
  return b - a;
}

describe('mergesort', function() {

  it('should sort an unsorted array', function() {
    expect(mergesort([])).to.eql([]);
    expect(mergesort([1])).to.eql([1]);
    expect(mergesort([3, 1])).to.eql([1, 3]);
    expect(mergesort([3, 1, 2])).to.eql([1, 2, 3]);
    expect(mergesort([3, 1, 2, 4])).to.eql([1, 2, 3, 4]);
    expect(mergesort([3, 1, 2, 4, 2])).to.eql([1, 2, 2, 3, 4]);
    expect(mergesort([-3, 1, -2, 4, 2])).to.eql([-3, -2, 1, 2, 4]);
  });

  it('should sort using a custom comparator', function() {
    expect(mergesort([], desc)).to.eql([]);
    expect(mergesort([1], desc)).to.eql([1]);
    expect(mergesort([3, 1], desc)).to.eql([3, 1]);
    expect(mergesort([3, 1, 2], desc)).to.eql([3, 2, 1]);
    expect(mergesort([3, 1, 2, 4], desc)).to.eql([4, 3, 2, 1]);
    expect(mergesort([3, 1, 2, 4, 2], desc)).to.eql([4, 3, 2, 2, 1]);
    expect(mergesort([-3, 1, -2, 4, 2], desc)).to.eql([4, 2, 1, -2, -3]);
  });

  it('should not change the unsorted array', function() {
    var unsorted = [-3, 1, -2, 4, 2];
    expect(mergesort(unsorted, desc)).to.eql([4, 2, 1, -2, -3]);
    expect(unsorted).to.eql([-3, 1, -2, 4, 2]);
  });
});
