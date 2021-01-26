//preko joina pravimo str od array elemenata
//join je kontra operacija od splita()
//mozemo spajati preko join("") => kada zelimo jednu rijec
//mozemo spajati preko join(" ") => kada zelimo svaki elment da bude zasebna rijec u stringu

let arr = ["a", "b", "c", "d"];

let str = arr.join("");
console.log(str); //abcd

let arr2 = ["hello", "world"];
let str2 = arr2.join("");
console.log(str2); //helloworld

let str3 = arr2.join(" ");
console.log(str3); //hello world
