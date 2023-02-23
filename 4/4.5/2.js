function Calculator() {

    this.read = function() {
        a = +prompt('a?', 0);
        b = +prompt('b?', 0);
    };

    this.sum = function() {
        return a + b;
    };

    this.mul = function() {
        return a * b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );