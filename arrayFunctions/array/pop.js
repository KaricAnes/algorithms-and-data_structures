//The pop() method removes the last element of an array, and returns that element.
//Note: This method changes the length of an array.
//Tip: To remove the first element of an array, use the shift() method.

let str = [1, 2, 3, 4];
str.pop(1);
console.log(str); //(3) [1, 2, 3]

let str2 = [5, 4, 3, 2, 7, 8];
str2.pop(2);
console.log(str2); //pop.js:7 (5) [5, 4, 3, 2, 7] //i dalje samo otkine zadnji element
