import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        // 로그인 로그아웃 때 마다 바꿔줘야 함
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});    // 엑시오스 객체 생성

export default instance;