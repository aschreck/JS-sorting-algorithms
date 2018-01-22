var mergeSort = function(array) {
  if (array.length === 1 ) {
    return array;
  }

  // split the input array into two pieces at the middle
  const middle = Math.floor(array.length / 2)
  const left   = array.slice(0, middle)
  const right  = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right));

 };

 function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while(indexLeft < left.length && indexRight < right.length){
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
 };

 module.exports = {mergeSort}