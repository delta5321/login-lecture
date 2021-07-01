"use strict";


const users ={
    id : ["woorimtIT", "나개발", "김팀장"],
    psword : ["1234", "1234", "123456"],
};

const output ={
    home : (req, res) => {   // function hello(req,res) => 문법과 똑같음
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        console.log(id,psword)
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                });
            };
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = {  // 키 하나만 넣으면 자체 값을 가짐 ex) hello : hello
    output,
    process,
};