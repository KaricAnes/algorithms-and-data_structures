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

const insertFirst = (newNode1) => {
  const newNode = newNode1; //napravili smo novi node
  newNode.next = list.head; //u novi node obj smo ubacili trenutni head koji je ili nula, ili neki node;
  list.head = newNode; //sada head postaje newNode{}... nismo nista izbrisali dakle, samo smo prepakovali
  //kad god referiramo na na head gore, trebamo pisati this.head
  //skracena verzija: this.head = new Node(data, this.head)
  return list;
};

let newNode1 = {
  value: "Anes",
  next: null,
};
console.log(insertFirst(newNode1));

/*
{value: "Anes", next: {…}}
*/
