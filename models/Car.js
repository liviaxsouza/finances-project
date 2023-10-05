class Car {
    constructor(brand, model, color, year, plate) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.plate = plate;
        this.id = this.generateId();
    }

    generateId() {
        return Math.floor(Math.random() * 10000);
    }
}

export default Car;