// 1.

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

  2.
//   function num (number) {
//     if (number % 2 === 0) {
//     return 'число четное'
//     } else {
//     return 'число не четное'
//     } 
//     }
//     console.log(num(4))

// или

// const num = (number) => number % 2 === 0 ? 'число четное' : 'число не четное'

3.

// function number(nam) {
    
//     return (nam * 2);
// }
// console.log (number(2))

// 4.

// function greeting() {
//     let age = Number(prompt("Сколько вам лет?"));
//     if (age < 0) {
//      console.log("Вы ввели неправильное значение");
//     } else if (age >= 0 && age <= 12) {
//      console.log("Привет, друг!");
//     } else {
//      console.log("Добро пожаловать!");
//     }
//    }




5.
// function num (a, b){
//     if (isNaN(a) || isNaN(b)) {
//     return 'Одно или оба значения не являются числом'
//     } else {
//     return ( a * b);  
    
//     }
//     }
//     console.log (num(6, 2))

// или

// const num = (a, b) => isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b

// 6.
// function checkNumber () {
//     let input = (prompt("Введите число"));
//     console.log(typeof input);
//     if (isNaN(input) === false) {
//       return Math.pow(input,3);
//     } else {
//       return 'n в кубе равняется <получившееся значение>'
//     }
    
// }
// let resalt = checkNumber()
//  alert(resalt );

// function checkNumber () {
//   let input = (prompt("Введите число"));
//   console.log(typeof input);
//   if (isNaN(input) === false) {
//     return Math.pow(input,3);
//   } else {
//     return `${input} в кубе равняется ${Math.pow(input,3)}`
//   } 
// }
// alert(checkNumber())

// 7.
// const circle1 = {
//   radius: 15,
//   getArea: function() {
//       return Math.pow(this.radius, 2) * Math.PI
//   },
//   getPerimetr: function() {
//       console.log(this)
//       return 2*this.radius*Math.PI 
//   }
// }

// const circle2 = {
//   radius: 30,
//   getArea: function() {
//       return Math.pow(this.radius, 2) * Math.PI
//   },
//   getPerimetr: function() {
//       console.log(this)
//       return 2*this.radius*Math.PI 
//   }
// }



