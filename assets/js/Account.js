class Account {
    constructor(num, type, balance, movement = " ", date = " ") {
        this.num = num;
        this.type = type;
        this.balance = balance;
        this.movement = movement;
        this.date = date;
    }
    add_to_table() {
        accountID[this.num] = {
            accountNum: this.num, 
            type: this.type, 
            balance: this.balance, 
            movement: this.movement, 
            date: this.date 
        };
        localStorage["accountTable"] = JSON.stringify(accountID);
        let newAccount = document.createElement("tr");
        newAccount.id = this.num;
        newAccount.innerHTML = `
        <td>
            <a href="#" id="delete_account">
                <i class="fas fa-trash"></i>
            </a>
            ${this.num}
        </td>
        <td>
            ${this.type}
        </td>
        <td>
            <table id="movements">
                <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Note</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
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
            <a href="#" id="add_movement">
              Add Movement
            </a>
        </td>
        `
        return newAccount;
    }
}