import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});    // 엑시오스 객체 생성

export default instance;