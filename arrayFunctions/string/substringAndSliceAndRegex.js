//substring mozemo koristiti da iscupamo npr. prvi dio rijeci, od 0 do i
//preostali dio rijeci mozemo iscupati preko slice-a

//substring
let string = "#....";
let i = 2;
let firstPartOfWord = string.substring(0, i);
console.log(firstPartOfWord); //#.

//sada mozemo prvi dio rijeci da promjenimo preko regexa
//u stepsSolAnes.js sam tako radio
//tamo je bila specificna situacija jer sam string "#...." trebao mijenjati u svakom krugu postepeno

//regex replace
firstPartOfWord = firstPartOfWord.replace(/./g, "#");
console.log(firstPartOfWord); //##  dakle tacka je zamijenjena sa hashom

//slice
let secondPartOfWord = string.slice(i);
console.log(secondPartOfWord); //...
