const express = require("express");
const app = express();
const HomeController = require("../src/controllers/HomeController");
const CarListController = require("../src/controllers/CarListController");

const homeController = new HomeController();
const carListController = new CarListController();

app.get("/", (req, res) => {
    homeController.init();
    res.send("Página inicial");
});

app.get("/cars", (req, res) => {
    carListController.init();
    res.send("Lista de carros");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
