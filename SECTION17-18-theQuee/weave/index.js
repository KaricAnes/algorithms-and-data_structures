// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

import Queue from "./queue";

function weave(sourceOne, sourceTwo) {
  //ovaj treba da primi dva que-a i da od njih napravi novi treci que
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    //dok jedan od njih nije undefined
    if (sourceOne.peek()) {
      q.add(sourceOne.remove()); //rezultat remove-a ce biti dodan u q
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove()); ////rezultat remove-a() ce biti dodan u q
    }
  }
  return q;
}

export default weave;
