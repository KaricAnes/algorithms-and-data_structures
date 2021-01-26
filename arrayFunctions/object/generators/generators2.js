function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
const generator = list();

/*
console.log(generator.next()); //{value: 1, done: false}
console.log(generator.next()); //{value: 2, done: false}
console.log(generator.next()); //{value: 3, done: false
console.log(generator.next()); //{value: 4, done: false}
console.log(generator.next()); //{value: 5, done: false}
console.log(generator.next()); //{value: undefined, done: true}
*/
const numbers = [];
for (let value of generator) {
  debugger;
  //za svaki value koji bude spit from generator, zelimo ga pusati u numbers
  numbers.push(value);
}
console.log(numbers); //[1, 2, 3, 4, 5]
