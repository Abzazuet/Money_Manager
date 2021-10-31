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
let accounts;
let num_movement;
//Prevent form from reloading
var form = document.getElementById("form");
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
let form2 = document.getElementById("form2");
function handleForm(event) {
    event.preventDefault();
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
    });
});

create_account_button.addEventListener("click", () => {
    let num = document.getElementById("account_num").value;
    let type = document.getElementById("account_type").value;
    let balance = document.getElementById("account_balance").value;
    let cd = new Date();
    let newAccount = new Account(num, type, balance, "Added", `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    accounts_table.tBodies[0].appendChild(newAccount.add_to_table());
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
    //MOVEMENT BUTTON
    let movements_button;
    movements_button = document.getElementById(`add_movement_${num}`);
    movements_button.addEventListener("click", () => {
        num_movement = movements_button.id.match(numRegex).toString().replace(/,/g, "");
        add_movement_cont.classList.toggle("show");
        blury.classList.toggle("blur");
    });
});
//
create_movement_button.addEventListener("click", () => {

    let movement_table = document.getElementById(`movements_${num_movement}`);
    let action = document.getElementById("action").value;
    let amount = document.getElementById("amount").value;
    let note = document.getElementById("note").value;
    let cd = new Date();
    let newMovement = new Movement(num_movement, action, amount, note, `${cd.getMonth() + 1}/${cd.getDate()}/${cd.getFullYear()}`);
    form2.addEventListener('submit', handleForm);
    movement_table.tBodies[0].appendChild(newMovement.add_to_table());
    let actions = document.querySelectorAll("#edit_movement");
    actions[actions.length - 1].addEventListener("click", () => {
        movement_actions.classList.toggle("show");
    });
    add_movement_cont.classList.remove("show");
    blury.classList.remove("blur");
});
