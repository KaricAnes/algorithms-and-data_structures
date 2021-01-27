// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

/*
circular linkedList je ona lista u kojoj zadnji next nije null, nego pokazuje na neki prethodni
circular linkedListe su veliki problem, svi nasi prethodni zadaci bi se pretvorili u beskonacne 
for loops kad bismo tamo ubacili circular linkedList
*/

/*
Takodjer smo mogli dodavati novi property u svaki node, npr, vidited: true
*/

function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    //sve dok su true oba uslova, vrtit ce se loop, ako lista ima null, onda ispada iz whila,
    // i dole vraca false
    if (slow === fast) {
      debugger;
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

console.log(circular(list));
