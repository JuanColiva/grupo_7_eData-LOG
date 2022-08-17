const express = require("express");
const app = express();
const method = require("method-override")
const {port, start} = require("./modules/server")
app.listen(port, start());

const {join} = require("path");

app.set("views", join(__dirname, "./views"))

app.set("view engine", "ejs");

const static = require("./modules/static");
app.use(static(join(__dirname, "../public")));

app.use(express.urlencoded({extended:true}))

app.use(method("m"))

app.use(require("./routes/routes.js"));