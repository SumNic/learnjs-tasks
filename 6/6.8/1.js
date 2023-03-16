// Используя setInterval

function printNumbers(from, to) {

    let timerId = setInterval(function() {
        console.log(from);

        if (from === to) clearInterval(timerId);

        from++;
    }, 1000);
}

// Используя рекурсивный setTimeout

function printNumbers(from, to) {
    console.log(from);
    if (from === to) return;
    from++;
    
    setTimeout(printNumbers, 1000, from, to);
    
}

setTimeout(printNumbers, 1000, 1, 7);

