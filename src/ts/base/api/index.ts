import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/jeecg-boot/",
});

export default request;
