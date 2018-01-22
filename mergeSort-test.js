var assert = require('chai').assert;
var mergeSorting = require('./mergeSort');

describe("Merge sort can sort an array of numbers", function(){
  it("sorts", function(){
    const unsorted = [100,4, 5, 3, 1, 81, 41]
    const sorted = [1, 3, 4, 5, 41, 81, 100]
    assert.deepEqual(sorted, mergeSorting.mergeSort(unsorted));
  });

});