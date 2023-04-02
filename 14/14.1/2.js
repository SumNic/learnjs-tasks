let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop) {
        if (prop < 0) {
            return target[target.length + +prop];
        }
        return target[+prop];
    }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2