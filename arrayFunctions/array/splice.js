const arr = [1, 2, 3, 4, 5];

const arr2 = arr.splice(0, 2);

//splice NIJE immutable friendly, mijenja originalni array
//splice je bio koristan u: arrayChunkingSolAnes2Net.js

//jedina razlika izmedju slice i splice je sto slice ne mijenja originalni array
//a splice mijenja originalni array

console.log(arr); //[3, 4, 5] //originalni array je ostao bez prva dva clana
console.log(arr2); //[1, 2] //napravi nam novi array ukljucujuci nula i jedan indexe
