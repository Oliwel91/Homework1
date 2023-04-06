// 1.

// let i = 1;
// while (i < 6) {
//     console.log(i);
//     i++;

// }

2.

// let i = 1;
// let n = 2;
// while (i <= n) {
//     alert('Привет !');
//     i++;

// }

3.
// let i = 7;
// while (i < 23) {
//     console.log(i);
//     i++;

// }

4.


// const obj = {
//     Коля: 200,
//     Вася: 300,
//     Петя: 400,

// }

// for (const key in obj) {

//     console.log(`${key} - зарплата ${obj[key]} долларов`);

// }

5.

let n = 1000;
let nam = 0;
while (n >= 50) {
    n /= 2; // 500,250,125,62.5,31,25
    nam++; // 1,2,3,4,5
}
console.log(n);
console.log(nam);

6.
// let date, weekday;
// weekday = Number(prompt('Какое число - первая пятница месяца?'));

// do {
//   date =  Number(prompt('Какое сегодня число?'));
//   if ((date - weekday)%7 == 0) { 
// 		alert(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
// }} while (date <= 31);


const firstFriday = 7;
for (let day = firstFriday; day <= 30; day += 7) {
    const message = `Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`;
    console.log(message);

}








