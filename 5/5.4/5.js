function getMaxSubSum(arr) {
    let subarr = [];
    let arrMax = [];
    for (val of arr) {
        subarr.push(val);
    }

    while (arr.length) {
        while (subarr.length) {
            let sum = 0;
            for (let val of subarr) {
                sum += val;
            }
            arrMax.push(sum);
            subarr.pop();
        }
        arr.shift();
        for (let val of arr) {
            subarr.push(val);
        }
    }
    arrMax.push(0);

    outer:
    for (let i = 0; i < arrMax.length; i++) {
        for (let j = 0; j < arrMax.length; j++) {
            if (arrMax[i] < arrMax[j]) continue outer;
        }
        return arrMax[i];
    }
}

console.log( getMaxSubSum([1, -2, 3, 4, -9, 6]) );