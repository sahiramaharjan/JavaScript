//1
function add(a, b) {
  sum = a + b;
  return `The sum is ${sum}`;
}
console.log(add(10, 3));
//2
const array = [10, 20, 30, 40, 50];
function cal_avg(array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
const average = cal_avg(array);
console.log(`The average of an array is ${average}`);
//3
function odd_even(x) {
  let result = "";
  if (x % 2 === 0) {
    result = "Even";
  } else if (x % 2 === 1) {
    result = "Odd";
  }
  return result;
}
const value = odd_even(18);
console.log(value);
//4
function reverse(str) {
  let string_split = str.split(""); // split()method splits a sting into substring
  let string_reverse = string_split.reverse(); //reverse() method reverses an array
  let string_join = string_reverse.join(""); //join() method joins all elements
  return string_join;
}
console.log(reverse("monday"));
//5
function MaxValue(numbers) {
  return Math.max(...numbers);
}
const maximum = MaxValue([100, 72, 30, 4, 53]);
console.log(maximum);
//6
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
const conversion = celsiusToFahrenheit(100);
console.log(conversion);
//7
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const random = randomBetween(1, 10);
console.log(random);
//8
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
const string = isPalindrome("madam");
console.log(string);
// 9
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const capital = capitalizeFirstLetter("let's go!");
console.log(capital);
//10
function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
const factor = factorial(7);
console.log(factor);
//11
function countOccurrences(array, element) {
  return array.reduce(
    (count, current) => (current === element ? count + 1 : count),
    0
  );
}
const occur = countOccurrences([1, 2, 2, 3, 4, 2], 2);
console.log(occur);
//12
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
const leap = isLeapYear(2029);
console.log(leap);
//13
function mergeAndSortArrays(array1, array2) {
  return [...array1, ...array2].sort((a, b) => a - b);
}
console.log(mergeAndSortArrays([3, 1, 4], [5, 2, 6]));
//14
function toRoman(num) {
  const romanNumeralMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let roman = "";
  for (const { value, numeral } of romanNumeralMap) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }
  return roman;
}
console.log(toRoman(1990));
//15
function secondSmallest(numbers) {
  if (numbers.length < 2) return null;
  let first = Infinity,
    second = Infinity;
  for (const num of numbers) {
    if (num < first) {
      second = first;
      first = num;
    } else if (num < second && num !== first) {
      second = num;
    }
  }
  return second;
}
console.log(secondSmallest([3, 1, 2, 4]));
//16
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log(areaOfCircle(5));

//17
function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
console.log(truncateString("Hello, world!", 5));
//18
function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345"));
//19
function removeFalsyValues(array) {
  return array.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, "a"]));
//20
function uniqueArray(array) {
  return [...new Set(array)];
}
console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));
