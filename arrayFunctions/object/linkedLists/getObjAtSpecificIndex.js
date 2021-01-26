const list = {
  head: {
    value: 6,
    next: null,
  },
};

const size = () => {
  let count = 0;
  let node = list.head;
  while (node) {
    //  debugger;
    count++;
    node = node.next; //node sto je bio, i jos nize
  }
  return count;
};

const getAt = (index) => {
  if (!list.head) {
    return;
  }
  let sizeOfObj = size() - 1;
  if (sizeOfObj < index) {
    debugger;
    return "Nema toliko nodova";
  }

  let count = 0;
  let node = list.head;
  while (count <= index) {
    if (count === index) {
      return node;
    }
    node = node.next;
    count++;
  }
};

console.log(getAt(1));
