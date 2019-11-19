// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let p1 = new Person('John', 'Strong');
// console.log(p1.fullName)

// p1.lastName = 'Power';
// console.log(p1.fullName)

// console.log(1 || 2)
// console.log(1 && 2)

///////

// class Person {
//   constructor(name, jobTitle) {
//     this.name = name;
//     this.jobTitle = jobTitle || "unemployed";
//   }
// }

// let p1 = new Person('Steve', null);
// console.log(p1.jobTitle);

///////

// class Product {
//   constructor(type, name, price, quantity) {
//     this.type = type;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   add(amount) {
//     this.quantity += amount;
//   }
//   setDiscount(percent) {
//     this.price -= this.price * (percent / 100);
//   }
// }

// class User {
//   constructor(name, email, money) {
//     this.name = name;
//     this.email = email;
//     this.money = money;
//     this.cart = null;
//   }
// }

// class Cart {
//   constructor(user) {
//     this.user = user;
//     user.cart = this;
//     this.products = [];
//   }

//   get sum() {
//     return this.products.reduce((x, y => x.price + y.price), 0);
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }

//   isAvailablePayment() {
//     return this.user.money >= this.sum;
//   }

//   checkOut() {
//     if (this.isAvailablePayment()) {
//       this.user.money -= this.sum;
//       this.products.forEach(x => x.quantity -= 1);
//       this.products = [];
//     }
//   }
// }

// let u1 = new User('Steven', 'blast@google.com', 200);
// let p1 = new Product('Food', 'Chips', 13.50, 1);
// let c1 = new Cart(u1);
// c1.addProduct(p1);
// console.log(u1);
// console.log(c1);

// addProduct
// isAvailablePayment -> returns true if a user has enough money to pay for products
// checkOut -> убирает деньги у пользователя и продукты из корзины
// get sum  -> считает сумму продуктов в корзине

///////////

class Person {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  intro() {
    return `Hi. My name is ${this.name}. I'm from ${this.city} :)`
  }
}

// class Student {
//   constructor(name, city, university) {
//     this.name = name;
//     this.city = city;
//     this.university = university;
//   }

//   intro() {
//     return `Hi. My name is ${this.name}. I'm from ${this.city} :)`
//   }
// }

// class Student extends Person {
//   constructor(name, city, university) {
//     super(name, city);
//     this.university = university;
//   }

//   intro() {
//     return `${super.intro()} I study at ${this.university}.`
//   }
// }

// // let s1 = new Student('Steven', 'London', 'Oxford');
// // console.log(s1);
// // console.log(s1.intro())

// class Teacher extends Person {
//   constructor(name, city, salary) {
//     super(name, city)
//     this.salary = salary;
//   }

//   intro() {
//     return `Sorry I have signed NDA`;
//   }
// }

// DOM
// Promise
// ajax

// npm
// -js
// webpack
// vue.js