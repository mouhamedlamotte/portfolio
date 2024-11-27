import axios from "axios";


const BaseUrl = "http://localhost:3000/api";

export const AxiosInstance = axios.create({
    baseURL: BaseUrl,
});

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});