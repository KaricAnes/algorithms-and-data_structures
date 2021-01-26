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

/*
node = {value: 6, next: {…}}
node = {value: 10, next: {…}}
node = {value: 12, next: {…}}
node = {value: 3, next: null}
*/
const size = () => {
  let count = 0;
  let node = list.head;
  console.log(node.next);
  while (node) {
    debugger;
    count++;
    node = node.next; //node sto je bio, i jos nize
  }
  return count;
};

console.log(size()); //vrlicina 4
