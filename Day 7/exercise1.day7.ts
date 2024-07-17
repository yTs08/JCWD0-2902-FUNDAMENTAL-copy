// nomor 1
console.log("----nomor 1----");
function aExmp(a: any, b: any) {
  let aExmp = Object.getOwnPropertyNames(a);
  let bExmp = Object.getOwnPropertyNames(b);
  if (aExmp.length !== bExmp.length) {
    return false;
  }
  for (let i = 0; i < aExmp.length; i++) {
    let aExmpName = aExmp[i];

    if (a[aExmpName] != b[aExmpName]) {
      return false;
    }
  } //if everything match
  return true;
}

console.log(aExmp({ a: 2 }, { a: 1 }));
console.log(aExmp({ a: "hello" }, { a: 1 }));
console.log(aExmp({ a: 1 }, { a: 1 }));

// nomor 2
// console.log("====nomor 2----");
// function getObjectIntersection(a: any, b: any, c: any) {
//   let intersection = {};

//   for (let key in a) {
//     if (a.hasOwnProperty(key) && (b[key], c[key]) === a[key]) {
//       intersection[key] = a[key];
//     }
//   }

//   return intersection;
// }

// console.log(getObjectIntersection({ a: 1 }, { b: 2 }, { a: 1 }));
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };
// const intersection = getObjectIntersection(obj1, obj2);
// function getObjectIntersection(obj1, obj2) {
//   let intersection = {};

//   for (let key in obj1) {
//     if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
//       intersection[key] = obj1[key];
//     }
//   }

//   return intersection;
// }
// console.log(intersection);

//nomor 3
function removeDuplicates() {
  let students: any;
  students = [
    { name: "Student 1", email: "student1@gmail.com" },
    { name: "Student 2", email: "student2@gmail.com" },
  ];
}
// nomor 4
console.log("----nomor 3----");
let user2 = ["David: `name`, 20:`age`"];
interface KUser {
  name: string;
  age: number;
}
const user1: KUser = {
  name: "David",
  age: 20,
};
if (user1.name == "David" && user1.age == 20) {
  console.log(user2);
} else if (user1.name != user2[0] && user1.age != 20) console.log(user1);

//interface RUser {
//   string: "name1";
//   number: "age";
//}

//console.log([user1.age]);
console.log();
