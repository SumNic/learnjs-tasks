function getSecondsToday() {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let dateStart = new Date(year, month, day);

    let diff = date - dateStart;

    return Math.round(diff / 1000);
}


console.log( getSecondsToday() );