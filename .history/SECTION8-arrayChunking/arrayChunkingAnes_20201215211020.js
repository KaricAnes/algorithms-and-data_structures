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
  let newArr = array.slice(0, 2);
  let newArr2 = array.slice(2, 4);
  let newArrTogether = [newArr, newArr2];

  let noviArr = [];
  let numOfSubbarays = parseInt(array.length / size);
  let numOfAdditionalArrays = array.length % size === 0 ? 0 : 1;
  for (let i = 1; i <= numOfSubbarays; i++) {
   noviArr = array.slice(0,)
  }
  return numOfSubbarays;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
