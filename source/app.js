const express = require("express");
const app = express();
const {port, start} = require("./modules/server")
app.listen(port, start());
const methodOverride = require("method-override")


const {join} = require("path");

app.set("views", join(__dirname, "./views"))

app.set("view engine", "ejs");

const static = require("./modules/static");
app.use(static(join(__dirname, "../public")));

app.use(express.urlencoded({extended:true}))

app.use(methodOverride("m"))

app.use(require("./routes/routes.js"));