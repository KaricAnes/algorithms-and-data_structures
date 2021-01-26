//generators have * that needs to be function* or *numbers -> desno od funkcije, ili lijevo od numbers
function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();

console.log(generator); //{}
console.log(generator.next()); //{value: 2, done: false}

/*
Evo sta generator radi:
kada definisemo generator, npr. numbers.next
generator ce se executati dok ne pronadje yield statement
kada dodje do yiled-a, nasa funkcija se pauzira 
*/

//ako sada ponovo pozovemo generator
//console.log(generator.next()); //{value: NaN, done: true}

console.log(generator.next(10)); //{value: 30, done: true}
/*
prvi put kada smo gore pozvali generator.next() => isao je do yield-a, i vratio nam ono sto je yielded => u nasem slucaju je to bio result
kada smo drugi put pozvali generator.next(10) i proslijedili mu value, vratio nam je 20+10 = 30 
*/
