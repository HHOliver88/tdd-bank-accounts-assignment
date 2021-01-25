process.env.NODE_ENV = 'test';

const chai                  = require('chai');
const expect                = chai.expect;
const Connection            = require('../config/database');
const UserModel             = require('../models/user.model');
const BankAccountModel      = require('../models/bank.account.model');
const { assert } = require('chai');

describe("BankAccount model", function(){

    it("should have a balance of 0 when you instantiate this class without specifying any balance.", function(){
        let bankAccount = new BankAccountModel();

        expect(bankAccount.getBalance().balance).to.equal(0);
    });
});

describe("User model", function(){
    it("When a new User instance is created, a new instance of BankAccount should also be created", function(){
        let user = new UserModel();

        expect(user.account).to.be.an.instanceOf(BankAccountModel);
    });

    it("User should be able to see his/her remaining balance.", function(){
        let user = new UserModel();

        expect(user.display_remaining_balance()).to.be.equal("Balance: $0");
    });
});

