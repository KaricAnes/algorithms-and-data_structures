// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//easy to debug and check what is going on

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  debugger;
  while (index < array.length) {
    debugger;
    chunked.push(array.slice(index, index + size)); //slice objasnjen u arrayFunctions //(0,3) (3,6)
    debugger;
    index += size; //index je 0, pa 3 pa 6 itd..
    debugger;
  }
  debugger;
  return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
