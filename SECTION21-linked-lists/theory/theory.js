/*
Linked list is an ordered collection of data.  //ordered - classified

colection contains a number of different nodes. 

each node contains some amount of data, zajedno sa referencom na sljedeci node.
Slika nodova je u wordu. slika br.1 linked-lists

Svi ovi nodovi zajedno cine linked list. 
Linked list jos mozwmo nazivati chain of nodes. 
Redoslijed unutar linked liste se nece fixno promjeniti, osim ako mi to ne zelimo. 

U svakoj linked listi su dva specijalana noda: 
slika br 2. word

Svaka linked lista ima: 
HEAD node -> prvi node
Tail node -> zadnji node  => on nema referencu na neki node. 

Svaki node se sastoji od
1)  data (string, number, object ... bilo sta iz js)
2) the other part of node is reference to the next node along the chain
*/

//we will create two separate nodes, and join them together

const nodeOne = {
  data: 123, //data se mogla zvati bilo kako, npr. info
};

const nodeTwo = {
  data: 456,
};

nodeOne.next = nodeTwo; //next smo mogli zvati bilo kako, npr. nextRef
console.log(nodeOne); //{data: 123, next: {data: 456}}

const n1 = new Node("Hi");
//pozvali smo Node constructor (new Node) i proslijedili mu neke podatke da ih stora.
//tako ce runati taj constructor koji se nalazi unutar Node klase i assignati ce svom data property-ju
//ovaj string "Hi"

n1.data; //Hi
n1.next; //null   no other node is associated with this n1 node

const n2 = new Node("There", n1); //second argument sets up the next node in chain
n2.next; //returns n1
