'use strict';
/*
1) Создать объект myBrowser
со свойствами name (значение “Chrome”)
и version (значение «9.2») - двумя способами
*/
// const myBrowser = {
//     name: "Chrome",
//     version: "9.2"
// };
//
// const myBrowser2 = new Object({
//     name: "Chrome",
//     version: "9.2"
// })
// console.log(myBrowser);
// console.log(myBrowser2);

/*
2) Создать объект cinema со свойствами soldTickets
(хранит в себе число, которое отображает кол-во проданных билетов)
и ticketCost (цена билета)
и задайте значения. Напишите функцию которая
высчитывает сколько денег заработал кинотеатр за один сеанс.
*/

// let soldTickets;
// let ticketCost;
// const cinema = {
//     soldTickets: [soldTickets],
//     ticketCost: [ticketCost],
// };
// function oneSeans(soldTickets, ticketCost) {
//     const res = soldTickets * ticketCost;
//     return `Кинотеатр заработал за один сеанс ${res} денег!`;
// }
//
// console.log(oneSeans(10, 100));

/*
3) Напишите функцию, которая принимает в качестве аргумента объект
и возвращает вложенный массив вида [[key, value], [key, value]].
    То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }),
    то результатом выполнения должен быть массив - [['a', 1],
    ['b', 2]]. Для решения этой задачи вам нужны будут следующие методы:
    Object.keys() или Object.entries()
*/
// function objectToArr(obj) {
//     return Object.entries(obj);
// }
//
// console.log(objectToArr({a: 1, b: 2}));

/*
4) Дан объект. Нужно извлечь число 123 одной строкой
 */
// const myCrazyObject = {
//     someArray: [7,9, {purpose: "путаница", number: 123} , 3.3]
// };
// console.log(myCrazyObject.someArray[2].number);

/*
5) Напишите функцию, которая проверяет, является
ли элемент именно простым объектом, а не массивом,
    null и т.п. Тут вам пригодится метод Array.isArray()
*/

// function isObject(obj) {
//     return Object.prototype.toString.call(obj) === '[object Object]';
// }
// const user = {
//     name: 'John',
//     age: 30
// };
//
// console.log(isObject(user));
// console.log(isObject([1,2,3,4,5]));
// console.log(isObject(null));
// console.log(isObject([{'1':2}]));

/*
6) Дан массив из имен например
    ['john', 'jane', 'kate', 'peter'].
    Вывести новый массив в котором каждая
первая буква элемента будет с большой буквы.
*/
// const names = ['john', 'jane', 'kate', 'peter'];
// const res = names.map(name => {
//    return name.charAt(0).toUpperCase() + name.slice(1);
// });
// console.log(res);

/*
7) Сумма диапазона. Напишите функцию range,
    принимающую два аргумента, начало и конец диапазона,
    и возвращающую массив, который содержит все числа из него,
    включая начальное и конечное. Затем напишите функцию sum,
    принимающую массив чисел и возвращающую их сумму.
    Запустите указанную выше инструкцию и убедитесь,
    что она возвращает сумму значений массива.
*/
// function range(start, end) {
//     let arr = [];
//     for(let i = start; start <= end; start++)
//         arr.push(start);
//         return arr;
//
// }
// console.log(range(1,8));

// function sum (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum(range(1,5))); //15

/*
8) Найдите квадратный корень из 587.
Округлите результат в большую и меньшую стороны,
    запишите результаты округления в объект с ключами 'floor' и 'ceil'.
    Можете все оформить в функцию, которая на входе будет принимать число
и на выходе отдавать объект
*/
// let floor;
// let ceil;
// function findSquare(num) {
//  const square = Math.sqrt(num);
//  const floor = Math.floor(square);
//  const ceil = Math.ceil(square);
//  return {
//      floor,
//      ceil,
//  }
// }
// const numberObj = {
//     floor: [floor],
//     ceil: [ceil]
// }
//
// console.log(findSquare(587));

/*
9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев'
с элементами 'Беларусь', 'Россия', 'Украина'.
    С помощью цикла for-in выведите на экран строки такого формата:
    'Минск - это Беларусь.'. Для работы понадобится for...in
*/
// const obj = {
//     'Минск' : 'Беларусь',
//     'Москва' : 'Россия',
//     'Киев' : 'Украина'
// };
// for (let city in obj) {
//     alert(`${city} - это ${obj[city]}`);
// }





