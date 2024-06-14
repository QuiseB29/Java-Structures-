// Bank account object to store balance
let bankAccount = {
    balance: 0
};

// Task 1: Create a function to handle deposits into a bank account
function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${bankAccount.balance}`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
}

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= bankAccount.balance) {
            bankAccount.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${bankAccount.balance}`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}

// Task 3: Develop a function to check the current balance of the account
function checkBalance() {
    console.log(`Current balance: $${bankAccount.balance}`);
}

// Example usage:
deposit(100);         // Deposited: $100. New balance: $100
withdraw(50);         // Withdrew: $50. New balance: $50
checkBalance();       // Current balance: $50
withdraw(100);        // Insufficient balance for this withdrawal.
deposit(200);         // Deposited: $200. New balance: $250
checkBalance();       // Current balance: $250
