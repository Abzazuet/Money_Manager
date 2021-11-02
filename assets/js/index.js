//Global variables
let numRegex = /\d/g;
//TABLES
let accounts_table = document.getElementById("accounts");
//ACCOUNTS variables
const add_account = document.querySelector("#add_account");
const account_actions = document.querySelectorAll("li");
//CONTAINERS TO BE SHOWN AND REMOVED
const add_account_cont = document.querySelector(".cont-add-account");
const add_movement_cont = document.querySelector(".cont-add-movement");
const blury = document.querySelector(".blury");
const movement_actions = document.querySelector(".movement-actions");

//BUTTONS
const create_account_button = document.querySelector("#submit-account");
const create_movement_button = document.querySelector("#submit-movement");
const close_window_button = document.querySelectorAll(".close-window");
//GLOBAL
let accountID = {};
let movementID = {};
let accounts;
let belong_to_account;
//Prevent form from reloading
function retrieveAllAccounts(accounts) {
    //Load everythin in the database
    let keysAccount = Object.keys(JSON.parse(accounts));
    let acc = JSON.parse(accounts);
    for (let i = 0; i < keysAccount.length; i++) {
        let accData = acc[keysAccount[i]];
        if (accData.type == undefined) {
            continue;
        }
        let newAccount = new Account(accData.accountNum, accData.type, accData.balance, accData.movement, accData.date);
        accounts_table.tBodies[0].appendChild(newAccount.add_to_table());
    }
}
function retrieveAllMovements(movements) {
    //Load everythin in the database
    let keysMovements = Object.keys(JSON.parse(movements));
    let p = JSON.parse(localStorage["movementTable"]);
    try {
        keysMovements.map(movement => {
            let total_id = document.getElementById(`total_${p[movement].account}`);
            let total = parseInt(total_id.innerHTML.substring(1));
            let action = p[movement].action;
            let amount = p[movement].amount;
            if (action == "Expense") {
                total -= parseInt(amount);
            }
            else {
                total += parseInt(amount);
            }
            total_id.innerHTML = `$${total}`;
        });
    }
    catch(e){
        console.log(e);
    }
    let movement = JSON.parse(movements);
    for (let i = 0; i < keysMovements.length; i++) {
        let movementInfo = movement[keysMovements[i]];
        let newMovement = new Movement(movementInfo.account, movementInfo.action, movementInfo.amount, movementInfo.purpose, movementInfo.date);
        newMovement.add_to_table();
    }
}
try {
    retrieveAllAccounts(localStorage["accountTable"]);
    retrieveAllMovements(localStorage["movementTable"]);
}
catch (e) {
    console.log(e)
}



account_actions.forEach((account) => {
    account.addEventListener("click", () => {
        movement_actions.classList.toggle("show");
    });
});
add_account.addEventListener("click", () => {
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
});
close_window_button.forEach((button) => {
    button.addEventListener("click", () => {
        add_account_cont.classList.remove("show");
        blury.classList.remove("blur");
        add_movement_cont.classList.remove("show");
        movement_actions.classList.remove("show");
    });
});

create_account_button.addEventListener("click", () => {
    let num = document.getElementById("account_num").value;
    let type = document.getElementById("account_type").value;
    let balance = document.getElementById("account_balance").value;
    let cd = new Date();
    let newAccount = new Account(num, type, balance, "Added", `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    newAccount.add_to_table();
    add_account_cont.classList.remove("show");
    blury.classList.remove("blur");
    movement_actions.classList.remove("show");
});
//
create_movement_button.addEventListener("click", () => {
    let action = document.getElementById("action").value;
    let amount = document.getElementById("amount").value;
    let purpose = document.getElementById("purpose").value;
    let cd = new Date();
    let newMovement = new Movement(belong_to_account, action, amount, purpose, `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    newMovement.add_to_table();
    add_movement_cont.classList.remove("show");
    blury.classList.remove("blur");
});
