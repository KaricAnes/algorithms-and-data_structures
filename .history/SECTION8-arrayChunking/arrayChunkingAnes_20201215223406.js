// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let noviArr = [];
  let numOfSubbarays = parseInt(array.length / size);

  if (array.length % size !== 0) {
    numOfSubbarays += 1;
  }

  for (let i = 0; i < numOfSubbarays * size; i += size) {
    noviArr.push(array.slice(i, i + size));
  }
  return noviArr;
}
console.log(chunk([1, 2, 3,4,5,6,7,8], 2));
