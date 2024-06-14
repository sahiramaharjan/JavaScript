//1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//2
let j = 1;
while (j <= 10) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}
//3
let sum = 0;
for (let k = 1; k <= 10; k++) {
  sum += k;
}
console.log(sum);
//4
let factor = 1;
result = 1;
while (factor <= 5) {
  result = result * factor;
  factor++;
}
console.log(result);
//5
for (let l = 1; l <= 5; l++) {
  let square = l * l;
  console.log(square);
}
//6
for (let m = 1; m <= 5; m++) {
  let cube = m * m * m;
  console.log(cube);
}
//7
let array = ["Bella", "Mei", "Enjo", "Jojo"];
for (let n = 0; n <= array.length - 1; n++) {
  console.log(array[n]);
}
//8
let arr = [1, 3, 4, 5, 8];
let o = 0;
let arr_sum = 0;
while (o <= arr.length - 1) {
  arr_sum += arr[o];
  o++;
}
console.log(arr_sum);
//9
let num = [32, 93, 83, 5, 3];
for (let p = num.length - 1; p >= 0; p--) {
  console.log(num[p]);
}
//10
let greatest = [22, 3, 4, 55, 776, 92];
let large = 0;
let q = 0;
while (q <= greatest.length - 1) {
  if (large < greatest[q]) {
    large = greatest[q];
  }
  q++;
}
console.log("The largest number in the array is :", large);
//11
let even_sum = 0;
for (let r = 1; r <= 20; r++) {
  if (r % 2 === 0) {
    even_sum += r;
  }
}
console.log("The sum of all even numbers from 1 to 20 is", even_sum);
//12
let odd_product = 1;
let s = 1;
while (s <= 15) {
  if (s % 2 === 1) {
    odd_product = odd_product * s;
  }
  s++;
}
console.log("The product of all odd numbers from 1 to 15 is", odd_product);
//13
for (let t = 1; t <= 5; t++) {
  let row = "*";
  console.log(row.repeat(t));
}
//14
let u = 10;
while (u >= 1) {
  console.log(u);
  u--;
}
//15
let factorial = 1;
for (let v = 1; v <= 6; v++) {
  factorial = factorial * v;
}
console.log("The factorial of 6 is", factorial);
//16
let w = 1;
let add = 0;
while (w <= 3) {
  add += w;
  w++;
}
console.log("The sum is ", add);
//17
for (let x = 5; x >= 1; x--) {
  let rows = "";
  for (let y = 1; y <= x; y++) {
    rows += x;
  }
  console.log(rows);
}
//18
let z =0;
let a= 1;
let count =0;
console.log(z);
count++;
console.log(a);
count++;
while (count < 10){
  let next = z+ a;
  console.log(next);
  z=a;
  a=next;
  count++;
}
//19
for (let b=2; b<=20;b++){
  let prime =true;
  for (let c = 2; c<=Math.sqrt(b); c++){
    if (b%c===0){
      prime=false;
      break;
    }
  }
  if (prime){
    console.log(b)
  }
}
//20
let d = 5;
while(d>=1){
  console.log(d);
  d--;
}
