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

const removeFirst = () => {
  list = list.head.next;
  if (!list.head) {
    return;
  }
  //const userCopy = { ...user, addres: { ...user.addres } };
  let listCopy = { ...list, head: { ...list.head.next } };
  list = listCopy;
  return list;
};
removeFirst();
console.log(list);
