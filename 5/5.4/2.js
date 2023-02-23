let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let index = Math.floor(styles.length / 2 - 1);
styles[index] = 'Классика';
console.log( styles.shift());
styles.unshift('Рэп', 'Регги');


console.log(styles);