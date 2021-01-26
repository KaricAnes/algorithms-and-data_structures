// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/*
Creates a class instance to represent a node. The node should have two properties, 'data' and 'next'.
 Accept both of these as arguments to the 'Node' constructor, then assign them to the
  instance as properties 'data' and 'next'. If 'next' is not provided to the constructor,
   then default its value to be 'null'.
*/

class Node {
  constructor(data, next = null) {
    //next se ne mora proslijediti, da ne bi bilo undefined stavili smo null
    //ako next bude proslijedjeno ipak, onda ce overridati ovu null vrijednost
    //constructor ce biti executan svaki put kada napravimo new Node instancu
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //linked lista ce imati dosta metoda koje ce nam olaksati rad sa njima kao sto su:
  //insert new node, remove a node, search for a node
  //LinkedList ce imati samo jedan property, a to je head
  //this property will have a reference to the first node of the limekd list
  //linked list nema pojma koliko nodova ukupno ima
  //ili koji podaci se nalaze tamo
  //linked list ima pojma samo o head nod-u i samo na osnovu njega moze doci do detaljnih podataka
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data); //napravili smo novi node
    newNode.next = this.head; //u novi node obj smo ubacili trenutni head koji je ili nula, ili neki node;
    this.head = newNode; //sada head postaje newNode{}... nismo nista izbrisali dakle, samo smo prepakovali
    //kad god referiramo na na head gore, trebamo pisati this.head
    //skracena verzija: this.head = new Node(data, this.head)
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next; //node sto je nekad bio, i joz nize. ArrayFunctions/object/checkDepthOfAnObj.js
    }
    return count;
  }

  getFirst() {
    return this.head; //ovaj this.head ce uvijek pointati na prvi node u linkedListi
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let lastNode = null;
    let node = this.head;
    while (node) {
      if (node.next === null) {
        //if(!node.next)
        //return node  => onda nam ne treba lastNode varijabla
        lastNode = node.value;
        node = node.next;
      }
    }
    return lastNode;
  }
  clear() {
    return (this.head = null);
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    let newHead = { ...this.head.next };
    this.head = newHead;
    return this.head;
    //this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      //mogao sam i size pozvati koju sam prethodno definisao
      this.head = null;
    }
    let node = this.head;
    let nodePlusOneStepDown = node.next;
    while (node) {
      if (!nodePlusOneStepDown.next) {
        node.next = null;
      }
      node = node.next;
    }
  }

  insertLast(data) {
    let last = this.getLast();

    if (last) {
      //Therer are some nodes
      last.next = new Node(data);
    } else {
      //The chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return;
    }
    let sizeOfObj = this.size() - 1;
    if (sizeOfObj < index) {
      return "Nema toliko nodova";
    }
    let counter = 0;
    let node = this.head;
    while (counter <= index) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    //return null => ako nije nasao nista u while-u, vracamo null
    //size je inefficient jer onda imamo quadratic runtime
  }

  removeAt = (integer) => {
    if (!this.head) {
      return;
    }

    if (integer === 0) {
      //uklanjanje prvog noda: if (counter === integer - 1) { => ne bi se nikada susreli -1 i counter
      this.head = this.head.next;
      return list;
    }
    let counter = 0;
    let node = this.head;

    while (node.next) {
      //uklanjanje npr. 2. ili zadnjeg noda
      if (counter === integer - 1) {
        node.next = node.next.next;
        return list;
      }
      node = node.next;
      counter++;
    }
    return null; //ako upisemo npr. 55, dobit cemo null
  };

  insertAt = (data, integer) => {
    if (!this.head) {
      //case: ako je lista potpuno prazna, dodat cemo na prvo mjesto
      debugger;
      this.head = data;
      return this.head;
    }

    let node = list.head;
    let counter = 0;
    let sizeOfLinkedList = this.size();
    debugger;

    while (node) {
      if (integer > sizeOfLinkedList && counter === sizeOfLinkedList) {
        //ako smo unijeli veci broj od dubine objekta
        debugger;
        node.next = data;
        return this.head;
      }
      if (counter === integer - 1 || integer === 0) {
        //
        //counter === integer - 1 => node prije onog u koji cemo inserati nesto
        //integer === 0 sam morao stavitim jer counet i -1 se nikada ne bi sudarili
        debugger;
        let oldMovedNode;
        if (integer === 0) {
          //insertanje na prvo mjesto
          oldMovedNode = { value: node.value, next: { ...node.next } };
          debugger;
          list.head = data;
          list.head.next = oldMovedNode;
          return list;
        }
        //slucaj za insertanje u nekada posljednji node
        //insertanje na bilo koje mjesto osim prvog

        oldMovedNode = { ...node.next };
        node.next = data;
        node.next.next = oldMovedNode;
        return list;
      }

      node = node.next;
      counter++;
    }
    debugger;
    return null;
  };
}

//primjer primjene
const list = new LinkedList();
list.head = new Node(10);

module.exports = { Node, LinkedList };
