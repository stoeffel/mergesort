var slice = Array.prototype.slice;

function comparator(a, b) {
  return a - b;
}

function left(array) {
  return slice.call(array, 0, array.length / 2);
}

function right(array) {
  return slice.call(array, array.length / 2);
}

function merge(leftList, rightList, cmp) {
  
  var sorted = [];
  var idx = 0;

  while(leftList.length > 0 && rightList.length > 0) {
    if (cmp(leftList[idx], rightList[idx]) <= 0) {
      sorted.push(leftList.shift());
    } else {
      sorted.push(rightList.shift());
    }
  }
  
  return sorted.concat(leftList).concat(rightList);
}

module.exports = function mergesort(array, cmp) {

  var newArray = slice.call(array);
  var leftList, rightList;

  cmp = cmp || comparator;

  if (newArray.length <= 1) {
    return newArray;
  }

  leftList  = mergesort(left(newArray), cmp);
  rightList = mergesort(right(newArray), cmp);

  return merge(leftList, rightList, cmp);
};
