const actions = document.querySelectorAll("#button-action");
const add_account = document.querySelector("#add_account");
const ul = document.querySelector(".actions");
const account_actions = document.querySelectorAll("#action");
actions.forEach((action)=>{
    action.addEventListener("click", () =>{
        ul.classList.toggle("show");
    });
});
account_actions.forEach((account) =>{
    account.addEventListener("click", () =>{
        ul.classList.toggle("show");
    });
});