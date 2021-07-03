"use strict";

const User = require("../../model/User");

const output ={
    home : (req, res) => {   // function hello(req,res) => 문법과 똑같음
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render('home/register');
    }
};

const process = {
    login : (req, res) => {
        const user = new User (req.body);
        const response = user.login();
        return res.json(response);
    },

    register : (req, res) => {
        const user = new User (req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {  // 키 하나만 넣으면 자체 값을 가짐 ex) hello : hello
    output,
    process,
};