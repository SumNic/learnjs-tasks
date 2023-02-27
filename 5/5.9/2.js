function count(obj) {
    let arr = Object.keys(obj);
    return arr.length;
}

let user = {
    name: 'John',
    age: 30
};
  
console.log( count(user) ); // 2