const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(data, next = null) {
    //next se ne mora proslijediti, da ne bi bilo undefined stavili smo null
    //ako next bude proslijedjeno ipak, onda ce overridati ovu null vrijednost
    //constructor ce biti executan svaki put kada napravimo new Node instancu
    this.value = data;
    this.next = next;
  }
}

const size = () => {
  let count = 0;
  let node = list.head;
  while (node.next) {
    count++;
    node = node.next; //node sto je bio, i jos nize
  }
  return count;
};

const insertAt = (data, integer) => {
  if (!list.head) {
    //case: ako je lista potpuno prazna, dodat cemo na prvo mjesto
    debugger;
    list.head = data;
    return list;
  }

  let node = list.head;
  let counter = 0;
  let sizeOfLinkedList = size();
  debugger;

  while (node) {
    if (integer > sizeOfLinkedList && counter === sizeOfLinkedList) {
      //ako smo unijeli veci broj od dubine objekta
      debugger;
      node.next = data;
      return list;
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

let newNode = new Node("Anes");

console.log(insertAt(newNode, 0));
