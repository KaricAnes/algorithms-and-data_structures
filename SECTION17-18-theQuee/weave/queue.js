// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

/*
unshift Adds a element to the beginning of the array.
pop Deletes the last element of the arr
*/

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
    // Peek should return the last element (the next
    // one to be returned) from the queue *without*
    // removing it.
  }
}

module.exports = Queue;
