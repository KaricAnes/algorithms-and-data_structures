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
 - const last = chunks[chunks.length - 1]; ---> ova linija koda uzme taj subArray i dodijeli ga lastu u slj iteraciji
 - last postane array: [1]
 - posto sada ovo ne vrijedi: (!last || last.length === size)
 idemo u else block: last.push(element);
 i sve tako dok lalast.length === size) ne bude zadovoljeno
 onda ponovo u chunks guramo last
 onda se last ponisti i bude undefined
*/

const chunk = (array, size) => {
  let chunks = [];
  debugger;
  for (let element of array) {
    debugger;
    const last = chunks[chunks.length - 1]; //Last ustvari cupa iz chunks-a zadnji element i smjesta ga u array [11]
    debugger;
    if (!last || last.length === size) {
      //!last ce biti true samo prvi put kada loopamo kroz array, jer je tada chunks[chunks.length - 1] undefined
      debugger;
      chunks.push([element]); //guramo element u chunks, element upakovan u array
    } else {
      debugger;
      last.push(element);
      debugger;
    }
  }
  debugger;
  return chunks;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
