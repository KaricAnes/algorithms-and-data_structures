// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

//stack + stack = queue

/*

StackA       StackB
----          ---
  1            3       //prvo smo remove iz StackA prvi el, a to je po pravili stacka 3 => f In, L out
  2            2       //onda smo taj element dodatli u StackB, i tamo je dospio na prvo mjesto
  3            1       //onda smo izbacili posljednji element iz StackB a to je 1, i tako smo dobili queue implementaciju
----
Inace radili preko implementacije Stacks, zelimo dobiti que.
To mozemo uraditi tako sto cemo, removati po pravilima stacka, jedan element iz StackA,
i addati ga u STACKB

Poslije mozemo iz StackB da removamo element, i removat cemo tacno onaj koji nam treba, z mi zelimo 
da preko 2 stacka --> implementiramo queue data structure
*/

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
      //record = this.second.pop();
      //this.first.push(record);
    }

    return record;
  }

  peek() {
    //isto ime metode kao i u stack.js
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
