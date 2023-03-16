function sum(num1) {
  let count = num1;

  return function func(num2) {
    count += num2;
    sum.count = count;

    func[Symbol.toPrimitive] = function(hint) {
      return sum.count;
    }

    return func
  }
}

console.log( sum(1)(2) == 3 ); // 1 + 2
console.log( sum(1)(2)(3) == 6 ); // 1 + 2 + 3
console.log( sum(5)(-1)(2) == 6 );
console.log( sum(6)(-1)(-2)(-3) == 0 );
console.log( sum(0)(1)(2)(3)(4)(5) == 15 );