const CarListView = require("../views/CarListView");
const Car = require("../models/Car");

class CarListController {
    constructor() {
        this.view = new CarListView();
    }

    init() {
        const car1 = new Car("Ford", "Mustang", 2022);
        const car2 = new Car("Toyota", "Camry", 2021);
        const carList = [car1, car2];
        this.view.render(carList);
    }
}

module.exports = CarListController;
