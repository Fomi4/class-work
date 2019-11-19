// let person1 = {
//   name: 'Steve',
//   age: 11
// }

// let person2 = {
//   name: 'Jade',
//   age: 30
// }

// let person3 = {
//   name: 'Sub-Zero',
//   age: 24
// }

// function Person(name, age) {
//   return {
//     name: name,
//     age: age
//   }
// }


// атрибуты
// class Person {
//   constructor(name, age) { // метод(функция)
//     this.name = name;
//     this.age = age;
//   }
// }


// let p1 = new Person('Sub-zero', 24);

// console.log(p1);
// console.log(p1.name);
// console.log(p1.age);


// методы
// class Person {
//   constructor(name, age) { // метод(функция)
//     this.name = name;
//     this.age = age;
//   }

//   sayHello(to) { //метод sayHello
//     return `Hi, ${to.name} my name is ${this.name}! I'm ${this.age} years old`
//   }
// }


// let p1 = new Person('Sub-zero', 24);
// let p2 = new Person('Jack', 37);

// console.log(p1);
// console.log(p1.sayHello(p2));
// console.log(p2.sayHello(p1));


// .....
// class Person {
//   constructor(name, age) { // метод(функция)
//     this.name = name;
//     this.age = age;
//     this.friends = [];
//   }

//   addFriend(person) {
//     if (person.age >= 16) {
//       this.friends.push(person);
//       person.friends.push(this);
//       console.log(this.sayHello(person));
//     } else {
//       throw new Error('SORRY!')
//     }
//   }

//   sayHello(to) { //метод sayHello
//     return `Hi, ${to.name} my name is ${this.name}! I'm ${this.age} years old`;
//   }

//   sayHelloToFriends() {
//     this.friends.forEach(f => console.log(this.sayHello(f)));

//     // the same
//     // for (let i = 0; i < this.friends.length; i++) {
//     //   console.log(this.sayHello(this.friends[i]));
//     // }
//   }
// }


// let p1 = new Person('Sub-zero', 24);
// let p2 = new Person('Jack', 37);
// let p3 = new Person('Vitas', 11);
// let p4 = new Person('Scorpion', 24);

// // p1.friends.push('names');
// // console.log(p1);
// // p1.addFriend(p3); // ERROR
// p1.addFriend(p2); // вызов метода
// p1.addFriend(p4); // вызов метода

// p1.sayHelloToFriends(); // вызов метода
// // console.log(p1);
// // console.log(p2);

// работа с несколькими классами
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.group = null;
//   }
// }

// class Group {
//   constructor(name, maxStudents) {
//     this.name = name;
//     this.maxStudents = maxStudents;
//     this.students = [];
//   }

//   addStudent(student) {
//     if (this.students.length + 1 <= this.maxStudents) {
//       this.students.push(student);
//       student.group = this;
//     } else {
//       throw new Error("The group is null");
//     }
//   }
// }

// let g1 = new Group('Front-End', 12);
// let s1 = new Student('Sub-Zero', 24);
// let s2 = new Student('Scorpion', 24);

// g1.addStudent(s1);
// g1.addStudent(s2);

// console.log(g1);
// console.log(s1);

// Task
// Artist - name, age, genre, songs=[]
// - addSong(song) -> songs[]

// Song - name, year, genre, autor=null;
class Song {
  constructor(name, year, genre) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.autor = null;
  }
}

class Artist {
  constructor(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.songs = [];
  }

  addSong(song) {
      this.songs.push(song);
      song.autor = this;
  }
}

let a1 = new Artist('Igor Scl', 75, 'Pop');
let s1 = new Artist('Komarovo', 2014, 'Pop');

a1.addSong(s1);
console.log(a1);
