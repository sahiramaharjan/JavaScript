//1
const fullName = "Sahira Maharjan";
let age = 19;
console.log(`My name is ${fullName} and I am ${age} years old.`);
//2
var num = 10;
let multi = num * num;
console.log("The final value is :", multi);
//3
let character = "a";
if (character >= "A" && character <= "Z")
  console.log(`${character} is UpperCase Character`);
else if (character >= "a" && character <= "z")
  console.log(`${character} is LowerCase Character`);
else console.log("The character not defined.");
//4
let num1 = 15;
let num2 = 25;
console.log(`The sum is ${num1 + num2}`);
substract = num2 - num1;
console.log(`The difference is ${substract}`);
//5
let product_price = 1200;
let discount = product_price * 0.1;
let discount_price = product_price - discount;
console.log(
  `The discounted price after applying 10% discount is ${discount_price}`
);
