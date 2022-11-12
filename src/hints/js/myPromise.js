// Promise
const FULFILLED = "fulfilled";
const PENDING = "pending";
const REJECTED = "rejected";

class myPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = "undefined";
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        console.log(this.onFulfilledFn);
        this.onFulfilledFn.forEach((fn) => fn(value));
      }
    };

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.sate === PENDING) {
      if (onFulfilled) {
        this.onFulfilledFn.push(onFulfilled);
      }
      if (onRejected) {
        this.onRejectedFn.push(onRejected);
      }
    }

    if (onFulfilled && this.state === FULFILLED) {
      onFulfilled(this.result);
      return;
    }

    if (onRejected && this.state === REJECTED) {
      onRejected(this.result);
      return;
    }
  }

  cath(onRejected) {
    return this.then(null, onRejected);
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
});
promise.then((value) => console.log(value));

const newProm = new Promise((resolve, reject) => {
  resolve("success");
});