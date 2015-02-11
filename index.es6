'use strict';


let comparator = (a, b) => a - b;
let slice = Array.prototype.slice;
let left = (array) => slice.call(array, 0, array.length / 2);
let right = (array) => slice.call(array, array.length / 2);

function merge(leftList, rightList, cmp) {
  
  let sorted = [];

  while(leftList.length > 0 && rightList.length > 0) {
    if (cmp(leftList[0], rightList[0]) <= 0) {
      sorted.push(leftList.shift());
    } else {
      sorted.push(rightList.shift());
    }

  }
  
  return sorted.concat(leftList).concat(rightList);
}

export default function mergesort(array, cmp) {

  let newArray = slice.call(array);
  let leftList, rightList;

  cmp = cmp || comparator;

  if (newArray.length <= 1) {
    return newArray;
  }

  leftList  = mergesort(left(newArray), cmp);
  rightList = mergesort(right(newArray), cmp);

  return merge(leftList, rightList, cmp);
}
