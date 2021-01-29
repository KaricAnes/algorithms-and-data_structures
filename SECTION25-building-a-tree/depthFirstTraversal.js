/*2) Depth-First Traversal 

isto ide s lijeva na desno ali udje u jedan node i ide do dna i sve mu siblinge ispise
onda se vraca ispod parenta pa ide ponovo do kraja
pnda zadnji desni ide do dna

Napominjem, kada dodje do dna, ispise sve siblinge
*/

const obj = {
  root: {
    data: 1,
    children: [
      {
        data: 2,
        children: [{ data: 4, children: [{ data: 5, children: [] }] }],
      },
      { data: 3, children: [{ data: "afterThree", children: [] }] },
    ],
  },
};

const depthFirstTraversal = (obj) => {
  let arr = [];
  let visited = [];
  arr.push(obj.root);

  while (arr.length) {
    let node = arr.shift();
    /*for (let child of node.children) {
      arr.unshift(child); //unshift dodaje elment na pocetak arraya
      //ovo je jedina rallika izmedju deptha i breadth-a
      //ovdje je prvo islo desno pa lijevo
    }*/
    arr.unshift(...node.children);
    //unshift dodaje elment na pocetak arraya
    //ovo je jedina rallika izmedju deptha i breadth-a
    visited.push(node.data);
  }
  return visited;
};

console.log(depthFirstTraversal(obj));
