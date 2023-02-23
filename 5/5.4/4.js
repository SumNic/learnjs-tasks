function sumInput() {
    let arr = [];
    let num;
    let sum = 0;

    do {
        num = prompt('Введите число', 0);
        arr.push(num);
    } while (num !== '' && num !== null && isFinite(num));

    for (value of arr) {
        sum += +value || 0;
    }
    
    return sum;
}

console.log(sumInput()); 

