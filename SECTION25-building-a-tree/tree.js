// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

const expectedDataTree = [
  {
    ID: 1,
    Phone: "(403) 125-2552",
    City: "Coevorden",
    Name: "Grady",
    children: [
      {
        ID: 2,
        parentID: 1,
        Phone: "(979) 486-1932",
        City: "Chełm",
        Name: "Scarlet",
        children: [],
      },
    ],
  },
];

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

const node = new Node(1);
const tree = new Tree();
tree.root = node;
console.log(tree); //{root: {data:1, children: []}}

//--------------------------------------------------------------------
//evo kako trenutno tree radi
const n = new Node("a");
console.log(n); //{data: "a", children: Array(0)}
n.add("b");
console.log(n); //{data: "a", children:[ data: "b", children: []]}
n.add("c");
console.log(n); //{data: "a", children: [{data: "b", children: Array(0)},{data: "c", children: Array(0)}]}
n.add("d");
console.log(n);
n.remove("d"); //ukloni d iz childrena
console.log(n);

const result = {
  data: "a",
  children: [
    { data: "b", children: [] },
    { data: "c", children: [] },
    { data: "d", children: [] },
  ],
};
//module.exports = { Tree, Node };
//--------------------------------------------------------------------

//**********************************
//updatovano kako tree radi

const t = new Tree();
t.root = new Node("a");
console.log(t); //{root: {data: "a", children: []}}

t.root.add("b");
console.log(t); //{root: {data: "a", children: [{data:b, children: []}]}}

t.root.add("c");
console.log(t); //{root: {data: "a", children: [{data:b, children: []}, {data: "c", children:[]}]}}

t.root.children[0].add("d");
console.log(t);

t.root.children[0].children[0].add("e"); //a => b => d => e     a => c  dodali smo e kao child od d
console.log(t); //ovo ispod je cijeli rezultat

const obj = {
  root: {
    data: "a",
    children: [
      {
        data: "b",
        children: [{ data: "d", children: [{ data: "e", children: [] }] }],
      },
      { data: "c", children: [] },
    ],
  },
};
//**********************************
