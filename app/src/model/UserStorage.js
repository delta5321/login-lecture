"use strict";


// #은 자바스크립트에서 변수를 private로 바꿔준다.

const fs = require("fs").promises;
class UserStorage {

    
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {  // reduce는 field를 newUsers에게 배열로 집어넣어줌, newUsers는 누적될 배열을 뜻함.
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;        // return값이 newUsers 필드로 누적되며 들어감.
        },{});      // reduce값의 자료구조를 오브젝트로 사용
        // console.log(newUsers);
        return newUsers;
    }
    
    static getUsers(isAll, ...fields) {    // ... 은 파라미터를 배열 형태로 받는다.
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data) =>{
            return this.#getUsers(data, isAll, fields); 
        })
        .catch(console.error);
    }
    
    static getUserInfo(id) {
        // const users = this.#users;
        return fs
        .readFile("./src/databases/users.json")
        .then((data) =>{
            return this.#getUserInfo(data, id); 
        })
        .catch(console.error);
    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => {id, psword, name};
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        // console.log(userInfo);
        return userInfo;
    }
    
    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)){
            return {success: false, msg : "이미 존재하는 아이디"}
            // throw Error("이미 존재하는 아이디 입니다.");
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        // 데이터 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true};
    }
}

module.exports = UserStorage;