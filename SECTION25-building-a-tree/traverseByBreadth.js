/*
1) Breadth-First Traversal =>
  -> idemo odozgo prema dole
  -> idemo sa lijeva na desno => bez obzira da li su nodovi siblings ili ne
u wordu imam sliku

cilj nam je da u svakom nodu uvecamo data za +10
*/

const obj = {
  root: {
    data: 1,
    children: [
      {
        data: 2,
        children: [{ data: 4, children: [{ data: 5, children: [] }] }],
      },
      { data: 3, children: [] },
    ],
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.children = []; //ako imamo vise siblinga, imat cemo array od objects
  }

  add(data) {
    //this.children.push(new Node(data))  => onda nam trebaju dvije linije ispod
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    //this.children = => ovo smo ubacili zato sto filter ne mojenja originalni array
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

/*
glavna logika koju smo iskoristili:
 - napravi prazan arr []
 - insertaj root node u njega
 - sve dok arr.length nije 0, vrti sljedece:
   *- iz arr[]  ukloni prvi element a spasi ga u node
   *- svu djecu iz node-a pushaj na kraj u array
 
  Onda se taj proces ponavlja sve dok ne uklonimo sve elemente iz arr[]
  *- sljedeci prvi element ukloni a spasi ga u node
  *- svu djecu iz node-a pushaj na kraj u array

  na ovaj nacin cemo prolaziti prvo kroz djecu od root-a, pa onda kroz rootove unuke, praunuke itd...

  dakle fora je u shift koji uklanja prvi element i u push koji gura node na kraj arraya
*/

const traverseByBreadth = (obj, fn) => {
  //const arr = [this.root]  => onda nam ne trebaju ove dvije linije ispod
  const arr = [];
  const visited = [];

  arr.push(obj.root);
  while (arr.length) {
    debugger;
    const node = arr.shift(); //shift uklanja prvi elemnt iz arraya
    //sa ovom linijom koda iznad je uklonio prvi lement i spasio ga u node
    debugger;
    //node = {data:1, children: [{},{}]}
    //arr.push(node.children) => ako ovo uradimo u arr[] cemo gurnuti jos jedan arr i imat cemo nested arrays
    //umjesto toga, mi zelimo da iteriramo kroz array of objects:
    for (let child of node.children) {
      debugger;
      arr.push(child);
    }
    //skracena verzija ovog iznad je
    //arr.push(...node.children)
    debugger;
    /*
arr: [
   {data: "2", children: Array(1)}
   {data: "3", children: Array(0)}
 ] 
*/
    visited.push(node.data + 10);
  }
  return visited; //[11, 12, 13, 14, 15]
};

console.log(traverseByBreadth(obj));
