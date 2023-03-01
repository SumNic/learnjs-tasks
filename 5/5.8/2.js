let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

let mes = messages[0];

readMap.set(mes, new Date(2023, 2, 1));

function readMess (elem) {
    if (readMap.has(elem)) return 'Сообщение прочитано: ' + readMap.get(elem);
}

console.log( readMess(mes) );