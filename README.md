mergesort
================

[![Build Status](https://travis-ci.org/stoeffel/mergesort.svg)](https://travis-ci.org/stoeffel/mergesort) [![npm version](https://badge.fury.io/js/divide-et-impera.svg)](http://badge.fury.io/js/divide-et-impera)
> [Mergesort](http://en.wikipedia.org/wiki/Merge_sort) with complexity O(n log n).It uses divide and conquer paradigm. it is not an inplace algorithm means it requires a O(1) extra memory.

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

// Use with compare.js
var desc = require('compare.js/desc');
var date = require('compare.js/date');
var dates = ['01.01.2014', '30.03.2015', '18.01.2015'];

mergesort(dates, desc(date('DD.MM.YYYY'))); // => ['30.03.2015', '18.01.2015', '01.01.2014']
```
