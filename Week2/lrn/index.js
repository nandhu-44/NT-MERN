// let a = 10;
// var b = "Hello";
// const c = 7;

// b = 6
// a = true

// console.log("a : ", a);
// console.log("b : ", b);
// console.log("c : ", c);
// console.log("b/c : ", (b / c).toFixed(2));
// console.log();

// let a = "100";
// let b = "0";

// let c = a + b;
// console.log(c);

// c = a * b;
// console.log(c);

// c = a - b;
// console.log(c);

// c = a / b;
// console.log(c);

// c = a % b;
// console.log(c);

// console.log("10" === 10, 10 == "10");
// console.log("10" !== 10, 10 != "10");


//
// Greatest of three numbers
//


// let a = 10, b = 20, c = 15;

// if (a > b && a > c) {
//     console.log("a is greater.")
// } else if (b > c) {
//     console.log("b is greater.")
// } else {
//     console.log("c is greater.");
// }


// // Day-of-the-week


// let day = "monday";

// switch (day) {
//     case "sunday":
//         console.log("It is sunday.");
//         break;
//     case "monday":
//         console.log("It is monday.");
//         break;
//     case "tuesday":
//         console.log("It is tuesday.");
//         break;
//     case "wednesday":
//         console.log("It is wednesday.");
//         break;
//     case "thursday":
//         console.log("It is thursday.");
//         break;
//     case "friday":
//         console.log("It is friday.");
//         break;
//     case "saturday":
//         console.log("It is saturday.");
//         break;
//     default:
//         console.log("Where on earth are you?");
//         break;
// }



// let typeOfCalc = prompt("Enter the type of operation (add, sub, mul, div, mod) : ");

// if (!typeOfCalc === "add" || !typeOfCalc === "sub" || !typeOfCalc === "mul" || !typeOfCalc === "div" || !typeOfCalc === "mod") return;

// let a = parseFloat(prompt("Enter first number : "));
// let b = parseFloat(prompt("Enter second number : "));
// let c = null;

// switch (typeOfCalc) {
//     case "add":
//         c = a + b;
//         break;
//     case "sub":
//         c = a - b;
//         break;
//     case "mul":
//         c = a * b;
//         break;
//     case "div":
//         c = a / b;
//         break;
//     case "mod":
//         c = a % b;
//     default:
//         break;
// }



//
// Loops
//

// console.log(("For-loop"));

// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// console.log("While-loop");

// let a = 500, b = 10;
// while (a > 0) {
//     a = a - b;
//     console.log(a);
// }

// console.log("Do-while-loop");

// let c = 100, d = 14;
// do {
//     console.log("c is greater. c : ", c, " d : ", d)
//     c = c - d;
// } while (c > d);


// function sum(num1, num2) {
//     let tot = num1 + num2;
//     console.log(tot);
// }

// sum(6, 7);

// let balance = 5000;
// let amount, continueLoop = true;
// while (continueLoop) {
//     let whatToDo = parseInt(prompt("What do you want to do?\n1) Deposit\n2) Withdraw\n3) Show Balance\n4) Exit"))
//     switch (whatToDo) {
//         case 1:
//             amount = parseFloat(prompt(`Enter the amount you want to deposit : `));
//             deposit(amount);
//             break;
//         case 2:
//             amount = parseFloat(prompt("Enter the amount you want to withdraw : "));
//             withdraw(amount);
//             break;
//         case 3:
//             showBalance();
//             break;
//         case 4:
//             continueLoop = false;
//             alert("Thank you :)");
//             break;
//         default:
//             alert("Invalid choice!");
//             break;
//     }
// }

// function deposit(amount) {
//     balance += amount;
//     alert(`Successfully deposited ${amount} into account!\nBalance : ${balance}`)
// }

// function withdraw(amount) {
//     if (balance < amount) {
//         alert("Insufficient balance!");
//     } else {
//         balance -= amount;
//         alert(`Successfully withdrawn ${amount} from account\nBalance : ${balance}`)
//     }
// }

// function showBalance() {
//     alert(`Balance : ${balance}`)
// }


// const colors = ["red", "green", "blue", "yellow"];

// console.log(colors[colors.length - 1]);
// colors[2] = "black";

// colors.push("white");
// colors.pop();

// colors.shift();
// colors.unshift("orange");

// console.log(colors.toString());



let transactionHistory = ["start with 5000"];
let balance = 5000;
let amount, continueLoop = true;

while (continueLoop) {
    let whatToDo = parseInt(prompt("What do you want to do?\n1) Deposit\n2) Withdraw\n3) Show Balance\n4) Exit"))
    switch (whatToDo) {
        case 1:
            amount = parseFloat(prompt(`Enter the amount you want to deposit :`));
            deposit(amount);
            break;
        case 2:
            amount = parseFloat(prompt("Enter the amount you want to withdraw :"));
            withdraw(amount);
            break;
        case 3:
            showBalance();
            break;
        case 4:
            continueLoop = false;
            alert("Thank you :)");
            break;
        default:
            alert("Invalid choice!");
            break;
    }
}

function deposit(amount) {
    balance += amount;
    let dateAndTime = getDateAndTime();
    alert(`Successfully deposited ${amount} into account!\nBalance : ${balance}`)
    transactionHistory.push(amount + " deposited at " + dateAndTime);
    console.log(transactionHistory.toString());
}

function withdraw(amount) {
    if (balance < amount) {
        alert("Insufficient balance!");
    } else {
        let dateAndTime = getDateAndTime();
        balance -= amount;
        alert(`Successfully withdrawn ${amount} from account\nBalance : ${balance}`)
        transactionHistory.push(amount + " withdrawn at " + dateAndTime);
        console.log(transactionHistory.toString());
    }
}

function showBalance() {
    alert(`Balance : ${balance}`)
}

function getDateAndTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${hour}:${minute}:${second} on ${day}/${month}/${year}`;
}
