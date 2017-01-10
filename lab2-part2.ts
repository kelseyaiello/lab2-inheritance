class SavingsAccount {
    private initialBalance:number;
    private ownerName:string;
    private numWithdrawals:number;

    constructor(initialBalance:number, ownerName:string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.numWithdrawals = 0;
    }

    public deposit(depositAmount:number) {
        return this.initialBalance += depositAmount;
    }

    public withdraw(withdrawAmount:number) {
        if (this.numWithdrawals < 3) {
            this.numWithdrawals++;
            console.log("You have " + (3 - this.numWithdrawals) + " withdrawals left.");
            return this.initialBalance -= withdrawAmount;
        } else {
            console.log("Error: too many withdrawals.");
        }
        
    }

    public checkBalance():void {
        console.log(this.initialBalance);
    }
}

let MySavingsAccount:SavingsAccount = new SavingsAccount(100000, "Kelsey");

MySavingsAccount.deposit(500);
MySavingsAccount.withdraw(50);
MySavingsAccount.checkBalance();