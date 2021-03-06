import CircularQueue from "./CircularQueue";
import PriorityQueue, { PrioritisedItem } from "./PriorityQueue";
import Queue from "./Queue";

test("Queue", () => {
  const myQueue = new Queue<number>();
  myQueue.enqueue(5);
  myQueue.enqueue(7);
  myQueue.enqueue(10);
  const a = myQueue.dequeue();
  myQueue.enqueue(13);
  myQueue.enqueue(54);
  const b = myQueue.dequeue();
  myQueue.enqueue(2);
  const c = myQueue.dequeue();
  myQueue.enqueue(6);
  const d = myQueue.dequeue();
  myQueue.enqueue(19);
  const e = myQueue.dequeue();
  myQueue.enqueue(27);
  myQueue.enqueue(28);
  const f = myQueue.dequeue();
  const g = myQueue.dequeue();
  const h = myQueue.dequeue();

  expect(a).toBe(5);
  expect(b).toBe(7);
  expect(c).toBe(10);
  expect(d).toBe(13);
  expect(e).toBe(54);
  expect(f).toBe(2);
  expect(g).toBe(6);
  expect(h).toBe(19);
});

interface PrioritisedName extends PrioritisedItem {
  name: string;
}

test("Priority Queue", () => {
  const myQueue = new PriorityQueue<PrioritisedName>();

  myQueue.enqueue({ name: "Indigo", priority: 10 });
  myQueue.enqueue({ name: "Joe", priority: 4 });
  myQueue.enqueue({ name: "Kate", priority: 7 });
  const a = myQueue.dequeue();
  myQueue.enqueue({ name: "Tom", priority: 9 });
  myQueue.enqueue({ name: "Kirsten", priority: 3 });
  const b = myQueue.dequeue();
  myQueue.enqueue({ name: "Nina", priority: 4 });
  const c = myQueue.dequeue();
  myQueue.enqueue({ name: "Gaz", priority: 5 });
  const d = myQueue.dequeue();
  myQueue.enqueue({ name: "Steve", priority: 1 });
  const e = myQueue.dequeue();
  myQueue.enqueue({ name: "Louise", priority: 8 });
  myQueue.enqueue({ name: "Chris", priority: 7 });
  const f = myQueue.dequeue();
  const g = myQueue.dequeue();
  const h = myQueue.dequeue();

  expect(a).toEqual({ name: "Indigo", priority: 10 });
  expect(b).toEqual({ name: "Tom", priority: 9 });
  expect(c).toEqual({ name: "Kate", priority: 7 });
  expect(d).toEqual({ name: "Gaz", priority: 5 });
  expect(e).toEqual({ name: "Joe", priority: 4 });
  expect(f).toEqual({ name: "Louise", priority: 8 });
  expect(g).toEqual({ name: "Chris", priority: 7 });
  expect(h).toEqual({ name: "Nina", priority: 4 });
});

test("Circular Queue", () => {
  const myCQ = new CircularQueue<number>(5);
  myCQ.enqueue(5);
  myCQ.enqueue(7);
  myCQ.enqueue(10);
  const a = myCQ.dequeue();
  myCQ.enqueue(13);
  myCQ.enqueue(54);
  const b = myCQ.dequeue();
  myCQ.enqueue(2);
  const c = myCQ.dequeue();
  myCQ.enqueue(6);
  const d = myCQ.dequeue();
  myCQ.enqueue(19);
  const e = myCQ.dequeue();
  myCQ.enqueue(27);
  myCQ.enqueue(28);
  const f = myCQ.dequeue();
  const g = myCQ.dequeue();
  const h = myCQ.dequeue();

  expect(a).toBe(5);
  expect(b).toBe(7);
  expect(c).toBe(10);
  expect(d).toBe(13);
  expect(e).toBe(54);
  expect(f).toBe(2);
  expect(g).toBe(6);
  expect(h).toBe(19);
});
