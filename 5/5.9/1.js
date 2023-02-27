function sumSalaries(salaries) {

    sum = 0;
    for (sal of Object.values(salaries)) {
        sum += sal;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log( sumSalaries(salaries) ); // 650