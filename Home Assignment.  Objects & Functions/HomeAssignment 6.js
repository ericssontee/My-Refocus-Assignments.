// Task 1. Create a bank account Develop a banking system. 
// To do that, first, create an object named “bankAccount” with the following fields: 

// * “bankAccountID”, which is autogenerated 
// * “accountNumber” 
// * “credentials”, which is an array with a username, password, and pin 
// * “balance”, which is an amount of money “createdAt”, which is a date

const bankAccount = {
    "bankAccountID": Math.floor((Math.random() * 100) + 1),
    "accountNumber":'54323456',
    "credentials": {
        userName: 'takFuji',
        password: 'ae86',
        pin:123
    },
    "balance":100000,
    "createdAt":Date()

}



// Task 2. Create a user account 

// Create an object which represents a user account and has the following fields: 
// * “bankAccount”, which is an object from task 1 
// * “debitCard”, which is a card number 
// * “firstName” 
// * “lastName” 
// * “birthDate”
// * “validID”, which is an array with a type of ID—passport or driver’s license—and the ID number 
// * “address” 


const userAccount = {
    "bankAccount": bankAccount,
    "debitCard": Math.floor((Math.random() * 900000000000000) + 1),
    "firstName": 'Takumi',
    "lastName": 'Fujiwara',
    "birthDate": Date("1980-09-10"),
    "validID": [{typeID: "Driver's License", idNumber: "123445324564"}],
    "address": 'Gunma Prefecture, Japan'
}


// Task 3. Add functionality to the system
 
// Outside the objects, create functions that enable interaction with a user’s bank account: 
// * “getBankAccountDetails”, which checks if the username and password are correct and shows the bank account details 
// * “withdrawMoney”, which checks if the username and password are correct and enables getting money from the bank account using the account number 
// * “depositMoney”, which allows putting money in the bank account using the account number


function getBankAccountDetails() {
    console.log('Bank Account Details:\n')
    console.log('Username: '+userAccount['bankAccount'].credentials.userName)
    console.log('Password: '+userAccount['bankAccount'].credentials.password)
    console.log('Account Number: '+userAccount['bankAccount'].accountNumber)
    console.log('Balance: ₱'+userAccount['bankAccount'].balance)
    console.log('Created At: '+userAccount['bankAccount'].createdAt)
}

function withDrawMoney(amount) {
    if (amount > userAccount['bankAccount'].balance){
        console.log(`Hi ${userAccount['firstName']}. Process won't continue due to insuficient Funds.\nPlease withdraw that is lower or equal to the total balance.`);
    } else {
        userAccount['bankAccount'].balance -= amount
        console.log(`Hi ${userAccount['firstName']}. You've withdrawn ₱${amount.toFixed(2)}.\nThe total balance of your account as of now is ₱${userAccount['bankAccount'].balance.toFixed(2)}.`);
    }
}

function depositMoney(amount){
    userAccount['bankAccount'].balance += amount
    console.log(`Hi ${userAccount['firstName']}. You've diposited ₱${amount.toFixed(2)}.\nThe total balance of your account as of now is ₱${userAccount['bankAccount'].balance.toFixed(2)}.`);
}

getBankAccountDetails();
console.log('\n');
withDrawMoney(3500);
console.log('\n');
depositMoney(20000)
