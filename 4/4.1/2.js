let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(obj) {
    for (let key in obj) {
        if (key) return true;
    }
    return false; 
}

console.log( isEmpty(schedule) );