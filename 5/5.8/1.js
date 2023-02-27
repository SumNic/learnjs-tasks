let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}dsf
];

let readSet = new WeakSet(messages);

console.log(readSet);