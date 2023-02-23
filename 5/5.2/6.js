function randomInteger(min, max) {
    let randomNumber = min + (max - min + 1) * Math.random();
    return Math.floor(randomNumber);
}

console.log( randomInteger(1, 5) );