class Account {
    constructor(num, type, balance, movement = " ", date = " ") {
        this.id = num;
        this.type = type[0].toUpperCase() + type.substring(1);
        this.balance = balance;
        this.movement = movement;
        this.date = date;
        this.newAccount = document.createElement("tr");
        accountID[this.id] = {
            accountNum: this.id,
            type: this.type,
            balance: this.balance,
            movement: this.movement,
            date: this.date
        };
        localStorage["accountTable"] = JSON.stringify(accountID);
    }
    add_to_table() {
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
                        <th class="max-width-table">Transaction</th>
                        <th class="max-width-table">Amount</th>
                        <th class="max-width-table">Purpose</th>
                        <th class="max-width-table">Date</th>
                        <th class="max-width-table">Action</th>
                    </tr>
                </thead>
                <tbody>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                </tbody>
                <tfoot>
                    <tr>
                        <th class="max-width-table">Total</th>
                        <td class="max-width-table" id="total_${this.id}">$${this.balance}</td>
                        <th class="max-width-table">Initial</th>
                        <td class="max-width-table">$${this.balance}</td>
                        <td class="max-width-table">
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
        accounts_table.tBodies[0].appendChild(this.newAccount);
        let add_movement = document.getElementById(`add_movement_${this.id}`);
        let delete_account = document.getElementById(`delete_account_${this.id}`);
        add_movement.addEventListener("click", () => {
            belong_to_account = add_movement.id.match(numRegex).toString().replace(/,/g, "");
            add_movement_cont.classList.toggle("show");
            blury.classList.toggle("blur");
        });
        delete_account.addEventListener("click", () => {
            this.newAccount.innerHTML = "";
            accountID[this.id] = {
            };
            
            localStorage["accountTable"] = JSON.stringify(accountID);
        });
        return this.newAccount;
    }
}