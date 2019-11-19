// let arr = ['Kate', 'John', 'Steave', 'Robert', 'Jane']; // Массив

// console.log(arr);
// console.log(arr[0]); // обратиться к первому эл.
// console.log(arr.length); // длина массива

// arr.push('Kevin'); // Добавить эл в конец массива
// console.log(arr);

// arr.pop(); // удалить последний эл с массива
// console.log(arr);

// console.log(arr.reverse()); // в обратном направлении
// console.log(arr.sort()); // сортировка

// console.log(arr.slice(1, 3)); // срез от какого по какой эл.
// arr.splice(1, 2); // выбрать элементы с массива с которым нужно поработать, удалит [index, количество]
// arr.splice(2, 0, 'Robert', 'test'); // сначала удалит потом добавит эл [index, количество]


// arr.unshift("Tim"); // добавяет в начало
// arr.shift("Tim"); // удаляет сначала
// console.log(arr);
// console.log(arr.join(", ")); // преобразует массив в строку

// Task 1
// let str = prompt("Enter text:");

// let strArr = str.split(' ').slice(0, 4).join(" "); // преобразовываем строку в массив, потом делаем срез с 4 и до конца.

// console.log(strArr);

// Task 2
// let names = ['Bob', 'Lee', 'Kevin', 'Steve', 'Jake'];

// let name = prompt("Enter name:");


// if (!names.includes(name)) {
//   names.push(name);
// } else {
//   let str = names.indexOf(name);
//   names.splice(str, 1);
// }

// ИЛИ

// if (names.includes(name)) {
//   let str = names.indexOf(name);
//   names.splice(str, 1);
// } else {
//   names.push(name);
// }

// console.log(names);

// Циклы

// let nums = [4, 9, 11, 12, 38];
// console.log(nums);

// for (let i = 0; i < nums.length; i++) {
//   console.log(i, nums[i]);
// }

// let squares = [];
// for (let i = 0; i < nums.length; i++) {
//   squares.push(nums[i] ** 2);
// }
// console.log(squares);

// for (let i = 0; i <= 500; i++) {
//   console.log(i);
// }


// двухмерные массивы
// let nums = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];
// console.log(nums);
// console.log(nums.length);
// console.log(nums[1][1]);

// let names = ['Steave', 'Ann', 'Scott', 'Dave', 'Sam', 'Kavin'];
// let newNames = [];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith('S')) {
//     newNames.push(names[i]);
//   }
// }

// console.log(newNames);

// Task линейный поиск
// let names = ['Steave', 'Ann', 'Scott', 'Dave', 'Sam', 'Kavin'];
// let name = 'Scott';

// for (let i = 0; i < names.length; i++) {
//   console.log('go');
//   if (names[i] == name) {
//     console.log(i);
//     break; // прерываение массива, выход из него
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0) {
//     continue; // перекидывает на следующую итерацию, пропускает итерацию
//   }
//   console.log(i);
// }

// Цикл wile
let i = 0;
while (i != 100) {
  console.log(i);
  i++;
}

// let num = 3;
// let guess = prompt("Enter any num:");

// while (num != guess) {
//   guess = prompt("Enter any num:");
// }

// let str = 'Hello World';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// Task
// let num = [55, -10, 13, -814, 305, 96, -1, 15];
// let positives = [];

// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     positives.push(num[i])
//   }
// }

// console.log(positives);

// Task
// let worlds = ['cat', 'simple', 'test', 'fetch', 'hi', 'ball'];
// let newWorlds = [];

// for (let i = 0; i < worlds.length; i++) {
//   if (worlds[i].length % 2 == 0) {
//     newWorlds.push(worlds[i]);
//   }
// }
// console.log(newWorlds);