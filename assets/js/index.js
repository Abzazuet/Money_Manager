const add_account = document.querySelector("#add_account");
const ul = document.querySelector(".actions");
const account_actions = document.querySelectorAll("li");
const add_account_cont = document.querySelector(".cont-add-account");
const blury = document.querySelector(".blury");
const cerrar_ventana = document.querySelector(".cerrar");
const back_from_actions = document.querySelector("#back");
const create_account = document.querySelector("#submit-btn");
let table = document.getElementById("tabla");
let newAccount;
let num = document.getElementById("account_num").value;
let type = document.getElementById("account_type").value;
let balance = document.getElementById("account_balance").value;
let accountID = {};
let accounts;
//Prevent form from reloading
var form = document.getElementById("form");
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

class Account {
    constructor(num, type, balance, movement = " ", date = " ") {
        this.num = num;
        this.type = type;
        this.balance = balance;
        this.movement = movement;
        this.date = date;
    }
    add_to_table() {
        accountID[this.num] = { accountNum: this.num, type: this.type, balance: this.balance, movement: this.movement, date: this.date };
        localStorage["accountTable"] = JSON.stringify(accountID);
        let newAccount = document.createElement("tr");
        newAccount.innerHTML = `
        <td>${this.num}</td>
        <td>${this.type}</td>
        <td>$${this.balance}</td>
        <td>${this.movement}</td>
        <td>${this.date}</td>
        <td>
            <a href="#" id="button-action">
            <i class="fas fa-plus-circle"></i>
            </a>
        </td>
        `

        return newAccount;
    }
}
account_actions.forEach((account) => {
    account.addEventListener("click", () => {
        ul.classList.toggle("show");
    });
});
add_account.addEventListener("click", () => {
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
});
cerrar_ventana.addEventListener("click", () => {
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
});
create_account.addEventListener("click", () => {
    let num = document.getElementById("account_num").value;
    let type = document.getElementById("account_type").value;
    let balance = document.getElementById("account_balance").value;
    let cd = new Date();
    let newAccount = new Account(num, type, balance, "Added", `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    table.tBodies[0].appendChild(newAccount.add_to_table());
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
    actions = document.querySelectorAll("#button-action");
    actions.forEach((action) => {
        action.addEventListener("click", () => {
            ul.classList.toggle("show");
        });
    });
    console.log(localStorage["accountTable"]);
});
//
