// Задание 1

// let password = 'qwer';
// let input = String (prompt('Введите пароль'));
// if (password === qwer ) {
//     console.log ("Пароль введен верно");
// } else{
//     console.log ("Пароль введен неправильно");
// }

// Задание 2

// let c = 5;
// if (c > 0 && c < 10) {
//     console.log ("Верно");
// }else{
//     console.log("Не верно")
// }

// let c = 0;
// if (c > 0 && c < 10) {
//     console.log ("Верно");
// }else{
//     console.log("Не верно")
// }

// let c = 10;
// if (c > 0 && c < 10) {
//     console.log ("Верно");
// }else{
//     console.log("Не верно")
// }

// let c = -3;
// if (c > 0 && c < 10) {
//     console.log ("Верно");
// }else{
//     console.log("Не верно")
// }

// let c = 2;
// if (c > 0 && c < 10) {
//     console.log ("Верно");
// }else{
//     console.log("Не верно")
// }

// Задание 3

// let d = 20;
// let e = 23;
// if (d > 100 || e > 100) {
//     console.log("Верно");

// } else {
//     console.log("Не верно");


// }

// Задание 4

// let a = '2';
// let b = '3';
// alert(a + b);

// Решение:

// let a = '2';
// let b = '3';
// alert(0032 + 0033);
// Тут не понял юникоды нужно записать в переменные или же как я сделал?

// Задание 5.

let monthNumber = String(prompt('Введите номер месяца'));

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна')
        break;

    case '6':
    case '7':
    case '8':
        console.log('Лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень')
        break;
    default:
        console.log("номер месяца больше 13")
        break;
}


