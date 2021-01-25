const Mysql                 = require('mysql');

class BankAccountModel {
	constructor(balance = 0) {
		this.balance = balance;
	}

	getBalance() {
		let result = {'balance': this.balance};
		return result;
	}
}

module.exports = BankAccountModel;