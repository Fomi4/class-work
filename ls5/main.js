// let a = 0; // 0 - false
// let b = ''; // b.length > 0
// let c = false;
// let d = true; // if (d === true) -> if (d)
// let e = []; // object
// let f = null; // null
// let g; // undefine

// if (e) {
//   console.log('yes');
// }

// returns

// let nums = [1, 2, 3, -1, 4, 5, 6];

// function allPositives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allPositives(nums));

// function includesA(str) {
//   if (str.includes('A')) {
//     return true;
//   } // the same return str.includes('A') в одну строку

//   return false;
// }

// const MAX_AGE = 3; // нельзя переопределить

// const a = 15;

// if (a) {
//   let b = 13; // привязывается к блоку
//   var c = 20; // не привязывается к блоку
// }

// console.log(b, c);

// let person = {
//   name: 'Steve',
//   age: 30,
//   country: 'USA',
//   language: ['sdsd', 'sdsd'],
//   school: {
//     name: 'Best School',
//     country: 'USA',
//     studentNumber: 1300
//   }
// };

// console.log(person.name); // console.log(person['name'])

// person.car = 'BMW';

// console.log(person);
// console.log(person.school.name);


// Task

// function addToFriendsList(person, friend) {
//   person.friends.push(friend);
//   return person;
// }

// let person1 = {
//   name: 'Steve',
//   age: 30,
//   country: 'USA',
//   friends: []
// };

// let person2 = {
//   name: 'Joun',
//   age: 30,
//   country: 'USA'
// };

// console.log(addToFriendsList(person1, person2));

// let peaple = [
//   {
//     name: 'Steve',
//     country: 'USA'
//   },
//   {
//     name: 'Jack',
//     country: 'Poland'
//   },
//   {
//     name: 'Jane',
//     country: 'Germany'
//   },
//   {
//     name: 'Noah',
//     country: 'UK'
//   }
// ];

// for (let i = 0; i < peaple.length; i++) {
//   console.log(peaple[i].name);
// }

// Task

// function createPerson(name, age, city) {
//   return {
//     name: name,
//     age: age,
//     city: city
//   };
// }

// console.log(createPerson('Vasya', 30, 'USA'));

let people = [
  {
    name: 'Steve',
    language: ['German']
  },
  {
    name: 'Steve2',
    language: ['English', 'Ukranian']
  },
  {
    name: 'Steve3',
    language: ['Spanish', 'English']
  },
  {
    name: 'Steve4',
    language: ['Ukranian']
  }
];

function onlyEnglish(people) {
  let newPeople = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].language.includes('English')) { // includes - отвечает true или false
      newPeople.push(people[i]);
    }
  }
  return newPeople;
}

console.log(onlyEnglish(people));