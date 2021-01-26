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

/*
node silazi jedan po jedan
nodePlusOneStepDown silazi za jedan korak nize od node-a i provjerava je li null
ako je null, onda od sadasnjeg noda citav next settam  na null
*/

const removeLast = () => {
  //list.head.next.next.next = null;
  if (!list.head) {
    return;
  }
  if (list.head.next === null) {
    //ako imamo samo jedan clan, uklonit cemo head node, tj. settti ga na null
    list.head = null;
  }
  let node = list.head;
  while (node) {
    debugger;
    let nodePlusOneStepDown = node.next; //node je npr. {value 6,next{}} a nodePlusOneStepDown je {value:10, next{}}
    debugger; //jako je bitno da je nodePlusOneStepDown u whilu definisan da bi od ternutnog node-a uzimao next
    if (nodePlusOneStepDown.next === null) {
      debugger;
      node.next = null;
      debugger;
      return list;
    }
    node = node.next;
  }
};
console.log(removeLast());

/*
za uraditi:

sta ce se desiti ako imamo samo jedan node?
sta ce se desiti ako nemamo nijedan node?

ovo sve pokusati implementirati u index.js-u
*/
