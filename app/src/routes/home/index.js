"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.hello);
router.get('/login', ctrl.login);
router.post("/login", ctrl.login);

//변수를 외부에서 사용할 수 있도록 해주는 코드(내보내기)
module.exports = router;
