function camelize(str) {
    let arr = str.split('');
    
    arr.map(function(item, i) {
        if (item === '-') {
            arr.splice(i, 2, arr[i+1].toUpperCase())
        }
    }
    )
    return arr.join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );