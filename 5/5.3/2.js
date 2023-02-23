function checkSpam(str) {

    let strLower = str.toLowerCase();
    return (strLower.includes('xxx') || strLower.includes('viagra')) ? true : false;

}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );