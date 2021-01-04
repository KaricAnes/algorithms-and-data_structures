/*
When to use .every()?
.every() when you want derive a single boolean value from multiple elements in an array.

Conditions:
You have an array.
You want to test each element in the array.
You want to know whether all of the elements pass that test. true / false 
*/

const simpleArr = [1, 2, 3, 4, 5, -6];
const simpleArr2 = [1, 2, 3, 4, 5, 6];

console.log(simpleArr.every((number) => number > 0)); //returns false because -6 is negative
console.log(simpleArr2.every((number) => number > 0)); //returns true because all elements are positive
