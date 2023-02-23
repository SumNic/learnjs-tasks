let login = prompt('Кто там?','');
if (login === 'Админ') {
    let passw = prompt('Пароль?','');
    if (passw === 'Я главный') {
        alert('Здравствуйте!');
    } else if (passw === '' || passw === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}