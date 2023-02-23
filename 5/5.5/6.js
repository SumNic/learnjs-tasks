function Calculator() {
    
    this.calculate = function (str) {
            let arr = str.split(' ');
            console.log(arr);
            let a = +arr[0];
            let b = +arr[2];
            oper = arr[1];
            // console.log(this.oper);
            if (oper === '+') return a + b;
            if (oper === '-') return a - b;  
    }
    
    this.addMethod = function(name, func) {
        this.oper = name; 
        // this.func;
        this.funcNew = func;
        console.log(this);
        
    }

    // calculate(str) {
    //     return str;
    // }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8