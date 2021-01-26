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

Object.keys(list.head).forEach((node, index) => {
  list.head[node] += 100;
});
console.log(list.head);
//{value: 106, next: "[object Object]100"}
