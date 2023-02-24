function unique(arr) {
    let arrUniq = [];
    arrUniq[0] = arr[0];
    
    mark:
    for (val of arr) {

        for (val2 of arrUniq) {
            if (val === val2) continue mark;
        }
        arrUniq.push(val);
    }
    return arrUniq;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O