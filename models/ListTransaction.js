export default class ListTransaction {
    constructor() {
        this.transactions = [];
        this.balance = 0;
        this.revenues = 0;
        this.expenses = 0;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
        this.attValue();
    }

    getAllTransactions() {
        return this.transactions;
    }

    getTransactionById(id) {
        return this.transactions.find(transaction => transaction.id == id);
    }

    deleteTransaction(id){
        const listTransaction = (this.transactions = this.transactions.filter(
            (transaction) => transaction.id != id));

        this.attValue();

        return listTransaction;
    }

    updateTransaction(id, description, value) {
        const transaction = this.getTransactionById(id);

        transaction.description = description;
        transaction.value = value;

        this.attValue();

        return transaction;
    }

    attValue() {
        this.balance = 0;
        this.revenues = 0;
        this.expenses = 0;

        this.transactions.map((transaction) => {
            if (transaction.type == "Receita") {
                this.revenues = Number(transaction.value) + Number(this.revenues)
            } else {
                this.expenses = Number(transaction.value) + Number(this.expenses)
            }
        });
        
        this.balance = this.revenues - this.expenses;
    }
}