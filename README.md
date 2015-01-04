mergesort
================

[![Build Status](https://travis-ci.org/stoeffel/mergesort.svg)](https://travis-ci.org/stoeffel/mergesort) [![npm version](https://badge.fury.io/js/divide-et-impera.svg)](http://badge.fury.io/js/divide-et-impera)
> [Mergesort](http://en.wikipedia.org/wiki/Merge_sort) with complexity O(n log n).

Installation
------------

`npm install  divide-et-impera`

Usage
-----

```js
var mergesort = require('divide-et-impera');

// Sort an array
mergesort([3, 1, 2, 4, 2]); // => [1, 2, 2, 3, 4]

var unsorted = [3, -2, 5];
var sorted = mergesort(unsorted);
// unsorted => [3, -2, 5]
// sorted => [-2, 3, 5]

// Use a custom comparator
function desc(a, b) {
  return b - a;
}
mergesort([3, 1, 2, 4, 2], desc); // => [4, 3, 2, 2, 1]
```
