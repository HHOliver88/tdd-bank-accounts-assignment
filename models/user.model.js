const Mysql                 = require('mysql');
const BankAccountModel 		= require('./bank.account.model');

class UserModel {
	constructor(name, email) {
		this.name 		= name;
		this.email 		= email;
		this.account 	= new BankAccountModel;
	}

	deposit(account, amount) {

	}

	withdraw(account, amount) {

	}

	display_remaining_balance() {
		return "Balance: $" + this.account.getBalance().balance;
	}
}

module.exports = UserModel;