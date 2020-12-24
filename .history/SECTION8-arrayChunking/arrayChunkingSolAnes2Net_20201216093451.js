


/*
function chunk(array, size) {
  const chunked_arr = [];
  let copied = [...array]; // ES6 destructuring
  const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
  for (let i = 0; i < numOfChild; i++) {
    chunked_arr.push(copied.splice(0, size)); //iscupa prva 2, pa ih ukloni. Pa sljdedeca 2 itd.. 
  }
  return chunked_arr;
}
*/