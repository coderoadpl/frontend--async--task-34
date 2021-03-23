const promise1 = new Promise((resolve) => setTimeout(() => resolve('promise1'), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve('promise2'), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve('promise3'), 3000))

promise1.then((data) => console.log('promise1', data))
promise2.then((data) => console.log('promise2', data))
promise3.then((data) => console.log('promise3', data))

const promise = Promise.all([
    promise1,
    promise2,
    promise3
])

promise.then((data) => console.log('promise all', data))