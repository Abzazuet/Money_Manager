class Movement {
    constructor(account, action, amount, purpose, date) {
        try {
            let newId = document.getElementById(account).getElementsByClassName("edit_movement").length + 1;
            this.id = account + "_" + newId;
            this.account = account;
            this.action = action[0].toUpperCase() + action.substring(1);
            this.amount = amount;
            this.purpose = purpose[0].toUpperCase() + purpose.substring(1);
            this.date = date;
            this.newMovement = document.createElement("tr");
            movementID[this.id] = {
                account: this.account,
                action: this.action,
                amount: this.amount,
                purpose: this.purpose,
                date: this.date
            };
        }
        catch (e) {
        }

    }
    add_to_table() {
        let movement_table = document.getElementById(`movements_${this.account}`);
        localStorage["movementTable"] = JSON.stringify(movementID);
        this.newMovement.id = this.id;
        this.newMovement.innerHTML = (
            `
            <td class="max-width-table">${this.action}</td>
            <td class="max-width-table">$${this.amount}</td>
            <td class="max-width-table">${this.purpose}</td>
            <td class="max-width-table">${this.date}</td>
            <td class="max-width-table">
                <a href="#" id="edit_movement_${this.id}" class="edit_movement">
                <i class="fas fa-edit"></i>
                Movement
                </a>
            </td>
            `
        );
        movement_table.tBodies[0].appendChild(this.newMovement);
        let actions = document.querySelector(`#edit_movement_${this.id}`);
        actions.addEventListener("click", () => {
            movement_actions.classList.toggle("show");
        });
        return this.newMovement;
    }
}