class user {
  name: string;
  address: string;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address || "BSD";
  }
  greeting() {
    console.log("hello world");
  }
  showEmail() {
    console.log(this.showEmail);
  }
}

const user = new User("jordan", "bsd");
console.log(user);

const a: User = {
  greeting() {},
  name: "huhu",
  address: "jkt",
};
