"use strict";

const { application } = require("express");

//선택자를 통해 데이터를 받아오기
const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };


    fetch("/login", {
        method : "POST",
        header : {
            "Content-type" : "application/json" // JSON 형태의 파일이라는 것을 명시적으로 알려줌
        },
        body : JSON.stringify(req),
    });
}