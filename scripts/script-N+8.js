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

function getResult(users) {
  users.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
  console.log(users);
}

const users = [
  { name: 'Jon', age: 22 },
  { name: 'Richard', age: 18 },
  { name: 'Anton', age: 32 },
  { name: 'Lida', age: 23 },
  { name: 'Bob', age: 44 }
];

function getSortedArrayObj(callback, getResult) {
  callback(users);
}

getSortedArrayObj(getResult, users);

3.
function each() {
  const arr = [1, '4', 9, 'two'];

  arr.reverse();

  console.log(arr);

}

5.


function calling() {
  console.log('Звоню!')
};

function beeps() {
  setTimeout(() => {
      console.log('Идут гудки...')
  }, 1000);
 
}

function talk() {
  console.log('Разговор')
}

calling();
beeps();
talk();





