// SOLID - 

// S -> Single responsibility principle 

// Example: Bad example 

// class User {
//     name: string;
//     email: string;

//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }

//     // Responsibility No. 1
//     getName() {
//         return this.name;
//     }

//     // Responsibility No. 2
//     sendWelcomeEmail() {
//         console.log("welcome email, " , this.email)
//     }

//     // Responsibility No.3 
//     saveUser() {
//         console.log("save user", this.name)
//     }
// }


// // Soliution
// class User1 {
//     name: string;
//     email: string;

//     constructor(name: string, email: string){
//         this.name = name;
//         this.email = email;
//     }

//     // Responsibility No. 1
//     getName() {
//         return this.name;
//     }
// } 

// class EmailNotification {
//     email: string
//     constructor(email: string) {
//         this.email = email
//     }
//     sendWelcomeEmail() {
//         console.log("welcome email, " , this.email)
//     }
// }

// class UserService {
//     save(name: string) {
//         console.log("save user", name)
//     }
// }

// const userx = new User1("x", "x@gmail.com");
// const userService = new UserService();

// userService.save(userx.getName())





// O -> open for extension and closed for modification 
// Bad example :
class PaymentProcessor {
    process(amount: number, type: string) {
        if(type === "UPI") {
            console.log("processing UPI", amount)
        } else if (type === "creditcard") {
            console.log("processing Credit card", amount)
        } else if (type === "paypal") {
            console.log("processing Paypal", amount)
        } 
        // modification of class to add bitcoin as a payment processor 
        else if (type === "bitcoin") {
            console.log("processing Paypal", amount)
        } 
    }
}
// creditcard 
const naturalIcecreamPayment = new PaymentProcessor();
naturalIcecreamPayment.process(170, "creditcard");
naturalIcecreamPayment.process(170, "UPI");


// solution : 

// abstract class 
interface PaymentMethod {
    pay(amount: number): void;
}


class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("processing Credit card", amount)
    }
}

class UPIPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("processing Upi", amount)
    }
}


