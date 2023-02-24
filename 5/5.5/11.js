function getAverageAge(users) {

    let arrAge = users.map(item => item.age);
    let sumAge = 0;

    for (val of arrAge) {
        sumAge += val;
    }

    return sumAge / arrAge.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28