const express = require("express");
const path = require("path");
const app = express();
const HomeController = require("../src/controllers/HomeController");
const CarListController = require("../src/controllers/CarListController");

const homeController = new HomeController();
const carListController = new CarListController();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Rota para a página inicial
app.get("/", (req, res) => {
    homeController.init();
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Rota para a lista de carros
app.get("/cars", (req, res) => {
    carListController.init();
    res.send("Lista de carros"); // Você pode personalizar essa resposta conforme necessário
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
