// console.log("a");

// // setTimeout will ensure 1000ms delay as minimum before executing the callback
// // maximum delay can be more depending on the execution of other synchronous code
// setTimeout(() => {
//   console.log("b");
// }, 1000);


// console.log("c"); // assuming this is 1 million lines (1.5 sec) 
// console.log("d");// assuming this is 1 million lines (1.5 sec)


// real life example - use it with cautious no browser 
// console.log("start");
// setTimeout(() => {
// 	console.log("b")
// }, 1000)

// for(let i = 0; i < 10000000; i++){
// 	console.log("c");
// }



// console.log("a");

// setTimeout(() => {
// 	console.log("b")
// }, 0) // in c++ code for settimeout there is a default wait of 1ms 

// console.log("c");



// ----------- callbacks   ---------

// function consoleFunction(){
//     console.log("a");
// }

// setTimeout(consoleFunction , 2000);

// consoleFunction - is known as callback function
// A callback function is a function passed into another function as an argument, 
// which is the
// n invoked inside the outer function to complete some kind of routine or action.


//  Email function - thankyou 

// function task1(callbackfun ){
//     console.log(`Sending email to ...`);

//     callbackfun("result of task 1", null)
// }


// // real WORK  

// function task2(result, calbbackfun2){
//     console.log("Task 2 is done using " );
//     calbbackfun2("result of task 2", result)
// }

// // PREPARE FOR NEXT DAy

// function task3(result, callbackfun3){
//     console.log("Task 3 is done using " );

//     callbackfun3("result of task 3", result)
// }



// //  -------- callback hell --------------



// task1((errr, result) => {
//     if(errr)   {
//         console.log("handle error 1")
//     } 
//     else {
//         task2(result, (errr, result2) => {
//             if(errr)   {
//                 console.log("handle error 2")
//             } else {
//                 task3(result2, (errr, result3) => {
//                     if(errr)   {
//                         console.log("handle error 3")
//                     } else {
//                         console.log("all tasks are done")
//                     }
//             })
//         }
//     })
      
// } }
// )


//  ------------- promises ---------------

// promise creation way 1
// const promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");
//     // if there is no fire 
//     // setTimeout(() => {
//     //     resolve("you take the pizza enjoy Farmhouse");
//     // }, 3000)

//     // fire in the kitchen 

//     setTimeout(() => {
//         reject("apologies farmhouse pizza is not available");
//     }, 5000)

// });


// promise consumption

// promise object is likke a bill 
// promise.then(data => {
//     console.log("Pizza is consumed by customer " + data);
// }).catch(err => {
//     console.log("Customer is angry " + err);
// })



// ------  live example  ------- 

// const url = "https://pokeapi.co/api/v2/pokemon/ditto" // 2sec 

// const fetchPokemonPromise = fetch(url);

// /**
//  * fetchPokemonPromise <promise>
//  * {
//  *  [[Prototype]] : Promise
//  *  [[State]] : "fulfilled" / "rejected" / "pending"
//  *  [[Result]] : <data> / <error>
//  * }
//  * 
//  */


// fetchPokemonPromise.then(data  =>   {
//     return data.json(); // 1 sec 
// }).then(data => {
//     console.log("play with json data")
//     console.log(data);
// }).catch(err => {
//     console.log("handle the error " + err);
// })



// ----------- callbacks promise consumption of above example    ---------


// function task1(callbackfun ){
//     const promise = new Promise((resolve, reject) => {
//         console.log(`Sending email to ...`);
//         resolve("result of task 1", null)
//     })
//     return promise;
// }


// // real WORK  

// function task2(result, calbbackfun2){
//     const promise = new Promise((resolve, reject) => {
//         console.log("Task 2 is done using " );
//         resolve("result of task 2", result)
//     });
//     return promise;

    
// }

// // PREPARE FOR NEXT DAy

// function task3(result, callbackfun3){
//     const promise = new Promise((resolve, reject) => {
//         console.log("Task 3 is done using " );
//         resolve("result of task 3", result)
//     });
//     return promise;
// }


// task1()
// .then(result => {
//     return task2(result)
// }).then(result2 => {
//     return task3(result2)
// }).then(result3 => {
//     console.log("all tasks are done")
// }).catch(errr => {
//     console.log("handle error " + errr)
// }).finally(() => {
//     // obj = null; // garbage collection 
//     console.log("cleanup activity")

//     console.log("all tasks are done promise is finally over")
// })



//  --------------- async await. ------------------

// promise creation way 2 - async function
// async function task1(callbackfun ){
//     console.log(`Sending email to ...`);
//     return "result of task 1";
// }


// // real WORK  

// async function task2(result, calbbackfun2){
//     console.log("Task 2 is done using " );
//     return "result of task 2"
// }

// // PREPARE FOR NEXT DAy

// async function task3(result, callbackfun3){
//     console.log("Task 3 is done using " );

//     return "result of task 3"
// }


// async function performTasks() {
//     try {
//         const result1 = await task1();
//         const result2 = await task2(result1);
//         const result3 = await task3(result2);
//         console.log("all tasks are done", result1, result2, result3, ril+1res2+re3);
//     } catch (err) {
//         console.log("handle error " + err);
//     } finally {
//         console.log("cleanup activity");
//         console.log("all tasks are done async await is finally over");
//     }
    
// }

// performTasks();







// const promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");
//     resolve(100);
// });


// setTimeout(() => {
//     console.log("inside timeout");
// }, 0);


// // consumption 

// console.log("before promise then");

// promise.then(data => {
//     console.log("data is " + data);
//     return data + 50;
// }).then(data => {
//     console.log("chained data is " + data);
//     console.log("<html><h1> {150}</html>");
//     return data;
// }).then((data) => {
//     const response fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
//         method : "POST",
//         body : JSON.stringify({value : data})
//     });
//     return response;
// }).then((response) => {
//     return response.json();
// }).then((jsonData) => {
//     console.log("final json data ", jsonData);
// })

// console.log("after promise then takling to friends");
// console.log("after promise then takling to friends");
// console.log("after promise then takling to friends");
// console.log("after promise then takling to friends");
// console.log("after promise then takling to friends");
// console.log("after promise then takling to friends");


/// async await 

// async function performTask() {
//     return 1;
// }


// consumption way 1 - promise

// console.log("start of code");

// const performTaskPromise = performTask();

// performTaskPromise.then(data => {
//     console.log("data is " + data);
// })

// console.log("end of code");



// consumption way 2 - async await

// async function consumption2() {
//     console.log("start of code promise");
//     const data = await performTask();
//     console.log("data is " + data);
//     return data;
// }


// console.log("start of code");
// const var2 = consumption2(); // asycn code 
// console.log("end of code");
// console.log("var2 is " + var2);


// var2.then(data => {
//     console.log("var2 data is " + data);
// })



// 


// consumption2().then(data => {
//     const res = fetch("db table users")
//     return res;
// }).then(res => {
//     console.log("db response is " + res);
// }).then(res => {
//     console.log("final cleanup ");
// })




const url = "https://pokeapi.co/api/v2/pokemon/ditto"; // 2sec


const a = 1 * 2;
console.log("a is " + a);


// fetch(url) // that is calling server // this may take 10 seconds 
//     .then((data) => {
//         return data.json(); // 1 sec
//     })
//     .then((data) => {
//         console.log("play with json data");
//         console.log(data);
//     }).then(() => {
//         console.log("logget who is the user")
//     })
//     .catch((err) => {
//         console.log("handle the error " + err);
//     }).finally(() => {
//         console.log("cleanup activity");
//     });

async function fetchPokemon() {
    try {
        const data = await fetch(url);
        const jsonData = await data.json();
        console.log("play with json data");
        console.log(jsonData);
        console.log("logget who is the user");
    } catch (err) {
        console.log("handle the error " + err);
    } finally {
        console.log("cleanup activity");
    }
}

fetchPokemon();


const b = 3 * 2;
console.log("b is " + b);

const c = 4 * 2;
console.log("c is " + c);

const d = 5 * 2;
console.log("d is " + d);

// EOF - end of file / stack is empy 