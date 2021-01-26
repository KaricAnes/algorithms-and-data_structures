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

const getLast = () => {
  if (!list.head) {
    return null;
  }
  let node = list.head;
  let lastNode = null;
  while (node) {
    if (node.next === null) {
      lastNode = node;
    }
    node = node.next;
  }

  return lastNode;
};

//bolja alternativa
const getLast2 = () => {
  if (!list.head) {
    return null;
  }
  let node = list.head;

  while (node) {
    if (!node.next) {
      //ovdje ima manjw koda, i nemamo lastNode varijablu
      return node;
    }
    node = node.next;
  }
};
console.log(getLast2());
