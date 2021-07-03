"use strict";

//선택자를 통해 데이터를 받아오기
const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };

// 브라우저에 입력한 아이디와 패스워드를 서버로 전송
    fetch("/login", {
        method : "POST",
        headers : {
            "Content-type" : "application/json" // JSON 형태의 파일이라는 것을 명시적으로 알려줌
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())  // json()으로 Response의 스트림을 완전한 형태로 읽는것( Promise 형태)
    .then((res) => {
        if (res.success) {
            location.href = "/";    // /로 이동
            alert(res.body.id)
        } else {
            alert(res.msg);
        }
    }) //Promise 내부를 까보는것
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}