class Account {
    constructor(num, type, balance, movement = " ", date = " ") {
        this.id = num;
        this.type = type;
        this.balance = balance;
        this.movement = movement;
        this.date = date;
        this.newAccount = document.createElement("tr");
    }
    add_to_table() {
        accountID[this.id] = {
            accountNum: this.id,
            type: this.type,
            balance: this.balance,
            movement: this.movement,
            date: this.date
        };
        localStorage["accountTable"] = JSON.stringify(accountID);
        this.newAccount.id = this.id;
        this.newAccount.innerHTML = `
        <td>
            <a href="#" id="delete_account_${this.id}">
                <i class="fas fa-trash"></i>
            </a>
            ${this.id}
        </td>
        <td>
            ${this.type}
        </td>
        <td>
            <table id="movements_${this.id}">
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Purpose</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>$</td>
                        <td>Tbd</td>
                        <td></td>
                        <td>
                        Tbd
                        </td>
                    </tr>
                </tfoot>
            </table>
        </td>
        <td>
            <a href="#" id="add_movement_${this.id}">
            <i class="fas fa-plus-circle"></i>
            Movement
            </a>
        </td>
        `
        return this.newAccount;
    }
    retrive_all() {

    }
    save_all() {

    }
    destroy() {

    }
}