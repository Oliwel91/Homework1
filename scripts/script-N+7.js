// 1.

// let newString = string.toUpperCase();

// 2.
// const animal =['Кошка', 'Кит', 'Комар', 'Носорог']

// function str (arr, word) {
//     return arr.map(element => element.toLowerCase()).filter(element => element.startsWith(word));

// }

// console.log(str(animal, 'ко'));

// 3.

// Math.floor(32.58884)
// Math.ceil(32.58884)
// Math.round(32.58884)

// 4.

//  console.log (Math.max(52, 53, 49, 77, 21, 32));
//  console.log (Math.min(52, 53, 49, 77, 21, 32));

//  5.

//  function randomInteger (min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rend);

//  }
//  console.log(randomInteger(1, 10));

// 6.

// let num = Number(prompt('Введите целое число'));



// const arr = (num, min, max) => new Array(num).fill(0).map(el => Math.floor(Math.random() * (max - min + 1)) + min);

// console.log(arr((Math.floor(num / 2)), 0, num));

// 7.

// let min = Number(prompt('Введите первое число'));
// let max = Number(prompt('Введите второе число'));

// let result = function (min,max){
//   if (isNaN(min) || isNaN(max))  {
//     console.log('Одно или оба значения не я вляются числом');
    
//   } else { let range = min + Math.random() * (max + 1 - min);
//     console.log(Math.floor(range));
//  }
// }
// result(min, max);

// 8.

// let myDate = new Date(); 
// console.log(myDate);

// 9.

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate); 

// 10.

// let currentDate = new Date();

// const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

// const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

// let fullDate = "Дата: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " - это " + days[currentDate.getDay()] + ". "; 

// let fullTime = "Время: " + currentDate.getHours() + " " + currentDate.getMinutes() + " " + currentDate.getSeconds() + ".";

// console.log(fullDate + fullTime);

11.

function words() {

    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  
    arr = arr.sort(() => Math.random() - 0.5);
  
    alert(arr);
  
    let answer1 = String(prompt('Чему равнялся первый элемент массива?'));
  
    let answer2 = String(prompt('Чему равнялся последний элемент массива?'));
  
    if (answer1.toLowerCase() == arr[0].toLowerCase() && answer2 == arr[6].toLowerCase()) {
      alert('Поздравляю, Вы угадали оба элемента массива');
    } else if (answer1.toLowerCase() == arr[0].toLowerCase() || answer2 == arr[6].toLowerCase()) {
      alert('Вы были близки к победе!');
    } else {
      alert('Вы ответили неверно!');
    }
  }
















