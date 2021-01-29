const arr = [1, 2, 3];
console.log(arr.length); //3

const emptyArr = [];
console.log(emptyArr.length); //0

while (emptyArr.length) {
  debugger; //nece ovdje nikada upasti, znaci da nulu 0 ne racuna kao true za length
  console.log("Anes");
}

while (!emptyArr.length) {
  debugger; // ovdje ce upasti, znaci da nulu 0 racuna kao falsy value => infinite loop
  console.log("Anes");
}
