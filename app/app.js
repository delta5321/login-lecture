"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 셋팅
app.set("views", "./src/views");    //뷰 폴더 지정 render 사용시 뷰 경로 지정 안해도 됨
app.set("view engine", "ejs");  //view engine을 ejs로 사용


app.use(express.static(`${__dirname}/src/public`)); //${__dirname}은 현재 디렉토리를 나타냄, 정적 경로 추가
app.use("/", home); //use - > 미들웨어를 등록하는 코드, 

module.exports = app; // app이라는 이름으로 내보내기

//npm init => package.json 생성 명령어 (패키지 관리)