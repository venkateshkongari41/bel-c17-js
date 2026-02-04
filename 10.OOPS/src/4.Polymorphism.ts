// POLYMORPHISM  
// 	1. Can happen with method overloading - JS dont have this.  (closures)
// 	2. Method overriding 


// Add(1,2) // 3  -> 
// Add("abc" , "def") // abcdef
// Add(1.2, 7.5) ->  6.7

// Method overloading -> java implements , JS and TS do not have overloading
// this is compile time

// // resolved in compile time or Runtime ?  

// class Calculator {
//     add(a: number,  b: number): number {
//         return a + b;
//     }
//     add(a: string, b: string): string {
//         return a + b + "";
//     }
//     // add(a: double, b: double ): double {
        
//     // }
    
// }


//  Mehtod Overriding -> Java, js, ts can implement 
// Runtime 

class Animal {
    speak() {
        console.log("animal speak");
    }

    walk() {
        console.log("animal walk");
    }
}

class Dog extends Animal {
    // method overriding -> child is overriding the method of parent 
    speak() {
        console.log("barks");
    }
}

const tommy = new Dog();
tommy.speak();
tommy.walk();




