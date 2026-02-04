"use strict";
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
// Object Literal - simplest way 
const car = {
    brand: "Tata",
    model: "punch",
    start: function () {
        console.log("car started");
    }
};
console.log("hello");
// constructor function - Schema 
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.start = function () {
        console.log("car started");
    };
}
//# sourceMappingURL=index.js.map