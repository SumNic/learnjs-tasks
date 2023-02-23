function shuffle(array) {

    let arrNew = [];
    while (array.length) {
        let id = Math.floor(array.length * Math.random());
        arrNew.push(array[id]);
        array.splice(id, 1);
    }
    
    array.push(...arrNew);
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }