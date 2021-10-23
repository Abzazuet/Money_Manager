const actions = document.querySelectorAll("#button-action");
const add_account = document.querySelector("#add_account");
const ul = document.querySelector(".actions");
const account_actions = document.querySelectorAll("li");
const add_account_cont = document.querySelector(".cont-add-account");
const blury = document.querySelector(".blury");
const cerrar_ventana = document.querySelector(".cerrar");
const back_from_actions = document.querySelector("#back");
const create_account = document.querySelector("#submit-btn");
var tabla = document.querySelector("table");

class Account {
    constructor(num, type, balance, movement = " ", date = " ") {
        this.num = num;
        this.type = type;
        this.balance = balance;
        this.movement = movement;
        this.date = date;
    }
    add_to_table() {
        let newAccount = document.createElement("tr");
        newAccount.innerHTML = `
        <td>${this.num}</td>
        <td>${this.type}</td>
        <td>${this.balance}</td>
        <td>${this.movement}</td>
        <td>${this.date}</td>
        <td>
            <a href="#" id="button-action">
            <i class="fas fa-plus-circle"></i>
            </a>
        </td>
        `
        tabla.tBodies[0].appendChild(newAccount);
    }
}
actions.forEach((action) => {
    action.addEventListener("click", () => {
        ul.classList.toggle("show");
    });
});
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
    const num = document.getElementById("account_num").value;
    const type = document.getElementById("account_type").value;
    const balance = document.getElementById("account_balance").value;
    let cd = new Date();
    let newAccount = new Account(num, type, balance, "Added", `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    newAccount.add_to_table();
    tabla.insertRow(0);
    create_account.classList.toggle("show");
    blury.classList.toggle("blur");
});
