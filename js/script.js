"use strict";

// One: 'Hi Mary.' Two: 'Oh, hi.'
// One: 'How are you doing?'
// Two: 'I'm doing alright. How about you?'
// One: 'Not too bad. The weather is great isn't it?'
// Two: 'Yes. It's absolutely beautiful today.'
// One: 'I wish it was like this more frequently.'
// Two: 'Me too.'
// One: 'So where are you going now?'
// Two: 'I'm going to meet a friend of mine at the department store.'
// One: 'Going to do a little shopping?'
// Two: 'Yeah, I have to buy some presents for my parents.'
// One: 'What's the occasion ? '
// Two: 'It's their anniversary.'
// One: 'That's great.Well, you better get going.You don't want to be late.'
// Two: 'I'll see you next time.'
// One: 'Sure. Bye.'


/**
 * Записал все данные в масив;
 */
let arrChat = [
    "One: 'Hi Mary.' Two: 'Oh, hi.'",
    "One: 'How are you doing?'",
    "Two: 'I'm doing alright. How about you?'",
    "One: 'Not too bad. The weather is great isn't it?'",
    "Two: 'Yes. It's absolutely beautiful today.'",
    "One: 'I wish it was like this more frequently.'",
    "Two: 'Me too.'",
    "One: 'So where are you going now?'",
    "Two: 'I'm going to meet a friend of mine at the department store.'",
    "One: 'Going to do a little shopping?'",
    "Two: 'Yeah, I have to buy some presents for my parents.'",
    "One: 'What's the occasion ? '",
    "Two: 'It's their anniversary.'",
    "One: 'That's great.Well, you better get going.You don't want to be late.'",
    "Two: 'I'll see you next time.'",
    "One: 'Sure. Bye.'"
];

/**
 * Для демонстрации вывел один из элементов массива до замены в консоль
 */
console.log(arrChat[2]);


/**
 * Для демонстрации вывел один из элементов массива после замены в консоль 
 */
let arrChatFilter = arrChat.map(el => el.replace(/\B'/g, '"'));
console.warn(arrChatFilter[2]);


/**
 * Прошу подсказать, почему такой способ замены не рботает ?
 * Если убирать экранирование с одинарной ковычки то ошибка синтакциса, если указывать двойные кавычке в аргументах RegExp, все равно замена не работает.
 */
let regExp = new RegExp('\B\'', 'g');
let arrChatFilter2 = arrChat.map(el => el.replace(regExp, '"'));
console.warn(arrChatFilter2[2]);

