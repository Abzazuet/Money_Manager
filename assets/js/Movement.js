class Movement {
    constructor(action, amount, note, date) {
        this.action = action;
        this.amount = amount;
        this.note = note;
        this.date = date;
    }
    add_to_table() {
        
        let newMovement = document.createElement("tr");
        newMovement.innerHTML= (
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
        console.log(newMovement);
        return newMovement;
    }
}