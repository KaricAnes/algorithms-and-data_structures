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
ideja je da kopiram node ispod ovog koji je za brisanje
onda da uklonim ovaj koji je visak
onda na onaj zadnji validni zakacim ovo kopirano bez onog obrisanog naravno

poseban slucaj je kada treba da uklonim prvi node
takodjer i zadnji ==> ipak uklnjanje zadnjeg nije poseban slucaj
*/

const removeAt = (integer) => {
  if (!list.head) {
    return;
  }

  if (integer === 0) {
    //uklanjanje prvog noda: if (counter === integer - 1) { => ne bi se nikada susreli -1 i counter
    debugger;
    //list.head = list.head.next;   => kraca verzija
    let copyOfNodeBelowFirst = { ...list.head.next };
    list.head = copyOfNodeBelowFirst;
    debugger;
    return list;
  }
  let counter = 0;
  let node = list.head;
  //let sizeOfLinkedList = size();

  while (node.next) {
    debugger;
    /*if (sizeOfLinkedList === integer && counter === integer - 1) {
      //ipak nije bilo potrebe za ovim
      //uklanjanje posljednjeg noda
      //ideja je da dodje do predzanjeg noda i setta mu next na null
      //sa -1 sam korak iznad noda koji treba da se brise,
      //counter === integer - 1 ==> natjerao sag da loopa kroz node, inace bi mi odmah vratio prvi node

      node.next = null;
      return list;
    }*/
    if (counter === integer - 1) {
      debugger;
      //slucaj kada zelimo da uklonimo npr. 3. node! Dakle koji nije ni 1. ni posljednji
      //sada sam 1 node prije ovog koje je za brisanje
      //ideja je da kopiram node ispod ovog koji je za brisanje
      //onda da uklonim ovaj koji je visak
      //onda na onaj zadnji validni zakacim ovo kopirano bez onog obrisanog naravno
      //na osnovu integer-a se krecemo i zaustavljamo gdje treba

      /* let copyOfNodesBelowDeleted = { ...node.next.next };
      //debugger
      delete node.next;
      //debugger
      node.next = copyOfNodesBelowDeleted;
      //debugger
      */
      //ovo je sada jos krace, nema kopiranja, samo sam nodu prije obrisanog, setao next na snext sljedeceg noda poslije obrisanog
      node.next = node.next.next;
      debugger;
      return list;
    }
    node = node.next;
    counter++;
  }

  return null; //ako upisemo npr. 55, dobit cemo null
};

console.log(removeAt(3));
