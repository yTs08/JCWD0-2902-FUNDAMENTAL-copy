// nomor 1
console.log("----nomor 1----");
let numb = 9;
let multiplication = 1;
for (let i = 1; i <= 10; i++) {
  console.log(`${numb} X ${i}`);
}

// nomor 2
console.log("----nomor 2----");

const words = "madam";
if (words == String);
console.log("palindrome");
if (words != String) console.log("not palindrome");

// nomor 3
console.log("----nomor 3----");

const centimeter = 200000;
const kilometer = centimeter / 100000;
console.log(kilometer, "kilometer");

// nomor 4
console.log("----nomor 4----");

const currency = 2000;
const rupiah = "Rp.";
const desimal = ",00";
console.log(rupiah + currency + desimal);

// nomor 5
console.log("----nomor 5----");
let kata = "hello world";
let kata2 = kata.replace("ell", "");
console.log(kata2);

// // nomor 6
// console.log("----nomor 6----");
// const letter = "hello world";

// nomor 9
console.log("----nomor 9----");
const nmb1 = 42;
const nmb2 = 27;
if (nmb1 > nmb2) console.log(nmb1);
if (nmb2 > nmb1) console.log(nmb2);

// nomor 10
console.log("----nomor 10----");
const ex = 42;
const ex1 = 27;
const ex2 = 18;
let max, mid, min;
if (ex > ex1) {
  if (ex1 > ex2) {
    max = ex;
    mid = ex1;
    min = ex2;
  } else {
    if (ex2 > ex) {
      max = ex2;
      mid = ex;
      min = ex1;
    }
    max = ex;
    mid = ex2;
    min = ex1;
  }
} else {
  if (ex > ex2) {
    max = ex1;
    mid = ex;
    min = ex2;
  } else {
    max = ex1;
    mid = ex2;
    min = ex;
  }
}
console.log(`${min},${mid},${max}`);

// 11
console.log("----nomor 11----");
let str = "hello";
let number = 2;
let data_type = 3;
let String = str.replace("");
console.log(str);
