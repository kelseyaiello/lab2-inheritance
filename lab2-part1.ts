class CheckingsAccount {
    private initialBalance:number;
    private ownerName:string;

    constructor(initialBalance:number, ownerName:string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    public deposit(depositAmount:number) {
        return this.initialBalance += depositAmount;
    }

    public withdraw(withdrawAmount:number) {
        return this.initialBalance -= withdrawAmount;
    }

    public checkBalance():void {
        console.log(this.initialBalance);
    }
}
