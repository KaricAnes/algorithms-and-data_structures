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
  const chunked_arr = [];
  let copied = [...array]; // ES6 destructuring, splice mijenja original
  const numOfChild = Math.ceil(copied.length / size); // vraca 4, ako je 3.5 on zaokruzi na 4
  for (let i = 0; i < numOfChild; i++) {
    debugger;
    chunked_arr.push(copied.splice(0, size)); //iscupa prva 3, pa ih ukloni. Pa sljdedeca 2 itd..
    debugger; 
  }
  return chunked_arr;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
