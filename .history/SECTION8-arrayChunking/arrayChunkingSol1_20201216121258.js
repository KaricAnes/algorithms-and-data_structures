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
 - definisao je last: on je inicijalno prazan jer kupi zadnji element iz inicijalno praznog chunks-a
 - if (!last) --> last je undefined i upadamo u ovaj if blok gdje dodajemo elment u novi subarray u chunks
 - chunks.push([element]); --> sa ovim smo dodali novi subArray u chunks 
 - const last = chunks[chunks.length - 1]; ---> ova linija koda uzme taj subArray i dodijeli ga lastu
*/

const chunk = (array, size) => {
  let chunks = [];

  for (let element of array) {
    const last = chunks[chunks.length - 1]; //Last ustvari cupa iz chunks-a zadnji element
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
