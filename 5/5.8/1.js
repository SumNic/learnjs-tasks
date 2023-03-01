let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readSet = new WeakSet();

let mes = messages[0];

readSet.add(mes);

function readMess (elem) {
    if (readSet.has(elem)) return 'Сообщение прочитано';
}

console.log( readMess(mes) );