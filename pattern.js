//1 Right- Angled Triangle
for (let a = 1; a <= 5; a++) {
  let row = "*";
  console.log(row.repeat(a));
}
//2 Solid Rectangle
let rows = "";
let b = 5;
for (let c = 1; c <= b; c++) {
  for (let num = 1; num <= 5; num++) {
    rows += "*";
  }
  rows += "\n"; //creates a newline
}
console.log(rows);
//3 Inverted Triangle
let d = 5;
for (let e = d; e >= 1; e--) {
  let pat = "*";
  console.log(pat.repeat(e));
}
// Pyramid
let f = 5;
let patt = "";
for (let g = 1; g <= f; g++) {
  for (let space = 1; space <= f - g; space++) {
    //for space in right and left side
    patt += " ";
  }
  for (let star = 1; star <= 2 * g - 1; star++) {
    patt += "*";
  }
  patt += "\n";
}
console.log(patt);
//5 Inverted Pyramid
let h = 5;
let patts = "";
for (let i = h; i >= 1; i--) {
  for (let space = 1; space <= h - i; space++) {
    //for space in right and left side
    patts += " ";
  }
  for (let stars = 1; stars <= 2 * i - 1; stars++) {
    patts += "*";
  }
  patts += "\n";
}
console.log(patts);
//6 Hollow Rectangle
let j = 5;
let string = "";
for (let k = 1; k <= j; k++) {
  for (let nums = 1; nums <= 5; nums++) {
    if (k == 1 || k == j) {
      string += "*";
    } else if (nums == 1 || nums == 5) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
//7 Cross
let pattern = "";
let size = 5;
for (let x = 1; x <= size; x++) {
  for (let y = 1; y <= size; y++) {
    if (y === x || y === size - x + 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
//9 Number Triangle
let m = 5;
let str = "";
for (let n = 1; n <= m; n++) {
  for (let numr = 1; numr <= n; numr++) {
    str += numr;
  }
  str += "\n";
}
console.log(str);
//10 Repeated Number Triangle
let q = 5;
let patterns = "";
for (let r = 1; r <= q; r++) {
  for (let numb = 1; numb <= r; numb++) {
    patterns += r;
  }
  patterns += "\n";
}
console.log(patterns);
//11 Inverted Number Triangle
let s = 5;
let str_pattern = "";
for (let t = 1; t <= s; t++) {
  for (let w = 1; w <= 6 - t; w++) {
    str_pattern += w;
  }
  str_pattern += "\n";
}
console.log(str_pattern);
//12 Inverted number square
let number = "";
let v = 5;
for (let i = 1; i <= v; i++) {
  for (let j = v; j >= 1; j--) {
    number += j;
  }
  number += "\n";
}
console.log(number);
//13 Right-Aligned Triangle
let rows1 = 5;
let pattern1 = "";
for (let n = 1; n <= rows1; n++) {
  for (let space = 1; space <= rows1 - n; space++) {
    pattern1 += " ";
  }
  for (let num = 1; num <= n; num++) {
    pattern1 += "*";
  }
  pattern1 += "\n";
}
console.log(pattern1);
//15 Alphabet Triangle
let rows2 = 5;
let string1 = "";
for (let i = 1; i <= rows2; i++) {
  for (let j = 1; j <= i; j++) {
    string1 += String.fromCharCode(64 + j);//converts unicode values into characters
  }
  console.log(string1);
}
