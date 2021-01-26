/*
sa 'of' mozemo loopati kroz
 1) string
 2) array
*/

let string = "Hello World";
//loopanje kroz string sa of
for (let char of string) {
  if (char === "H") {
    console.log(string); //Hello World
  }
}

let arr = [1, 2, 3, 4, 5];
//loopanje kroz array sa of
for (let num of arr) {
  if (num === 1) {
    console.log(arr); //[1, 2, 3, 4, 5]
  }
}
