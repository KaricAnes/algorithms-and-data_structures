function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers(); //yield* znaci, hej zelim ti proslijediti novi generator
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

/*
generator izvrsava liniju po liniju koda, 
nece preci u sljedecu dok prethodnu ne izvrsi
cak mozemo i drugi generator ubaciti i on ce ga izvrsiti i poslije sam nastaviti
*/

const generator = numbers();
/*
for (let i = 0; i < 8; i++) {
  console.log(generator.next());
}

{value: 1, done: false}
{value: 2, done: false}
{value: moreNumbers, done: false}done: falsevalue: moreNumbers {<suspended>}__proto__: Object
{value: 6, done: false}
{value: 7, done: false}
*/

let values = [];
for (let value of generator) {
  values.push(value);
}
console.log(values); //[1, 2, 3, 4, 5, 6, 7]
