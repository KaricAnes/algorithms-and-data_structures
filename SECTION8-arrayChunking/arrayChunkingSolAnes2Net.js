// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//splice je mutable, mijenja originalni array a to nam je odgovaralo u ovom slucaju
//copied se ne zove slucajno ...copied, on je kopija originalnog arraya koji je ostao netaknut
//copied je postajao sve manji i manji za tri clana, a ta tri clana su postajala novi array koji je
//pushan u chunked_arr
//slice doesn't mutate the array on which it operates
//splice mutates the arrar on which it operates

function chunk(array, size) {
  const chunked_arr = [];
  let copied = [...array]; // ES6 destructuring, splice mijenja original
  const numOfChild = Math.ceil(copied.length / size); // vraca 4, ako je 3.5 on zaokruzi na 4
  for (let i = 0; i < numOfChild; i++) {
    debugger;
    chunked_arr.push(copied.splice(0, size)); //iscupa prva 3, pa ih ukloni. Pa sljdedeca 3 itd..
    debugger; ////copied: (4) [7, 8, 9, 10] polahko ga splice kida. Po tri mu uzima sprijeda
  }
  return chunked_arr;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
