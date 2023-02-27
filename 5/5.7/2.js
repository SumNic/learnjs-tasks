function aclean(arr) {

  let resMap = new Map();

  for (let val of arr) {
    let id = Array.from(val.toLowerCase()).sort((a,b) => a > b ? 1 : -1).join('');
    resMap.set(id, val);
  }

  let result = resMap.values();

  return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"