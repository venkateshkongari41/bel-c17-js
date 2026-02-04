"use strict";
//  getters setters 
class BankBalance {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Amt cannot be negative");
        }
        this._balance = amount;
    }
}
const utkarshbalance = new BankBalance();
console.log(utkarshbalance.balance);
//# sourceMappingURL=index1.js.map