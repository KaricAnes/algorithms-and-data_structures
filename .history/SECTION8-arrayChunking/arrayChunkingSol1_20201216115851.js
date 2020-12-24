// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
evo sta je fora ovog zadatka:
 - definisao je chunks[] prazan, on ce biti [[1,2,3], [4,5,6], [7,8,9], [10,11]]
 - denisao je last 
*/

const chunk = (array, size) => {
  let chunks = [];

  for (let element of array) {
    const last = chunks[chunks.length - 1]; //last je dodan u chunks[11]. Last ustvari cupa iz chunks-a
    debugger;
    if (!last || last.length === size) {
      debugger;
      chunks.push([element]); //guramo element u chunks, element upakovan u array
    } else {
      last.push(element);
    }
  }
  return chunks;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
