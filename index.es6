'use strict';


const comparator = (a, b) => a - b;
const slice = Array.prototype.slice;
const left = (array) => slice.call(array, 0, array.length / 2);
const right = (array) => slice.call(array, array.length / 2);

function merge(leftList, rightList, cmp) {

  let sorted = [];

  while(leftList.length > 0 && rightList.length > 0) {
    if (cmp(leftList[0], rightList[0]) <= 0) {
      sorted.push(leftList.shift());
    } else {
      sorted.push(rightList.shift());
    }

  }
  return sorted.concat(leftList, rightList);
}

export default function mergesort(array, cmp=comparator) {

  let newArray = slice.call(array);
  let leftList, rightList;

  if (newArray.length <= 1) {
    return newArray;
  }

  leftList  = mergesort(left(newArray), cmp);
  rightList = mergesort(right(newArray), cmp);

  return merge(leftList, rightList, cmp);
}
