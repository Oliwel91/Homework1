// 1.
// function mult() {
//     result = arr[0] * arr[1] * arr[2] * arr[3];
//     console.log(result);
//   }

//   function sum() {
//     result = arr[0] + arr[1] + arr[2] + arr[3];
//     console.log(result);
//   }

//   function getResult(callback) {
//     callback();
//   }

//   arr = [3, 4, 1, 9];

//   getResult(mult);
//   getResult(sum);



// 2.

// function getResult(users) {
//   users.sort(function (a, b) {
//     if (a.age > b.age) {
//       return 1;
//     }
//     if (a.age < b.age) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log(users);
// }

// const users = [
//   { name: 'Jon', age: 22 },
//   { name: 'Richard', age: 18 },
//   { name: 'Anton', age: 32 },
//   { name: 'Lida', age: 23 },
//   { name: 'Bob', age: 44 }
// ];

// function getSortedArrayObj(callback, getResult) {
//   callback(users);
// }

// getSortedArrayObj(getResult, users);

// 3.
// function reversArr(arr) {
//   arr.reverse();
//   console.log(arr);
// }

// function toNumberArr(arr) {
//   arr = arr.filter(item => !isNaN(item));
//   arr = arr.map(Number);
//   console.log(arr);
// }

// function each(callback, arr) {
//   callback(arr);
// }

// // /const arr = [1, '4', 9, 'two'];
// // each(reversArr, arr);/

// const arr = [1, '4', false, 9, 'two'];
// each(toNumberArr, arr);

4.

let timerId = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

5.


function calling() {
  console.log('Звоню!')
};

function beeps() {
  setTimeout(() => {
      console.log('Идут гудки...')
      talk();
  }, 1000);

}

function talk() {
  console.log('Разговор')
}

calling();
beeps();






