//includes je koristan za stringove

let string = "Hello World";
console.log(string.includes("ello")); //true
console.log(string.includes("ellod")); //false => tacno mora biti u komadu rijec da bi includes vratio true

//includes se moze koristiti i za arraye

let arr = ["a", "b", "c", "d"];
console.log(arr.includes("a")); //true

/*
//ispod vidimo includes u kombinaciji sa while - om
//FileWaveCodility - task 1

while (posUniqueNumber <= 0 || sortedArr.includes(posUniqueNumber)) {
    debugger;
    posUniqueNumber++;
  }
*/
