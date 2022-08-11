const path = require("path");
const pug = require("pug");
const express = require("express");
const app = express();

app.set("view engine", pug);
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("profile.pug", {});
});

module.exports = app;