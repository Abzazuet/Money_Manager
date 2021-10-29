//TABLES
let accounts_table = document.getElementById("accounts");
let numRegex = /\d/g;
//ACCOUNTS
const add_account = document.querySelector("#add_account");
const account_actions = document.querySelectorAll("li");
//CONTAINERS
const add_account_cont = document.querySelector(".cont-add-account");
const add_movement_cont = document.querySelector(".cont-add-movement");
const blury = document.querySelector(".blury");
const ul = document.querySelector(".actions");

//BUTTONS
const back_from_actions = document.querySelector("#back");
const create_account = document.querySelector("#submit-btn");
const create_movement = document.querySelector("#submit-movement");
const close_window = document.querySelector(".cerrar");
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

account_actions.forEach((account) => {
    account.addEventListener("click", () => {
        ul.classList.toggle("show");
    });
});
add_account.addEventListener("click", () => {
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
});
close_window.addEventListener("click", () => {
    add_account_cont.classList.toggle("show");
    blury.classList.toggle("blur");
});
create_account.addEventListener("click", () => {
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
create_movement.addEventListener("click", () => {
    let form2 = document.getElementById("form2");
    function handleForm(event) {
        event.preventDefault();
    }
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
        ul.classList.toggle("show");
    });
    add_movement_cont.classList.remove("show");
    blury.classList.remove("blur");
});
