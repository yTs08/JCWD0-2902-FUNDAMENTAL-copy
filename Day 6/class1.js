class User {
  greeting() {
    console.log("hello world");
  }
}
const user2 = class {
  greeting() {
    console.log("hello world");
  }
};

class DB {
  static #connection = "";
  static #initializedConnection() {
    const randomNumber = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database Connection $(randomNumber)`;
  }
  static getConnection() {
    if (!DB.#connection) DB.#initializedConnection();
    return DB.#connection;
  }
}

console.log(DB.getConnection());
console.log(DB.getConnection());
console.log(DB.getConnection());

class Employee {
  #name;
  constructor(name) {
    this.EmployeeName = name;
  }
  get EmployeeName() {
    return this.#name;
  }
  set EmployeeName(name) {
    if (typeof name == "string" && name.length >= 5) this.#name = name;
    else console.log("tipe data bukan string atau kurang dari 5 karakter");
  }
}
const em = new Employee("Jhonn");
em.EmployeeName = "David";
console.log(em.EmployeeName);

set EmployeeName (name) {
    if(typeof name == "string" && name.includes(" ")&& !name.endsWith(" ")) {
        const splillted = name.split(" ");
        this.#name = splillted [0];
        this.#lastname = splillted [1];

    }
}
class Book2 extends Book {
    constructor(episode ) {
        super("buku 1")
    }
}
