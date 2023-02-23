let n = +prompt('Введите второе число интервала:', 0);
mark:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue mark;
        } 
    }
    console.log(i);
}