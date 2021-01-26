const arr1 = [1, 2, 3, 4, 5];

//slice je immutable friendly, ne dira originalni array
//slice(0, 3) pravi novi array i vraca nam nula, jedan i dva index bez trice dakle

//bio nam je koristan u arrayChunkingSol2.js

const arr2 = arr1.slice(0, 3);
console.log(arr1); //[1, 2, 3, 4, 5];
console.log(arr2); //[1, 2, 3]

/*
word.slice(1);
slice mozemo okinuti i na string
ona nam vrati novi skraceni string
*/

let word = "Anes";
let word2 = word.slice(1);
console.log(word); //Anes
console.log(word2); //nes
