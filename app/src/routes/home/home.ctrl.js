"use strict";

const hello = (req, res) => {   // function hello(req,res) => 문법과 똑같음
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login")
};

module.exports = {  // 키 하나만 넣으면 자체 값을 가짐 ex) hello : hello
    hello,
    login,
};