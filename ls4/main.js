// переменные создавать внутри функции или передавать как аргументы

// function rangeSum(from, to) { // () агрументы
//   let counter = 0;
//   for (let i = from; i <= to; i++) {
//     counter += i;
//   }

//   return counter;
// }

// console.log(rangeSum(15, 50));
// console.log(rangeSum(10, 15));
// console.log(rangeSum(3, 7));

// function add(x, y) {
//   return x + y;
// }

// let num1 = add(15, 25);
// let num2 = add(20, 25);

// console.log(num1, num2);
// console.log(add(num1, num2));

// Task
// function stats(numbersString) {
//   let numbers = numbersString.split(' ');

//   let [odd, even, pos, neg, zero] = [0, 0, 0, 0, 0];

//   for (let i = 0; i < numbers.length; i++) {
//     let num = +numbers[i];
//     if (num === 0) {
//       zero += 1;
//       continue;
//     }

//     if (num > 0) {
//       pos += 1;
//     } else {
//       neg += 1;
//     }

//     if (num % 2 == 0) {
//       even += 1;
//     } else {
//       odd += 1;
//     }
//   }

//   return `odd number: ${odd} even number: ${even} | pos number: ${pos} | neg number: ${neg} | zero num: ${zero}` // шаблонные строки
// }

// console.log(stats("10 0 12 13 25 26 -13"));

// let test = ['test1', 'test2', 'test3', 'test4'];

// let index = 0;
// alert(test[index]);

// let next = confirm('Wanna see next?');

// while (next) {
//   index += 1;
//   alert(test[index]);
//   next = confirm('Wanna see next?');

//   if (index == test.length - 1) {
//     index = -1;
//   }
// }

// function culculateP(side) {
//   return side * 4;
// }

// console.log(culculateP(20));

function removeNeg(arr) {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    }
  }
  return pos;
}

console.log(removeNeg([12, -23, 45, -23]));

