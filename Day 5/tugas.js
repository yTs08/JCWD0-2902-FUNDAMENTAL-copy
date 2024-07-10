// nomor 1
console.log("----nomor 1----");
let arr16 = [12, 5, 23, 18, 4, 45, 32];
let lowest = Math.min(...arr16);
let highest = Math.max(...arr16);
let average = arr16.reduce((a, b) => a + b, 0) / arr16.length;
console.log(
  arr16,
  "=>",
  "lowest : " + lowest,
  "highest : " + highest,
  "average : " + average
);

// nomor 2
console.log("----nomor 2----");
const words1 = ["apple", "banana", "cherry", "date"];

let words = ["apple", "banana", "cherry", "date"];
let formattedString = formatWords(words);
function formatWords(words) {
  if (words.length === 0) {
    return "";
  } else if (words.length === 1) {
    return words[0];
  } else {
    let allButLast = words.slice(0, -1).join(", "); // Join all words except the last with ', '
    let lastWord = words[words.length - 1]; // Get the last word
    return `"${allButLast} and ${lastWord}"`; // Combine with 'and' before the last word
  }
}

console.log(words1, "=>", formattedString);

// nomor 3
console.log("----nomor 3----");
const angka = [5, 3, 1, 7, 2, 6];
let angka1 = [5, 3, 1, 7, 2, 6];

angka1.sort((a, b) => a - b);

console.log(angka, "=>", angka1[1]);

// nomor 4
console.log("----nomor 4----");
let arr1 = [1, 2, 3];
let arr4 = [3, 2, 1];
let arr5 = [];

for (let i = 0; i < arr1.length; i++) {
  arr5.push(arr1[i] + arr4[i]);
}

console.log("[1, 2, 3] + [3, 2, 1]", "=>", arr5);

// nomor 5
console.log("----nomor 5----");
let api = [1, 2, 3, 4];
function tanah(arr, operator) {
  let checkSeen = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === operator) {
      checkSeen = false;
      break;
    }
    if (checkSeen == true) {
      arr.push(operator);
    }
  }
  return arr;
}
console.log();

// nomor 6
console.log("----nomor 6----");

// nomor 7

// nomor 8
console.log("----nomor 8----");
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let merged1 = arr6.concat([4, 5, 6]);
console.log(arr6, arr7, "=>", merged1);
// nomor 9
console.log("----nomor 9----");
let arr8 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let arr9 = [];
//console.log(arr8.sort((a, b) => a - b));
let ars9 = [];
for (let i = 0; i < arr8.length; i++) {
  if (arr9[i] == arr9[i + 1]) ars9.push(arr8[i]);
}
for (let j = 0; j < ars9.length; j++) {
  if ((arr9[j] = ars9[j])) {
    ars9.splice(j, j + 1);
  }
}
console.log(arr8, "=>", ars9);

// nomor 10
console.log("----nomor 10----");
let arr10 = [1, 2, 3, 4, 5];
let arr11 = [3, 4, 5, 6, 7];
let result = arrayDifference(arr10, arr11);

function arrayDifference(arr10, arr11) {
  let difference = arr10.filter((baru) => !arr11.includes(baru));
  return difference;
}
console.log(result);

// nomor 11
console.log("----nomor 11----");
let arr12 = [1, [], undefined, {}, [], "string"];
let arr13 = [];
for (let i = 0; i < arr12.length; i++) {
  if (typeof arr12[i] != "object") arr13.push(arr12[i]);
}
console.log(arr13);

// nomor 12
// console.log("----nomor 12----");
// let arr14 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// let arr15 = [];
// for (let i = 0; i < arr14.length; i++) {
//   if ((arr14[i] =  arr15.push(arr14[i]);

// }
// console.log(

// nomor 13
console.log("----nomor 13----");
let choice = ["rock", "paper", "scissor"];
let random1 = choice[Math.floor(Math.random() * choice.length)];
console.log(random1);
