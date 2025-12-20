
// code 1
/**
 * console.log("a");

setTimeout(() => {
    console.log("c");
}, 0);

Promise.resolve().then(() => {
    console.log("d");
});

setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("e");
    });
}, 0);


console.log("b");
 * 
 */


// answer  abdce




// node js event loop phases

// activity 1 

// console.log("1");
// process.nextTick(() => {
//     console.log("nextTick callback");
// });
// console.log("2");

// answer:  1 2 nextTick callback



// activity 2

// console.log("1");
// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// process.nextTick(() => {
//     console.log("nextTick callback");
// });
// console.log("2");

// answer : 1 2 nextTick callback setTimeout callback


// activity 3
// console.log("1");

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise then callback");
// });
// process.nextTick(() => {
//     console.log("nextTick callback");
// });

// console.log("2");



// answer : 1 2 nextTick callback promise then callback setTimeout callback


// activity 4

const fs = require('fs');

// console.log("1");

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise then callback");
// });
// fs.readFile("./file.txt", () => {
//     console.log("file read callback");
// });
// process.nextTick(() => {
//     console.log("nextTick callback");
// });

// console.log("2");

/**
 * 1
2
nextTick callback
promise then callback
setTimeout callback
file read callback
 */


// activity 5
// console.log("1");

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise then callback");
// });
// fs.readFile("./file.txt", () => {
//     console.log("file read callback");
// });
// process.nextTick(() => {
//     console.log("nextTick callback");
// });
// setImmediate(() => {
//     console.log("setImmediate callback");
// });



// console.log("2");
// for(let i=0; i<1e8; i++){} // mocking main thread blocking activity



//  ------------  

// PROBLEM : process.nextTick(resursiveFunction) STARVATION 

// function recursiveFunction() {
//     console.log("inside recursive function");
//     process.nextTick(recursiveFunction);
// }

// recursiveFunction();

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);

// ANSWER : only recursive function logs, setTimeout never gets a chance to execute


// SOLUTION: 

// // exmaple of starvation solved 1

// function recursiveFunction() {
//     console.log("inside recursive function");
//     // setImmediate(recursiveFunction);
//     setTimeout(recursiveFunction, 1000);
//     // process.nextTick(recursiveFunction);
// }

// recursiveFunction();

// setTimeout(() => {
//     console.log("setTimeout callback");
// }, 0);

// exmaple of starvation solved 2 (good production way to handle retries)
// exponential backoff 

// function retryFunction(callBack, retries = 0) {

//     if(retries >= 5) {
//         console.log("max retries reached");
//         return;
//     }

//     setTimeout(() => {
//         console.log("inside retry function");
//         retryFunction(callBack, retries + 1);
//     }, 100);
// }


// retryFunction(() => {console.log("done")});




