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

const getFirst = () => {
  return list.head; //ovaj head ce uvijek pointati na prvi clan
};

console.log(getFirst());
