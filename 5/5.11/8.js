function formatDate(date) {

    let dateCurr = new Date();
    let diff = dateCurr - date;

    if (diff <= 1000) {
        return 'прямо сейчас';
    } else if (diff <= 30000) {
        return Math.round(diff / 1000) + ' сек. назад';
    } else if (diff <= 300000) {
        return Math.round(diff / 60000) + ' мин. назад';
    } else {
        let year = date.getFullYear() - Math.floor(date.getFullYear() / 100) * 100;
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate();
        let Hours = date.getHours();
        let Minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return day + '.' + month + '.' + year + ' ' + Hours + ':' + Minutes;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );