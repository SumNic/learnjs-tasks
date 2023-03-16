function makeCounter() {
let count = 0;

    let counter = () => count++;

    counter.set = (val) => count = val;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)