// ------------------------- Inheritance -----------------------------

/**
 * 1. in this a child class will inherit all the properties and methods of the parent class.
 * 2. we can add new properties and methods in the child class.
 * 3. we can also override the methods of the parent class.
 * 4. we can also call the parent class methods using super keyword.
 * 
 *5. super keyword points to Parent class 
 * 
 * 
 * 
 * 
 */

// extends keyword
// super() -> call parent constructor


// parent class // 5 bunglows - 1kg gold 
// COmplete class
/*
class GovtCarSchema {
    name: string;
    tyre: number = 4;
    nCapRating: number = 0; // talk about the safety of the car
    airBags: number = 0;

    constructor(name: string, tyre: number,nCapRating: number, airbags: number) {
        this.name = name;
        this.tyre = tyre;
        this.nCapRating = nCapRating;
        this.airBags = airbags;
    }
    
    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}


// extends -> 

// tata car as child class 
class TataCar extends GovtCarSchema {
    aircondition: number = 4;


    constructor(name: string, numberOfTyres: number, nCapRating: number, airBags: number) {
        // super -> GovtCarSchema 
        // super() -> calls GovtCarSchema class constructor
        super(name, numberOfTyres, nCapRating, airBags)
    }

    airCondition() {
        console.log("Air Condition On tata");
    }
}


const punch = new TataCar("Punch", 4, 5, 2);

console.log('punch', punch);


// Tata Car -> GovCarSchma (1 level inheritance) 
// electricalCar  -> Car    ->    Vehicle (multi level inheritance)

*/


//----------------------------------------- Abstract Class -> no 100% implementation  ----------------------------
/*abstract class GovtCarSchemaAbstractClass {
    name: string;
    tyre: number = 4;
    nCapRating: number = 0; // talk about the safety of the car
    airBags: number = 0;

    constructor(name: string, tyre: number,nCapRating: number, airbags: number) {
        this.name = name;
        this.tyre = tyre;
        this.nCapRating = nCapRating;
        this.airBags = airbags;
    }
    
    start() {
        console.log("Car started with key");
    }

    abstract stop(): void
}


class BMW extends GovtCarSchemaAbstractClass {

    aircondition: number = 4

    constructor(name: string, tyre: number, nCapRating: number, airbags: number, aircondition: number){
        super(name, tyre, nCapRating, airbags)
        this.aircondition = aircondition
    }

    // method overrriding 
    // start(): void {
    //     console.log("BMW started keyless way");
    // }

    stop(): void {
        console.log("BMW stopped");
    }


}


const BmwCClass = new BMW("BMW", 4, 5, 2, 4);
console.log(BmwCClass);
BmwCClass.start();
BmwCClass.stop();
*/


// ------------------------ INTERFACE (Abstract Class with - 0 % implementation) ---------------------------

interface GovtCarSchemaInterface {
    name: string;
    tyre: number;
    nCapRating: number;
    airBags: number;

    start(): void;
    stop(): void;
}


class Audi implements GovtCarSchemaInterface {

    name: string;
    tyre: number;
    nCapRating: number;
    airBags: number;

    infotainmentSystem: string;

    constructor(name: string, tyre: number, nCapRating: number, airbags: number, infotainmentSystem: string) {
        this.name = name;
        this.tyre = tyre;
        this.nCapRating = nCapRating;
        this.airBags = airbags;
        this.infotainmentSystem = infotainmentSystem;
    }

    start(): void {
        console.log("Audi started");
    }

    stop(): void {
        console.log("Audi stopped");
    }

}


const audiA6 = new Audi("Audi", 4, 5, 2, "google");
console.log(audiA6);
audiA6.start();
audiA6.stop();
