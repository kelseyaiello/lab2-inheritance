class Account {
    initialBalance: number;
    ownerName: string;

    constructor(initialBalance: number, ownerName: string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    public deposit(depositAmount: number) {
        return this.initialBalance += depositAmount;
    }

    public checkBalance(): void {
        console.log(this.initialBalance);
    }

}

class CheckingsAccount extends Account {

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);


    }

    public withdraw(withdrawAmount: number) {
        return this.initialBalance -= withdrawAmount;
    }


}

class SavingsAccount extends Account {

    private numWithdrawals: number;

    constructor(initialBalance: number, ownerName: string) {
        super(initialBalance, ownerName);
        this.numWithdrawals = 0;
    }

    public withdraw(withdrawAmount: number) {
        if (this.numWithdrawals < 3) {
            this.numWithdrawals++;
            console.log("You have " + (3 - this.numWithdrawals) + " withdrawals left.");
            return this.initialBalance -= withdrawAmount;
        } else {
            console.log("Error: too many withdrawals.");
        }

    }

}


let MyCheckingsAccount = new CheckingsAccount(100000, "Kelsey");
MyCheckingsAccount.deposit(500);
MyCheckingsAccount.withdraw(50);
MyCheckingsAccount.checkBalance();

let MySavingsAccount = new SavingsAccount(100000, "Kelsey");

MySavingsAccount.deposit(500);
MySavingsAccount.withdraw(50);
MySavingsAccount.checkBalance();