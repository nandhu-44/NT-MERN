let transactionHistory = ["start with 5000"];
let balance = 5000;
let amount, continueLoop = true;

while (continueLoop) {
    let whatToDo = parseInt(prompt("What do you want to do?\n1) Deposit\n2) Withdraw\n3) Show Balance\n4) Exit\nEnter your choice :"))
    switch (whatToDo) {
        case 1:
            amount = parseFloat(prompt(`Enter the amount you want to deposit : `));
            deposit(amount);
            break;
        case 2:
            amount = parseFloat(prompt("Enter the amount you want to withdraw : "));
            withdraw(amount);
            break;
        case 3:
            showBalance();
            break;
        case 4:
            continueLoop = false;
            console.log("Thank you :)");
            break;
        default:
            console.log("Invalid choice!");
            break;
    }
}

function deposit(amount) {
    balance += amount;
    console.log(`Successfully deposited ${amount} into account!\nBalance : ${balance}`)
    transactionHistory.push(amount + " deposited");
    console.log(transactionHistory);
}

function withdraw(amount) {
    if (balance < amount) {
        console.log("Insufficient balance!");
    } else {
        balance -= amount;
        console.log(`Successfully withdrawn ${amount} from account\nBalance : ${balance}`)
        transactionHistory.push(amount + " withdrawn");
        console.log(transactionHistory);
    }
}

function showBalance() {
    console.log(`Balance : ${balance}`)
}

