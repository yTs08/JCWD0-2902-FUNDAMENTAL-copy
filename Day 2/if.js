/** @format */

let age = 17;

if (age > 17) console.log("sudah bisa buat KTP");
if (age >= 17) console.log("sudah bisa buat KTP");

if (age < 17) console.log("belum bisa buat ktp");
if (age <= 17) console.log("apakah muncul");

if (1 == "1") console.log("1 dan string 1");
if (1 === "1") console.log("tidak akan muncul");

const nilai_akhir = 84;

if (nilai_akhir >= 85) console.log("lulus");
else console.log("tidak lulus");

if (1 != 5) console.log("1 bukan 5");

let grade = "A";
if (grade === "A") {
  console.log("excelent result");
  console.log("keren banget");
} else if (grade === "B") console.log("great result");
else if (grade === "C") console.log("good result");
else if (grade === "D") console.log("bad result");
else console.log("invalid grade");

const a = 1;
const b = 5;
if (typeof a == typeof b) console.log("tipe data sama");

console.log(typeof typeof a + 5);

const student_name = "naruto";
if (student_name == "naruto") console.log("namanya naruto");
else console.log("bukan naruto");

if (student_name) console.log("muncul");
if (!0) console.log("muncul ga");
// 0 = false
// ! = not
// not false = true
if (!(15 > 10)) console.log("test");

//falsy
if (!0) console.log("0  false");
if (!"") console.log("empty string  false");
if (!false) console.log("false adalah false");
if (!null) console.log("null adalah false");
if (!undefined) console.log("undefined false");
if (!NaN) console.log("NaN false");

//truthy
if (1) console.log("selain number 0 true");
if (" ") console.log("selain empty string true");
if ({}) console.log("obj kosong true");
if ([]) console.log("array kosong true");
if (true) console.log("boolean true adalah true");
if ("false") console.log("string false adalah true");

const obj = {
  name: undefined,
};
if (!obj.name) console.log("ini false");

console.log(NaN + "1");
console.log(undefined + 1);
console.log(typeof (null + 1));
console.log(null + "abc");
console.log(null + true);
console.log(null + undefined);

// string + number = string
//boolean + number = number
//undefined + number = number
//null + number = number
//null + string = nullstring
//null + boolean = number
//null + undefined = NaN

const x = 11;
const y = 10;
if (x < 10 && y > 1)
  console.log("x lebih kecil dari 10 DAN y lebih besar dari 1");
if ([] && {} && " " && 0) console.log("ini true");

const email = "jordan@mail.com";
const password = "password";

const input_email = "jordan@mail.com";
const input_password = "password";
if (email == input_email && password == input_password)
  console.log("welcome user ");
else console.log("wrong email or password");

if (typeof email == "string" || typeof password == "number") {
  console.log(typeof email == "string", email);
  console.log(typeof password == "number", password);
  console.log("salah satu wajib true");
}

const nama = "budi";
const umur = 15;
const address = "jogja";
if (address == "bsd") {
  if (nama == "jordan") {
    if (umur > 17) console.log("jordan sudah punya ktp");
    else console.log("jordan belum punya ktp");
  } else console.log("bukan jordan");
} else console.log("bukan di bsd");

//ternary operator
console.log(0 ? "true karena bukan 0" : "false karena 0");
console.log(
  nama == "budi"
    ? address == "bsd"
      ? "dia tinggal di bsd"
      : "bukan di bsd"
    : "bukan budi"
);

console.log(8 && 0);
// &&
// 22nya true, kanan
// kiri false, kanan true , kiri
// kiri true,  kanan false , kanan

console.log(7 || 0);
// ||
// 22nya true, kiri
//kiri false,kanan true, kanan
//kiri true,kanan false, kiri

console.log(7 || (0 && 8));
console.log((7 && 0) || 8);

if (!(8 > 10 && 8 < 5) || 5 == 8) console.log("true");

const numberToCheck = 7;
console.log(numberToCheck, numberToCheck % 2 === 0 ? "is even" : "is odd");
let isEven;
if (numberToCheck % 2 === 0) isEven = true;
else isEven = false;
console.log(numberToCheck, "is", isEven ? "even" : "odd");
