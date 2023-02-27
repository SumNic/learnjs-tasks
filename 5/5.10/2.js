function topSalary(salaries) {

    let arrValueSort = Object.values(salaries).sort((a, b) => b - a);
    let [value = null] = arrValueSort;
    if (value === null) return null;

    for (let val of Object.entries(salaries)) {
        let [name, sal] = val;
        if (sal === value) return name;
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log( topSalary(salaries) );