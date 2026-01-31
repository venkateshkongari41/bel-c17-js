/**
 * Object 
 * 1. its a memory blob (memory is controlled by program)
 * 
 * user = {
 *    name: "anba",
 *    age: 24 
 * }
 * 
 * 
 * CLasses 
 * 1. blueprint/map to create the objects.
 * 2. Structure (properties) and behaviour (methods/functions )
 * 3. ES6 (2015) introduced this classes in js 
 * 4. classes are just a syntatical sugar.
 *  
 */


// ------- ways to create object in javascript ------------------
/*
//1.  Object Literal - simplest way 
const tataCar = {
    brand: "Tata",
    model: "punch",
    start: function () {
        console.log("car started");
    }
}

console.log(tataCar);

//2. constructor function - Schema 
function Car(brand, model) {
    // this -> {} // new 
    this.brand = brand;
    this.model = model;
    this.start = function () {
        console.log("car started");
    }
}


const ferrariCar = new Car("ferrari", "v8");
console.log(ferrariCar);

// new keyword -> {}
// this keyword means context 


//3. ES6 CLasses 

class Vehicle {
    // responsible for creating the objects.
    constructor(brand, model) {
        // context -> this -> new -> {}
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log("vehicle started ", this.brand, this.model);
    }
}

// hondaCar is an instance/object  Vehicle  class 
const hondaCar = new Vehicle("honda", "civic");
// new -> {}


console.log(hondaCar);
console.log(hondaCar.start())

*/


// ----------------------------- Static methods and properties ----------------------------------
//  static keyword : all the methods and properties are created while reading the class

// wasting memory 
/*
class Math {
    PI = 3.14;
    constructor() {

    }

    add(a, b) {
        return a + b;
    }

    sub(a,b) {
        return a - b;
    }
}

const additionOperation = new Math(); // { PI, add, sub }
console.log(additionOperation.add(1,2))

const subTractioOps = new Math(); // { PI, add, sub  }
console.log(subTractioOps.sub(1, 2))
*/


// static keyword is mostly used in utility classes 
// static members are allocated the memory when the class initiate/read.
/*
class Math {
    static PI = 3.14;

    static add(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }
}

console.log(Math.add(1, 2));
console.log(Math.PI);
console.log(Math.sub);
*/


// ------------------------------ Encapsulation ----------------------------------------
/*
1. hide the implementation detail
2. access modifiers (private, public, protected)
3. js does not support access modifiers
5. getters and setters 


1. prevents invalid state -> your balaance cant be 0 which is invalid state
*/





// --------------------------------- getters and setters and Access modifiers --------------------------

// access modifiers: is a keyword used in programming language to control visibility and accessibility of class, methods, properties , constructor
// java -> public, private, protected, default
/*
class BankBalance {

    #balance = 0; // private property

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("amount can not be negative");
        }
        this.#balance = amount;
    }

    pay() {

    }
}


const utkarshBalance = new BankBalance();
utkarshBalance.balance = -100; // set balance 
console.log(utkarshBalance.balance); // get balance()

*/


// ------------------------- Inheritance -----------------------------

// extends keyword
// super() -> call parent constructor

class Animal {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    walk() {
        console.log(this.name + " is walking on " + this.legs + " legs");
    }
}

class Dog extends Animal {
    constructor(name, legs, breed) {
        super(name, legs);
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking");
    }
}

const dog = new Dog("doggy", 4, "pug");
dog.eat();
dog.walk();
dog.bark();

console.log(dog);













