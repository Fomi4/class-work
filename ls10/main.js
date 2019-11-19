// Task 1

// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//     this.authors = [];
//   }

//   newBook(name, year, author) {
//     let book = new Book(name, year, author);
//     this.books.push(book);
//     author.books.push(book);

//     if (!this.authors.includes(author)) {this.authors.push(author)}
//     return book;
//   }
// }

// class Book {
//   constructor(name, year, author) {
//     this.name = name;
//     this.year = year;
//     this.authors = author;
//   }
// }

// class Author {
//   constructor(name, country, birthday) {
//     this.name = name;
//     this.country = country;
//     this.birthday = birthday;
//     this.books = [];
//   }
// }

// let lib = new Library('Best Lib');
// let author = new Author('Vasya', 'UA', 1980);
// let book = lib.newBook('C++', 2003, author);

// console.log(book);
// console.log(lib);

// Task 2

// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//     this.authors = [];
//   }

//   newBook(name, year, author) {
//     let book = new Book(name, year, author);
//     this.books.push(book);
//     author.books.push(book);

//     if (!this.authors.includes(author)) {this.authors.push(author)}
//     return book;
//   }

//   groupByAuthor(author) {
//     return this.books.filter(book => book.author == author)
//   }

//   groupByYear(year) {
//     return this.books.filter(book => book.year == year)
//   }
// }

// class Book {
//   constructor(name, year, author) {
//     this.name = name;
//     this.year = year;
//     this.authors = author;
//   }
// }

// class Author {
//   constructor(name, country, birthday) {
//     this.name = name;
//     this.country = country;
//     this.birthday = birthday;
//     this.books = [];
//   }
// }

// let lib = new Library('Best Lib');
// let author = new Author('Vasya', 'UA', 1980);
// let book = lib.newBook('C++', 2003, author);

// console.log(book);
// console.log(lib);

// Task 3

// class Account {
//   constructor(accNumber) {
//     this.accNumber = accNumber;
//     this.balance = 0.0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   witdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       throw new Error ('Not enouth money')
//     }
//   }
// }

// class SavingsAccount extends Account {
//   constructor(accNumber) {
//     super(accNumber) {
//       this.interest = 0;
//     }

//     addInterest(amount) {
//       this.interest += amount;
//     }
//   }
// }

// class CurentAccount extends Account {
//   constructor(accNumber) {
//     super(accNumber);
//     this.overdraft = 100;
//   }

//   receiveLetter(text) {
//     console.log(text);
//   }
// }

// class Bank {
//   constructor() {
//     this.accounts = [];
//   }

//   openAccount(accNumber, accType) {
//     const accountTypes = {
//       "default": Account,
//       "savings": SavingsAccount,
//       "current": CurentAccount
//     };

//     return new accountTypes[accType](accNumber);
//   }

//   closeAccount(accNumber) {
//     let acc = this.accounts.reduce((x, y) => x.accNumber == accNumber ? x : y);
//     let index = this.accounts.indexOf(acc);
//     this.accounts[index] = undefined;
//   }

//   update(interest) {
//     this.accounts.forEach(a => {
//       if (a instanceof SavingsAccount) {
//         a.addInterest(interest);
//       } else if (a instanceof CurentAccount) {
//         a.receiveLetter("You are in overdraft!")
//       }
//     })
//   }
// }


