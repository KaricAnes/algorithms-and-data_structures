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
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10));

/*
function chunk(array, size) {
  const chunked_arr = [];
  let copied = [...array]; // ES6 destructuring
  const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
  for (let i = 0; i < numOfChild; i++) {
    chunked_arr.push(copied.splice(0, size)); //iscupa prva 2
  }
  return chunked_arr;
}
*/
