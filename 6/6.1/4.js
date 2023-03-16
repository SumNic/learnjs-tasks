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

    let val = 'list';
    let next = 'list';

    do {
        val = "['value']";
        console.log(eval(next + val));
        next += "['next']";
    } while (eval(next) != null);
}

// с помощью рекурсии

function printList(list) {
    for (let val of Object.values(list)) {
        
        if(typeof(val) === 'number') {
            console.log(val);
            
        } else { 
            if (val === null) break;
            return printList(val);
        }
    }
}

printList(list);

