//JAVASCRIPT MINI PROJECT ASSIGNMENT
//1 PROMISE
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Sahil Maharjan", age: 24 },
        { id: 2, name: "Shivani Maharjan", age: 10 },
        { id: 3, name: "Aarav Maharjan", age: 5 },
      ]);
    }, 2000); //2 second delay
  });
}
fetchData()
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
//2 CLOSURE
function createCounter() {
  let count = 0;
  function increment() {
    count += 1;
  }
  function getCount() {
    return count;
  }
  return { increment, getCount };
}
const counter = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

//3 CALLBACK
function processData(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const array = [5, 6, 7, 8, 9];
function squaredNumbers(array) {
  return array * array;
}
const square = processData(array, squaredNumbers);
console.log(square);
//4 ASYNC/ AWAIT
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Sahil Maharjan", age: 24 },
        { id: 2, name: "Shivani Maharjan", age: 10 },
        { id: 3, name: "Aarav Maharjan", age: 5 },
      ]);
    }, 2000); // 2 second delay
  });
}
async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();
//5 ARRAY MANIPULATION (MAP)
const numbers = [1, 2, 3, 4, 5];
function arrayMap() {
  const doubleNumber = numbers.map((num) => num * 2);
  return doubleNumber;
}
const double = arrayMap();
console.log(double);
//ARRAY MANIPULATION (FILTER)
const arr = [10, 5, 30, 9, 3, 67];
function arrayFilter() {
  const filterNumber = arr.filter((num) => num < 10);
  return filterNumber;
}
const filter = arrayFilter();
console.log(filter);
//7 ARRAY MANIPULATION (FIND)
const number = [10, 25, 30, 9, 3, 67];
function arrayFind() {
  const findNumber = numbers.find((num) => num > 15);
  return findNumber;
}
const find = arrayFind();
console.log(find);
//8 ARRAY MANIPULATION (REDUCE)
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  console.log(add(1, 2, 3));
//9 OBJECT MANIPULATION
function transformUsers(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}
const users = [
    { id: 1, name: 'Sanjay', age: 20},
    { id: 2, name: 'Bibek', age: 30 },
    { id: 3, name: 'Anne', age: 22 }
];
console.log('Transformed users:', transformUsers(users)); 
//10 Classes and Objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

//11 Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying.`;
    }
}
const person = new Person('Sahira Maharjan', 19);
console.log(person.describe()); 
const student = new Student('Sahil Maharjan', 20, 'A');
console.log(student.describe());
console.log(student.study());    
//14 Complex Array Manipulation
function getUniqueHobbies(users) {
    return [...new Set(users.flatMap(user => user.hobbies))];
}
const hobbyUsers = [
    { name: 'Manish', hobbies: ['reading', 'swimming'] },
    { name: 'Aryam', hobbies: ['reading', 'cycling'] },
    { name: 'Sabbu', hobbies: ['swimming', 'cycling'] }
];
console.log('Unique hobbies:', getUniqueHobbies(hobbyUsers)); 
// Conceptual Questions
/*
1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
- Promises are used in JavaScript to handle asynchronous operations. Promise makes the code easier to read and understand and also handles errors effieciently.

2. What is a closure in JavaScript? Provide an example.
- In JavaScript, a closure is a function that remembers the variables from where it was generated, even if it is performed outside of that scope.
Example:
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); 

3. What is a callback function and why is it used in JavaScript?

- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It's used to handle asynchronous operations. 

4. What are async/await in JavaScript and how do they improve asynchronous programming?

- async and await are keywords in JavaScript that make working with asynchronous code easier and more readable. They allow you to write asynchronous code that looks like synchronous code. async makes a function return a promise, and await pauses the execution of the function until the promise is resolved. This helps avoid deeply nested callbacks and makes the code more readable.

5. Write the difference between ES6 and JS.

-  ES6 (ECMAScript 6), also known as ECMAScript 2015, is a version of JavaScript that introduced many new features to the language. JavaScript (JS) is the language itself, and ES6 is just one of its versions. ES6 brought improvements and new features like arrow functions, classes, template literals, and more, making the language more powerful and easier to use.

6. What are some of the major features introduced in ES6?

- Some major features introduced in ES6 include:

    Arrow Functions: Shorter syntax for writing functions.
    Classes: A new way to create objects and handle inheritance.
    Template Literals: Enhanced way of working with strings, including multi-line strings and string interpolation.
    Destructuring: A way to unpack values from arrays or properties from objects into distinct variables.
    Modules: A way to split code into separate files and import/export functions, objects, or variables.
    Promises: A new way to handle asynchronous operations*/
    hello