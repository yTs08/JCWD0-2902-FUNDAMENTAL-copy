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
