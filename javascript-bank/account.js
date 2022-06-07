/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (isNaN(amount) || amount < 0 || !parseInt(amount, 10) || typeof amount !== 'number' || !Number.isInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }

};

Account.prototype.withdraw = function (amount) {
  if (isNaN(amount) || amount < 0 || !parseInt(amount, 10) || typeof amount !== 'number' || !Number.isInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }

  var deposit = 0;
  var withdrawal = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      withdrawal += this.transactions[i].amount;
    }
    var balance = deposit - withdrawal;
  }

  return balance;

};
