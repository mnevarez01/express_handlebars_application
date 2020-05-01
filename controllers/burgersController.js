var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burgers.all(burgerData){
        res.render("index", { burger_data: burgerData })
    }
})