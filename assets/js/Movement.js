class Movement {
    constructor(id, action, amount, note, date) {
        this.id = id;
        this.action = action;
        this.amount = amount;
        this.note = note;
        this.date = date;
        this.newMovement = document.createElement("tr");
    }
    add_to_table() {
        this.newMovement.innerHTML = (
            `
            <td>${this.action}</td>
            <td>$${this.amount}</td>
            <td>${this.note}</td>
            <td>${this.date}</td>
            <td>
                <a href="#" id="edit_movement">
                <i class="fas fa-plus-circle"></i>
                Edit movement
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