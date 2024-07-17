
/** @format */

import Queue from "./class-exercise";

Queue.add("ayam goreng");
Queue.add("ikan goreng");
Queue.add("capcay");
Queue.add("gurame asem manis");

Queue.queue();
// bikin class
// key = []
// fungsi add ke array
// fungsi untuk loop
// sambil loop, promise
// promise => settimeout
// resolve => isi dari settimeout

class queueHandler {
  private queue: string[] = [];

  addToQueue(order: string): void {
    this.queue.push(order);
  }
  async processQueue(): Promise<void> {
    while (this.queue.length > 0) {
      const order = this.queue.shift();
      if (order) {
        const processingTime = Math.floor(Math.random() * 10) + 1;
        console.log(
          `Processing order ${order}... (Estimated time: ${processingTime} seconds)`
        );

        await new Promise<void>((resolve) => {
          setTimeout(() => {
            console.log(`Order ${order} processed.`);
            resolve();
          }, processingTime * 1000);
        });
      }
    }
  }
}

export default queueHandler;
