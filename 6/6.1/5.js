let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// с помощью цикла

function printList(list) {

  let tmp = list;
  let list2 = null;

  while (tmp) {
    list2 = { value: tmp.value, next: list2 };
    tmp = tmp.next;
  } 

  while (list2 ) {
    console.log(list2.value);
    list2 = list2.next;
  } 
}

// с помощью рекурсии

function printList(list) {

  if (list.next) {
    printList(list.next); 
  }

  console.log(list.value);
}

printList(list);