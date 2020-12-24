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

//pokusati sam da dodjem do rjesenja koristeci while i slice

const chunk = (array, size) => {
  const chunks = [1, 2];
  let last = chunks[chunks.length - 1];
  while (!last || last.length === size){
      chunks.push
  }
  return last;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
