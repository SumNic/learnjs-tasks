function Calculator() {

    this.arrNameFunc = [];
    
    this.calculate = function (str) {
        let arr = str.split(' ');
        let a = +arr[0];
        let b = +arr[2];
        let oper = arr[1];

        this.arrNameFunc.push({sign: '+', f: (a, b) => a + b});
        this.arrNameFunc.push({sign: '-', f: (a, b) => a - b});

        let nameRes = this.arrNameFunc.find(item => item.sign == oper);

        if (nameRes === undefined || isNaN(a) || isNaN(b)) {
            return NaN;
          }

        return nameRes.f(a, b);
    }
    
    this.addMethod = function(name, func) {
        this.arrNameFunc.push({sign: name, f: func});
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8