"use strict";

const UserStorage = require("../../model/UserStorage");

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
        const id = req.body.id;
        const psword = req.body.psword;
        
        const users = UserStorage.getUsers("id", "psword");

         const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                response.id = id;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports = {  // 키 하나만 넣으면 자체 값을 가짐 ex) hello : hello
    output,
    process,
};