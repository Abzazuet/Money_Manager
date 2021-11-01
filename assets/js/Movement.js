class Movement {
    constructor(account, action, amount, purpose, date) {
        let newId = document.getElementById(account).getElementsByClassName("edit_movement").length+1;
        this.id = account+"_"+newId;
        this.account = account;
        this.action = action[0].toUpperCase()+action.substring(1);
        this.amount = amount;
        this.purpose = purpose[0].toUpperCase()+purpose.substring(1);
        this.date = date;
        this.newMovement = document.createElement("tr");
    }
    add_to_table() {
        movementID[this.id] = {
            account: this.account,
            action: this.action,
            amount: this.amount,
            purpose: this.purpose,
            date: this.date
        };
        localStorage["movementTable"] = JSON.stringify(movementID);
        this.newMovement.id = this.id;
        this.newMovement.innerHTML = (
            `
            <td>${this.action}</td>
            <td>$${this.amount}</td>
            <td>${this.purpose}</td>
            <td>${this.date}</td>
            <td>
                <a href="#" id="edit_movement_${this.id}" class="edit_movement">
                <i class="fas fa-edit"></i>
                Movement
                </a>
            </td>
            `
        );
        return this.newMovement;
    }
    retrive_all() {

    }
    save_all() {

    }
    destroy() {

    }
}