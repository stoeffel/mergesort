"use strict";


module.exports = mergesort;
var comparator = function (a, b) {
  return a - b;
};
var slice = Array.prototype.slice;
var left = function (array) {
  return slice.call(array, 0, array.length / 2);
};
var right = function (array) {
  return slice.call(array, array.length / 2);
};

function merge(leftList, rightList, cmp) {
  var sorted = [];

  while (leftList.length > 0 && rightList.length > 0) {
    if (cmp(leftList[0], rightList[0]) <= 0) {
      sorted.push(leftList.shift());
    } else {
      sorted.push(rightList.shift());
    }
  }

  return sorted.concat(leftList).concat(rightList);
}

function mergesort(array, cmp) {
  var newArray = slice.call(array);
  var leftList = undefined,
      rightList = undefined;

  cmp = cmp || comparator;

  if (newArray.length <= 1) {
    return newArray;
  }

  leftList = mergesort(left(newArray), cmp);
  rightList = mergesort(right(newArray), cmp);

  return merge(leftList, rightList, cmp);
}