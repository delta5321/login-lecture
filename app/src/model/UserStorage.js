"use strict";

// #은 자바스크립트에서 변수를 private로 바꿔준다.
class UserStorage {
    static #users = {
        id : ["woorimtIT", "나개발", "김팀장", "test"],
        psword : ["1234", "1234", "123456", "1234"],
        name : ["우리밋", "나개발", "김팀장","길준복"],
    };

    static getUsers(...fields) {    // ... 은 파라미터를 배열 형태로 받는다.
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {  // reduce는 field를 newUsers에게 배열로 집어넣어줌, newUsers는 누적될 배열을 뜻함.
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;        // return값이 newUsers 필드로 누적되며 들어감.
        },{});      // reduce값의 자료구조를 오브젝트로 사용
        // console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => {id, psword, name};
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }
}

module.exports = UserStorage;