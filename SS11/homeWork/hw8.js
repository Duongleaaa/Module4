"use strict";
class Account1 {
    constructor(accountNumberCln, balanceCln) {
        this.accountNumber = accountNumberCln;
        this.balance = balanceCln;
    }
    //kiểm tra tiền
    showMoney() {
        console.log(`Số tiền hiện có:${this.balance}`);
    }
    //gửi thêm tiền
    set deposit(addMoney) {
        this.balance = this.balance + addMoney;
        console.log(`Tiền hiện có sau khi thêm:${this.balance}`);
    }
    //rút tiền
    set withdraw(subMoney) {
        if (subMoney < this.balance) {
            this.balance = this.balance - subMoney;
            console.log(`Tiền hiện có sau khi rút:${this.balance}`);
        }
        else {
            console.log('Số tiền vượt quá số tiền hiện có!');
        }
    }
}
class CheckingAccount extends Account1 {
    constructor(accountNumberCln, balanceCln, overdraftLimitCln) {
        super(accountNumberCln, balanceCln);
        this.overdraftLimit = overdraftLimitCln;
    }
    set withdraw(subMoney) {
        if (subMoney < 2000000 && subMoney > 0) {
            this.balance = this.balance - subMoney;
            console.log(`Tiền hiện có sau khi rút với hạn mức:${this.balance}`);
        }
        else {
            console.log('Số tiền vượt quá hạn mức quy định!');
        }
    }
}
let account8 = new CheckingAccount(12345, 1000000, 2000000);
account8.withdraw = 900000;
account8.withdraw = 200000000;
