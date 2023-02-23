let x = +prompt('x?', '');
let n = +prompt('n?', '');

function pow(x,n) {
    if (n < 1) {
        return (`Степень ${n} не поддерживается, используйте натуральное число`);
    }
    for (let i = 1; i <= n; i++) {
        if (i < n && (i + 1) > n) {
            return (`Степень ${n} не поддерживается, используйте натуральное число`);
        } 
    }
    return (x ** n);
}

alert( pow(x,n) );