console.clear();
const log = console.log;



/**
 * bacnk-acc -> name, accno, ifsc-code, branch-name, balance, image-url, transactionHistory[], address
 * transactionHistory array -> date, deposit/withdrawn(type), amount
 */

// const bankAccounts = [
//     {
//         name: "Nandhu",
//         accno: 9876543214234,
//         ifscCode: "SBI0000001",
//         branchName: "SBI",
//         balance: 100000,
//         imageUrl: "https://1.gravatar.com/avatar/a62b50b81c241902a7fdb6ae31e38d18b70ba5514cdaf1c2cfff512d0a569e20?size=256",
//         transactionHistory: [
//             {
//                 date: "2024-02-17",
//                 type: "deposit",
//                 amount: 5000
//             },
//             {
//                 date: "2024-02-18",
//                 type: "withdrawn",
//                 amount: 2000
//             },
//             {
//                 date: "2024-02-19",
//                 type: "deposit",
//                 amount: 10000
//             },
//             {
//                 date: "2024-02-20",
//                 type: "withdrawn",
//                 amount: 5000
//             }
//         ],
//         address: {
//             doorNo: "123",
//             city: "Kochi",
//             state: "Kerala",
//             pincode: 682023
//         }
//     },
//     {
//         name: "Anandhu",
//         accno: 9876543214235,
//         ifscCode: "SBI0000002",
//         branchName: "SBI",
//         balance: 200000,
//         imageUrl: "https://1.gravatar.com/avatar/a62b50b81c241902a7fdb6ae31e38d18b70ba5514cdaf1c2cfff512d0a569e20?size=256",
//         transactionHistory: [
//             {
//                 date: "2024-02-17",
//                 type: "deposit",
//                 amount: 3000
//             },
//             {
//                 date: "2024-02-18",
//                 type: "withdrawn",
//                 amount: 30450
//             },
//             {
//                 date: "2024-02-19",
//                 type: "deposit",
//                 amount: 1000
//             },
//             {
//                 date: "2024-02-20",
//                 type: "withdrawn",
//                 amount: 50000
//             }
//         ],
//         address: {
//             doorNo: "123",
//             city: "Kochi",
//             state: "Kerala",
//             pincode: 682023
//         }

//     }
// ]

let signedIn = localStorage.getItem("signedIn");
if (!signedIn) localStorage.setItem("signedIn", "false");

const display = document.getElementById("displayDiv");

const accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")) : [];
const bankAccounts = localStorage.getItem("bankAccounts") ? JSON.parse(localStorage.getItem("bankAccounts")) : [];
let myAccount;

if (signedIn === "true") {
    document.getElementById("loginButton").classList.add("hidden");
    document.getElementById("logoutButton").classList.remove("hidden");
    document.getElementById("signUpButton").classList.add("hidden");
    myAccount = bankAccounts.find(acc => acc.username === localStorage.getItem("username"));
    if (myAccount) {
        localStorage.setItem("myAccount", JSON.stringify(myAccount));
        document.getElementById("createAccountButton").classList.add("hidden");
        document.getElementById("deleteAccountButton").classList.remove("hidden");
    }
}

function createAccount() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const name = prompt("Enter your name");
    const username = localStorage.getItem("username");
    const accno = parseInt(prompt("Enter your account number"));
    const ifscCode = prompt("Enter your ifsc code");
    const branchName = prompt("Enter your branch name");
    const balance = parseInt(prompt("Enter your balance"));
    const imageUrl = prompt("Enter your image url");
    const transactionHistory = [];
    const address = {
        doorNo: prompt("Enter your door number"),
        city: prompt("Enter your city"),
        state: prompt("Enter your state"),
        pincode: parseInt(prompt("Enter your pincode"))
    };

    if (isNaN(accno) || isNaN(balance) || isNaN(address.pincode) || !name || !branchName || !ifscCode) return alert("Invalid input");

    const account = {
        name,
        username,
        accno,
        ifscCode,
        branchName,
        balance,
        imageUrl,
        transactionHistory,
        address
    };

    bankAccounts.push(account);
    localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    window.localStorage.setItem("myAccount", JSON.stringify(account));
    display.innerHTML = `<p class="text-left pl-52">Account created successfully</p>`;
    document.getElementById("createAccountButton").classList.add("hidden");
    document.getElementById("deleteAccountButton").classList.remove("hidden");
}

function deleteAccount() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const myAccount = JSON.parse(window.localStorage.getItem("myAccount"));
    if (!myAccount) return display.innerHTML = `<p class="text-left pl-52>Account not found!</p>`

    const index = bankAccounts.findIndex(acc => acc.username === myAccount.username);
    bankAccounts.splice(index, 1);
    localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    localStorage.removeItem("myAccount");
    display.innerHTML = `<p class="text-left pl-52">Account deleted successfully!</p>`;
    document.getElementById("createAccountButton").classList.remove("hidden");
    document.getElementById("deleteAccountButton").classList.add("hidden");
}


function deposit() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const myAccount = JSON.parse(window.localStorage.getItem("myAccount"));
    if (!myAccount) return display.innerHTML = `<p class="text-left pl-52">Account not found</p>`;

    const amount = parseInt(prompt("Enter the amount to deposit"));
    if (isNaN(amount) || amount < 0) return display.innerHTML = `<p class="text-left pl-52">Invalid amount</p>`;

    myAccount.balance += amount;
    myAccount.transactionHistory.push({
        date: new Date().toISOString().split('T')[0],
        type: "deposit",
        amount
    });

    bankAccounts.map(acc => {
        if (acc.username === myAccount.username) {
            acc.balance = myAccount.balance;
            acc.transactionHistory = myAccount.transactionHistory;
        }
    });

    window.localStorage.setItem("myAccount", JSON.stringify(myAccount));
    window.localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    display.innerHTML = `<p class="text-left pl-52">Deposited ${amount} successfully!</p>`;
}

function withdraw() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const myAccount = JSON.parse(window.localStorage.getItem("myAccount"));
    if (!myAccount) return display.innerHTML = `<p class="text-left pl-52">Account not found</p>`;

    const amount = parseInt(prompt("Enter the amount to withdrawn"));
    if (isNaN(amount) || amount < 0) return display.innerHTML = `<p class="text-left pl-52">Invalid amount</p>`;

    if (myAccount.balance < amount) {
        display.innerHTML = `<p class="text-left pl-52">Insufficient balance</p>`;
        return;
    }
    myAccount.balance -= amount;
    myAccount.transactionHistory.push({
        date: new Date().toISOString().split('T')[0],
        type: "withdrawn",
        amount
    });

    bankAccounts.map(acc => {
        if (acc.username === myAccount.username) {
            acc.balance = myAccount.balance;
            acc.transactionHistory = myAccount.transactionHistory;
        }
    });

    window.localStorage.setItem("myAccount", JSON.stringify(myAccount));
    window.localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    display.innerHTML = `<p class="text-left pl-52">Withdrawn ${amount} successfully!</p>`;
}

function showBalance() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const myAccount = JSON.parse(window.localStorage.getItem("myAccount"));
    if (!myAccount) return display.innerHTML = `<p class="text-left pl-52">Account not found</p>`;

    display.innerHTML = `<p class="text-left pl-52">Your balance is ${myAccount.balance}</p>`;
}

function showDetails() {
    if (!isSignedIn()) return alert("Please sign in to continue");

    const myAccount = JSON.parse(window.localStorage.getItem("myAccount"));
    if (!myAccount) return display.innerHTML = `<p class="text-left pl-52">Account not found</p>`;

    display.innerHTML = `<p class="text-left pl-52">Name: ${myAccount.name}</p>
    <p class="text-left pl-52">Account number: ${myAccount.accno}</p>
    <p class="text-left pl-52">IFSC code: ${myAccount.ifscCode}</p>
    <p class="text-left pl-52">Branch name: ${myAccount.branchName}</p>
    <p class="text-left pl-52">Balance: ${myAccount.balance}</p>
    <p class="text-left pl-52">Address: ${myAccount.address.doorNo}, ${myAccount.address.city}, ${myAccount.address.state}, ${myAccount.address.pincode}</p>
    <p class="text-left pl-52">Transaction history: ${myAccount.transactionHistory.map(tran => `${tran.date}: ${tran.type} $${tran.amount}`).join(", ") || "None"}</p>   
    `;
}

function signIn() {
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");

    const account = accounts.find(acc => acc.username === username && acc.password === password);
    if (account) {
        localStorage.setItem("signedIn", "true");
        localStorage.setItem("username", account.username);
        alert("Signed in successfully");
        document.getElementById("loginButton").classList.add("hidden");
        document.getElementById("logoutButton").classList.remove("hidden");
        document.getElementById("signUpButton").classList.add("hidden");
        myAccount = bankAccounts.find(acc => acc.username === username);
        if (myAccount) {
            localStorage.setItem("myAccount", JSON.stringify(myAccount));
            document.getElementById("createAccountButton").classList.add("hidden");
            document.getElementById("deleteAccountButton").classList.remove("hidden");
        }
    } else {
        alert("Invalid credentials");
    }
}

function signUp() {
    const username = prompt("Enter your username");
    const password = prompt("Enter your password");
    if (!username || !password) return alert("Invalid input");

    const account = accounts.find(acc => acc.username === username);
    if (account) {
        alert("Username already exists");
    } else {
        accounts.push({ username, password });
        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert("Account created successfully");
    }
}

function signOut() {
    display.innerHTML = "";
    localStorage.setItem("signedIn", "false");
    localStorage.removeItem("username");
    alert("Signed out successfully");
    document.getElementById("loginButton").classList.remove("hidden");
    document.getElementById("logoutButton").classList.add("hidden");
    document.getElementById("signUpButton").classList.remove("hidden");
    localStorage.removeItem("myAccount");
    document.getElementById("createAccountButton").classList.remove("hidden");
    document.getElementById("deleteAccountButton").classList.add("hidden");
}

function isSignedIn() {
    return localStorage.getItem("signedIn") === "true";
}


// const onConfirmRefresh = function (event) {
//     event.preventDefault();
//     return event.returnValue = "Are you sure you want to leave the page?";
// }

// window.addEventListener("beforeunload", onConfirmRefresh);