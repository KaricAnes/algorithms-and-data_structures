/*
queue je slican arrayu ali nisu isti
u wordu imam sliku koja prezentuje pravila vezana za queue
uglavnom, slican je logici cekanja u redu za kartu
onaj ko je prvi dosao, prvi ce i doci do karte
*/

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    //whenever we create a new instance of a class
    //unutar ovog konstruktora, mi cemo kreirati novi array
    //i asiignati ga kao property u nas queue instance
    this.data = [];
  }
  add(record) {
    //ideja je da dodamo novi clan u array na pocetak, a ne na kraj
    this.data.unshift(record);
  }
  remove() {
    //uklanjamo posljednji clan iz arraya
    return this.data.pop();
  }
}
