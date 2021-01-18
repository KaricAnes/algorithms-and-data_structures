// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
    //unshift Adds a element to the beginning of the array. [2,1] => unshift() used in queue
    //push adds element to the end of array [1,2]
  }
  pop() {
    //pop Deletes the last element of the arr
    return this.data.pop();
  }
  peek() {
    //with peek we just want to get/access last element from stack, without removing it
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
