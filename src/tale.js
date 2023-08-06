function kolobok(name) {
    switch (name) {
        case 'дедушка':  // if (name === 'value1')
            console.log('Я от дедушки ушел');
            break;

        case 'заяц':  // if (name === 'value2')
            console.log('Я от зайца ушел');
            break;

        case 'лиса':  // if (name === 'value1')
            console.log('Меня съели');
            break;

        default:
            console.log('Я не встречал таких персонажей');
            break;

    }
}

kolobok('дедушка') // Я от дедушки ушёл
kolobok('лиса') // Меня съели



function newYear(person) {
    console.log(`\"` + person + '! ' + person + '! ' + person + '!' + `\"`);

}


newYear('Дед Мороз')
newYear('Снегурочка') 