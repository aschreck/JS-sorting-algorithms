var assert = require('chai').assert;
var quickSorting = require('./quickSort');

describe("Given an array of unsorted numbers", function(){
  it("sorts them", function(){
    const unsorted = [100,4, 5, 3, 1, 81, 41]
    const sorted = [1, 3, 4, 5, 41, 81, 100]
    assert.deepEqual(sorted, quickSorting.quickSort(unsorted, 0, unsorted.length -1));
  });
});