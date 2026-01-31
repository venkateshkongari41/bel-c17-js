// --------------------------------  getters setters ---------------------------------


class BankBalance {
    private _balance: number = 0;

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount < 0) {
            throw new Error("Amt cannot be negative");
        }
        this._balance = amount;
    }
}


const utkarshbalance = new BankBalance();

utkarshbalance.balance = 1000; // set balance
utkarshbalance.balance = -1000; // set balance

console.log(utkarshbalance.balance); // get balance