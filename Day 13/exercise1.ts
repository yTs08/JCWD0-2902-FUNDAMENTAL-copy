import queueHandler from "./exercise.ts";

const queueHandler = new QueueHandler();

queueHandler.addToQueue("Pizza");
queueHandler.addToQueue("Burger");
queueHandler.addToQueue("Salad");

queueHandler.processQueue();
