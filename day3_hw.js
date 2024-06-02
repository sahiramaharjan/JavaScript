//1
let passWord = "MynameisKhan";
let len_pass = passWord.length;
if (len_pass > 12) {
  console.log("Strong Password");
} else if (len_pass >= 8 && len_pass <= 12) {
  console.log("Medium Password");
} else if (len_pass < 8) {
  console.log("Weak Password");
} else {
  console.log("Invalid");
}
// 2.
let character = "a";
if (character === character.toLowerCase() && "aeiou".includes(character)) {
  console.log("Vowel");
} else if (
  character === character.toUpperCase() &&
  "AEIOU".includes(character)
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
// 3.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 7;
if (guess === randomNumber) {
  console.log("Correct!");
} else if (guess < randomNumber) {
  console.log("Guess higher");
} else {
  console.log("Guess lower");
}
// 4.
let price = 100;
let taxRate = 3;
let finalPrice = price + (price * taxRate) / 100;
console.log("The final price with tax is $" + finalPrice.toFixed(2));
// 5.
let num1 = 10;
let num2 = 5;
let operator = "+";
let result;
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  console.log("Invalid operator");
}
console.log("The result is " + result);
// 6.
let age = 14;
if (age <= 12) {
  console.log("Recommended genre: Animation");
} else if (age <= 17) {
  console.log("Recommended genre: Action");
} else if (age >= 18) {
  console.log("Recommended genre: Drama");
} else {
  console.log("Invalid age");
}
// 7.
let dateInput = "2024-05-22";
let date = new Date(dateInput);
let day = date.getDay();
if (day === 6 || day === 0) {
  console.log("It's a weekend");
} else {
  console.log("It's a weekday");
}
// 8.
let number = -3;

if (number > 0) {
  console.log("The number is positive");
} else if (number === 0) {
  console.log("The number is zero");
} else {
  console.log("The number is negative");
}
// 9.
let multiply = 15;
if (multiply % 3 === 0 && multiply % 5 === 0) {
  console.log("The number is divisible by both 3 and 5");
} else if (multiply % 3 === 0) {
  console.log("The number is divisible by 3");
} else if (multiply % 5 === 0) {
  console.log("The number is divisible by 5");
} else {
  console.log("The number is not divisible by 3 or 5");
}
// 10.
let number1 = 6;
let number2 = 9;
let sum = number1 + number2;

if (sum % 2 === 0) {
  console.log("The sum is even");
} else {
  console.log("The sum is odd");
}
