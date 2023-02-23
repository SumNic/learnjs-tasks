function random(min, max) {
    let randomNumber = min + (max - min) * Math.random();
    return randomNumber;
}

console.log( random(7, 8) );