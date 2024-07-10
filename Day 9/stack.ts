class Stack {
  private maxSize: number;
  private container: number[] = [];
  constructor(max: number = 10) {
    this.maxSize = max;
  }
  push(element: number) {
    this.container.push(element); // memasukkan element ke index terakhir

    if (this.container.length < this.maxSize) {
      this.container.push(element);
    }
  }
  pop() {
    this.container.pop(); // menghapus element di index terakhir
  }
}
const stack = new Stack(10);
console.log(stack);

class Stack1 {
  private maxSize: number;
  private container: number[] = [];
  constructor(max: number = 10) {
    this.maxSize = max;
  }
  push(element: number) {
    this.container.push(element); // memasukkan element ke index terakhir

    if (this.container.length < this.maxSize) {
      this.container.push(element);
    }
  }
  pop() {
    this.container.pop(); // menghapus element di index terakhir
  }
}
