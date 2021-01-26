class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues(); //recursive behaviour
    }
  }
}

/*
      1
2          3
4
*/

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);
//imamo 1,2,3 s tim da 2 ima child 4
//zelimo da napravimo array [1,2,4,3]

const values = [];
for (let value of tree.printValues()) {
  values.push(value);
}
console.log(values);
tree.printValues().next();
