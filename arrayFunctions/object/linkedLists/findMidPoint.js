// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: {
            value: 1,
            next: null,
          },
        },
      },
    },
  },
};

function midpoint(list) {
  let slow = list.head; //fast preskace dva           ==> slow = list.getFirst() koja se nalazi u linkedList.js
  let fast = list.head; //slow ide jedan po jedan
  //i stalno se pitamo da li fast ima definisana dva sljedeca noda: not null
  //ako nema, slow je na pravom mjestu i samo ga vratimo
  //ovo radi i za parni i za neparni broj nodovas
  debugger;
  while (fast) {
    if (!fast.next || !fast.next.next) {
      //!fast.next mi treba za meparne brojeve
      //!fast.next.next mi treba za parne brojeve

      debugger;
      return slow;
    }
    slow = slow.next;
    fast = fast.next.next;
    debugger;
  }
}

console.log(midpoint(list));
