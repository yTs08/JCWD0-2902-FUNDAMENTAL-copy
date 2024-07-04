// nomor 1
console.log("----nomor 1----");
// create function to calculate array of student data

interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

interface nomorAngka {
  score: {
    highest: number;
    lowest: number;
    average: number;
  };
  age: {
    highest: number;
    lowest: number;
    average: number;
  };
}

function totalScore(student: Student[]): nomorAngka {
  const score = student.map((s) => s.score);
  const age = student.map((s) => s.age);

  return {
    score: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: score.reduce((a, b) => a + b) / score.length,
    },
    age: {
      highest: Math.max(...age),
      lowest: Math.min(...age),
      average: age.reduce((a, b) => a + b) / age.length,
    },
  };
}
const students: Student[] = [
  { name: "adil", score: 90, email: "adil@gmail.com", age: 23 },
  { name: "bogel", score: 91, email: "bogel@gmail.com", age: 24 },
];
console.log(totalScore(students));

// nomor 2
console.log("----nomor 2----");
class product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class transaction {
  total: number;
  product: string;

  constructor(total, product) {
    this.total = total;
    this.product = product;
  }
 class product2 {
    allProductData : string;
    qty: number;
    constructor(allProductData, qty) {  
        
    }
 } 
}