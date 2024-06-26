/** @format */

for (let i = 0; i < 3; i++) {
  //task
  console.log(i); // 0, 1 , 2
}
// statement 1  = buat variable
// statement 2 = buat kondisi
// statement 3 = buat counter

let i = 3; //declare
while (i < 3) {
  //task
  console.log("hello!");
  i++; // counter
}

do {
  //task
  console.log("hello!");
  i++; // counter
} while (i < 3);

let sum = 0;
while (true) {
  value = 2;
  if (sum >= 5) break; // stop looping
  sum += value; //1, 2 ,3 ,4 , 5
}

console.log(sum);

for (let i = 0; i < 5; i++) {
  console.log("hello");
  if (i == 3) continue; //skip
  console.log(i); // 0 , 1, 2 , 4
}

//nested for
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    // console.log("looping j", j);
    console.log(i, j);
  } // 3x loop disini
  // console.log("looping i", i);
}
