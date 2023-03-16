function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(ms) {

    let func = this;

    return function(...arg) {
        setTimeout(()=>func(...arg), ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.