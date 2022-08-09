const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath) );

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/contacto", (req, res) => {
    let file = path.join(__dirname, "views", "contacto.html")
    res.sendFile(file);
});

app.get("/login", (req, res) => {
    let file = path.join(__dirname, "views", "login.html")
    res.sendFile(file);
});

app.get("/productCar", (req, res) => {
    let file = path.join(__dirname, "views", "productCar.html")
    res.sendFile(file);
});