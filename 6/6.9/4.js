function f(a) {
    console.log(a)
}

function throttle(f, ms) {
    let cache = new Map();
    let isCooldown = false;

    return function() {

        if(cache.size === 0) f.apply(this, arguments);
        else cache.clear();
        
        cache.set(f, arguments);

        if (isCooldown) return;
    
        setTimeout(() => {
            f.apply(this, cache.get(f));
            isCooldown = false;
        }, ms);
    
        isCooldown = true;
    };
}


  
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано