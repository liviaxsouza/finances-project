export default class Transaction {
    constructor(description, value, type) {
        this.description = description;
        this.value =  value;
        this.type =  type;
        this.id = this.generateId();
    }

    generateId() {
        return Math.floor(Math.random() * 1000);
    }
}