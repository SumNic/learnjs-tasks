function getSecondsToTomorrow() {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let dateFinish = new Date(year, month, day+1);

    let diff = dateFinish - date;

    return Math.round(diff / 1000);

}

console.log( getSecondsToTomorrow() );

