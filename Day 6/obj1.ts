interface IUser {
  name: string;
  greet: () => void;
  hobby?: string;
  hello?: string;
  multiply: (a: number, b: number) => number;
}
interface IMark {
  math: number;
  biology: number;
}

const user: IUser = {
  name: "David",
  greet() {
    console.log("Hello", this.name);
  },
  multiply(a: number, b: number) {
    return a * b;
  },
};
user.hobby = "coding";
user.hello = "hahahaha";
delete user.hobby;

user.hobby = "coding"; // add prop bila belum ada key hobby
console.log(user);
delete user.hobby; // delete key hobby
console.log(user);
user.name = "Bobby"; // update prop karena key name sudah ada
console.log(user);

console.log(user.name); //read value prop name dari obj user cara pertama
console.log(user["name"]); // read value prop name dari obj user cara kedua

user.mark = {
  math: 80,
  biology: 90,
};

console.log(user);
console.log(user.Mark.biology);

console.log(user.marks?.biology); // optional chaining

let person = {
  name: "Frengky",
  age: 24,
};

console.log(Object.keys(person)); //return array of person keys

type TKey = "name" | "age";
for (let key in person) {
  console.log(person[key]);
}
