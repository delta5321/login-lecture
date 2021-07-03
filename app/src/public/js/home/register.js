"use strict";

// const { application } = require("express");

//선택자를 통해 데이터를 받아오기
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주세요");
    if (psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
    };
    console.log(req)

// 브라우저에 입력한 아이디와 패스워드를 서버로 전송
    fetch("/register", {
        method : "POST",
        headers : {
            "Content-type" : "application/json" // JSON 형태의 파일이라는 것을 명시적으로 알려줌
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())  // json()으로 Response의 스트림을 완전한 형태로 읽는것( Promise 형태)
    .then((res) => {
        if (res.success) {
            location.href = "/login";    // /로 이동
        } else {
            alert(res.msg);
        }
    }) //Promise 내부를 까보는것
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}