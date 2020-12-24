// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  let chunks = [];
  let subChunk = [];
  for (let i = 0; i < array.length; i++) {
    if (subChunk.length < size) {
      subChunk.push(array[array.length + i + 1]);
    } else if (subChunk.length === size) {
      chunks.push(subChunk);
    }
  }
  return chunks;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
