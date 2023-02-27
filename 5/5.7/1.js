function unique(arr) {
    let arrSet = new Set(arr);
    return Array.from(arrSet);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O