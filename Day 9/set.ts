const numbers: number[] = [1, 2, 3, 1, 2];
const newNumbers = new Set(numbers); // untuk mengambil nilai yang unique aja
console.log(newNumbers);

const tmp: number[] = [];
newNumbers.forEach((v) => tmp.push(v));
console.log(tmp);

const test = Object.entries(Object.fromEntries(newNumbers.entries())).map(
  ([k, v]) => v
);
console.log(test);
console.log(newNumbers.entries()); // { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
console.log(Object.fromEntries(newNumbers.entries())); // { '1': 1, '2': 2, '3': 3 }

// newFruits.add("watermelon"); // menambahkan element
// newFruits.delete("banana"); // delete element banana
// console.log(newFruits.has("banana")); // check if newFruits has banana, return boolean
// newFruits.clear(); // reset newFruits
// console.log(newFruits.size); // ada berapa length dalam array newFruits
