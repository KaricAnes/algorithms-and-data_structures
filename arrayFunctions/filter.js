/*
filter je immutable frinedly array function

The filter() Array method creates a new array with elements that fall under
 a given criteria from an existing array:
*/

const arr = ["a", "b", ".", "?"];

const filteredArr = arr.filter(
  //i filtriria taj array tako da izbaci iz njega spaces and punctations
  (e) => e !== " " && e !== "!" && e !== "." && e !== "?"
);

console.log(arr); //["a", "b", ".", "?"]
console.log(filteredArr); //["a", "b"]
