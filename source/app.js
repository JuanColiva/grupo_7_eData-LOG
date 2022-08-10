const express = require("express");
const app = express();

const {port, start} = require("./modules/server")
app.listen(port, start());

const {join} = require("path");

const static = require("./modules/static");
app.use(static(join(__dirname, "../public")));

app.use(require("./routes/routes"));