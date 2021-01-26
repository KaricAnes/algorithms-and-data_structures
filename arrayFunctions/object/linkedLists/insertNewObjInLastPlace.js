let list = {
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

const insertLast = (data) => {
  console.log(data);
  let node = list.head;
  let nodePlusOneStepDown;
  if (!list.head) {
    return;
  }
  if (!list.head.next) {
    debugger;
    list.head.next = data;
    return;
  }
  while (node) {
    debugger;
    nodePlusOneStepDown = node.next; //jako je bitno da je nodePlusOneStepDown u whilu definisan da bi od ternutnog node-a uzimao next
    debugger;
    if (!nodePlusOneStepDown.next) {
      debugger;
      nodePlusOneStepDown.next = data;
      return list;
    }
    node = node.next;
    debugger;
  }
};

console.log(insertLast({ value: 6, next: null }));
