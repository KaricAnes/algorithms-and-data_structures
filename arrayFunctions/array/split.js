//split pravi array od string-a
//("") => svako slovo ce biti zaseban array
//(" ") => svaka rijec ce biti zaseban array

//suprotno splitu je join()

let str = "anes";
let arrOfStr = str.split("");
console.log(arrOfStr); //["a", "n", "e", "s"]
//("") => svako slovo ce biti zaseban array

let str2 = "Hello World!";
let arrOfStr1 = str2.split(" ");
console.log(arrOfStr1); //["Hello", "World!"]
//(" ") => svaka rijec ce biti zaseban array
