function f(x) {
    console.log(x);
  }

function delay(func, ms) {
    
    return function(...arg) {
        setTimeout(() => func.call(this, arg.join()), ms);
    };
}

  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test", "test2"); // показывает "test" "test2" и после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс