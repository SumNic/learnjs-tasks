// сработает корректно

function F() {
    F.prototype = {
        constructor: F // изменено по умолчанию не изменялось, либо если оно задано корректно вручную
      };
}

// поведет неправильно

function F() {
    F.prototype = {
        constructor: false // изменено значение по умолчанию
      };
}

let obj = new F();

let obj2 = new obj.constructor();
