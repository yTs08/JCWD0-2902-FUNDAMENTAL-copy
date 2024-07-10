const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};
console.log(car);

// literal

user = {
  name: "David",
  greet() {
    console.log("Hello!");
  },
};

user.hobby = "coding"; // add prop bila belum ada key hobby
console.log(user);

delete user.hobby;
console.log(user);

const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const merged = [...dataOne, ...dataTwo, [2, 3, 4, 5]];
console.log(merged); // [1,2,3,[4,5,6]]
console.log(merged.length);

const objectOne = {
  name: "David",
};
const objectTwo = {
  email: "David@gmail.com",
};

const finalObject = { ...objectOne, objectTwo, age: 23 };

const entries = Object.entries(target);
