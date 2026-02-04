import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:3001/",
    timeout:5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Hết hạn đăng nhập, văng ra trang Login thôi!");
          break;
        case 404:
          console.error("Không tìm thấy trang này rồi!");
          break;
        case 500:
          console.error("Server đang bảo trì rồi đồng chí ơi!");
          break;
      }
    }
    return Promise.reject(error);
  }
)

export { axiosInstance };