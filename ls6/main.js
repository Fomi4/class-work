// Task 1
// function hippestOccurence(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }

//   return Array.from(new Set(newArr));
// }


// the same
// function hippestOccurence(arr) {
//   arr = arr.sort();
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1] && arr[i] != arr[i + 2]) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// console.log(hippestOccurence([2, 3, 2, 5, 6, 7, 2]));
// console.log(hippestOccurence([1, 2, 3, 3, "a", "b", "b", "c"]));
// console.log(hippestOccurence(["it", "keeps", "codding", "on", "or", "it", "gets"]));
// hippestOccurence([2, 3, 2, 5, 6, 7, 2]) -> [2];
// hippestOccurence([1, 2, 3, 3, "a", "b", "b", "c"]) -> [3, "b"];
// hippestOccurence(["it", "keeps", "codding", "on", "or", "it", "gets"]) -> ["it"];

// ....
// let nums = [1, 2, 3, 4, 5, 6];
// let nums2 = nums; // записывает и в один и в другой массив одинаковые данные
// let nums2 = nums.slice(); // делает отдельные массивы
// let nums2 = [...nums]; // расспаковывает массив //спред оператор
// nums2.push('a');
// nums2.push('b');
// nums2.push('c');
// nums.push('123');

// console.log(nums);
// console.log(nums2);

// ....
// let numbers = [1, 2, 3, 4, 5, 6];
// let numbers2 = [1, 2, 3, 4, 5, 6];
// let numbers3 = [1, 2, 3, 4, 5, 6];

// // let result = [numbers, numbers2, numbers3]; // создает массив с массивами
// let result = [...numbers, ...numbers2, ...numbers3]; // распаковывает все массивы в один

// console.log(result);

// function test(...args) {
//   console.log(args);
// }

// test(11, 2, 94, 'abc');


// ....

// function square(num) {
//   return num ** 2;
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newNums = nums.map(square);  // применяет функцию и записывает в массив function as first-class objects // функция верхнего порядка

// the same
// function square(num) {
//   return num ** 2;
// }
// let newNums = nums.map(x => x ** 2);  // применяет функцию и записывает в массив

// console.log(newNums);

// ....

// function isPos(x) {
//   return x > 0;
// }

// let nums = [-4, 12, 13, -80, 91, 48, -41];
// let newNums = nums.filter(isPos); // filter фильтрует по какому то значению

// the same
// let newNums = nums.filter(x => x > 0); // Arr function

// function isPos(x) {
//   return x > 0;
// }

// console.log(newNums);

// Task 2
// function extractDomain(url) {
//   return url.split('/')[2];
// }

// extractDomain("https://google.com/doodles") -> "google.com";
// extractDomain("https://vk.com/users") -> "vk.com";
// extractDomain("http://localhost:9090/books") -> "localhost:9090";
// console.log(extractDomain("https://google.com/doodles"));
// console.log(extractDomain("https://vk.com/users"));
// console.log(extractDomain("http://localhost:9090/books"));

// Arr function
// function add(x, y) {
//   return x + y;
// }

// let add = (x, y) => x + y;

// console.log(add(15, 20));

// let add = (x, y) => {
//   console.log(`Calling add width: ${x} and ${y}`);
//   return x + y;
// }

// console.log(add(15, 20));

// let add = (x, y) => x + y;
// let square = x => x ** 2;
// let hello = () => console.log('Hello world')
 
// console.log(add(15, 20));

// let person = {
//   name: 'Steve',
//   age: 13,
  // sayHello: function() {
  //   console.log(`Hi, my name is ${this.name}`)
  // }

//   sayHello: () => {
//     console.log(`Hi, my name is ${person.name}`)
//   }
// }

// person.sayHello();

// let nums = [-1, 69, -200, 38, 1, 4, -15];
// let nums1 = nums.map(x => x ** 2);
// let nums2 = nums.filter(x => x > 0);

// console.log(nums1, nums2);

// Task 3
// let deleteWorlds = arr => arr.filter(x => x[0] !== x[x.lenght - 1]);

// deleteWorlds(['space', 'escape', 'detect', 'dead', 'simple']) -> ['space', 'detect', 'simple'];
// console.log(deleteWorlds(['space', 'escape', 'detect', 'dead', 'simple']));


// Task 4
// let filterNums = nums => nums.filter(x => x - 50 > 0);

// filterNums([1, 60, 35, 98, -10, 203]) -> [60, 98, 203];
// console.log(filterNums([1, 60, 35, 98, -10, 203]));
// Task 5
let worldCounter = text => {

  let newText = text.toLowerCase();

  for (let i = 0; i < newText.lenght; i++) {
    if (newText[i] > 0) {
      newText = 2
    } else {
      newText = 1
    }
  }

  return newText;
}
// worldCounter('Hello, my name is John. My favorite color is blue'); ->
// -> {
//   'hello': 1,
//   'my': 2,
//   'name': 1,
//   'is': 2,
//   'john': 1,
//   'favorite': 1,
//   'color': 1,
//   'blue': 1
// }

console.log(worldCounter('Hello, my name is John. My favorite color is blue'));


// Task 6