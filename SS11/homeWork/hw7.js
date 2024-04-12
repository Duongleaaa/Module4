"use strict";
class Account {
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
class SavingsAccount extends Account {
    constructor(accountNumberCln, balanceCln, interestRateCln) {
        super(accountNumberCln, balanceCln);
        this.interestRate = interestRateCln;
    }
    //tính lãi
    calculateInterest() {
        let interestMoney = this.balance * this.interestRate;
        console.log(`Tiền lãi hàng tháng là: ${interestMoney}`);
    }
}
let firstAcount = new SavingsAccount(Math.ceil(Math.random() * 12345), 1000000, 0.1);
//kiểm tra tiền lãi tăng ko
firstAcount.showMoney();
firstAcount.calculateInterest();
firstAcount.deposit = 200000;
firstAcount.calculateInterest();
// có thông báo nếu rút nhiều tiền hơn số tiền hiện có
firstAcount.withdraw = 9000000000000;
