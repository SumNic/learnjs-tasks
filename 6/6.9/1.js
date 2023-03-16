function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

function spy(func) {
    let map = new Map();
  
    return function rec(...args) {
        
        let result = func(...args); 

        map.set(...args); 
        rec.calls = map;

        return result;
    };
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}