var quickSort = function (array, left, right) {
  var length = array.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}


var partition = function (array, pivot, left, right) {
  var pivotValue = array[pivot],
      partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

var swap = function (array, indexOne, indexTwo) {
  var number = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = number;
}


module.exports = { quickSort }