const HomeView = require("../views/HomeView");

class HomeController {
    constructor() {
        this.view = new HomeView();
    }

    init() {
        this.view.render();
    }
}

module.exports = HomeController;
