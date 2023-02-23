function A() {

  }
function B() { 
    return a;
}

let a = new A();
let b = new B();

console.log( a == b ); // true