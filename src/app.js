/* В файле src/app.js cоздать функцию getScore.
Функция getScore принимает на вход объект. В котором ключ это ник, а значение это успеваемость.
Функция getScore возвращает в ответ сумму всех баллов.
*/

let example = {
    Dima: 9,
    Sasha: 9,
    Liza: 10,
}

function getScore(object) {
    let summ = 0;

    for (key in object) {
        summ = summ + object[key];
    }

    return summ;
}

console.log(getScore(example));
