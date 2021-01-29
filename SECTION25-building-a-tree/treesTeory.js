/*
parent
child
siblings => child nodes that have same parent

Every node has data and next property => just like linked lists

tree traversal => kad god cujemo rijec tree traversal, to znaci da govorimo o iterating kroz razicite 
elmente unutar tree-a. Mi smo potrosili veliki dio naseg vremena na to radeci sa liked listama. 

Cijeli fazon sa linked listama je bio da iteriramo kroz svaki element unutar liste na neki nacin. 

Postoje razzliciti nacini koje mozemo koristiti da iteriramo kroz drvo. 
Radi se o redoslijedu silazenja niz samo drvo. 

1) Breadth-First Traversal =>
  -> idemo odozgo prema dole
  -> idemo sa lijeva na desno => bez obzira da li su nodovi siblings ili ne
u wordu imam sliku

 2) Depth-First Traversal 

isto ide s lijeva na desno ali udje u jedan node i ide do dna i sve mu siblinge ispise
onda se vraca ispod parenta pa ide ponovo do kraja
pnda zadnji desni ide do dna

Napominjem, kada dodje do dna, ispise sve siblinge

Fazon je jos kretanje kroz tree, 
*/
