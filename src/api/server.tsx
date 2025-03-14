// axios.js
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加 Token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data; // 返回响应数据
  },
  error => {
    // 对响应错误做点什么
    console.error('响应错误:', error);
    if (error.response) {
      // 服务器响应但状态码不是 2xx
      console.error('状态码:', error.response.status);
      console.error('错误信息:', error.response.data);
    } else if (error.request) {
      // 请求发送出去但没有收到响应
      console.error('请求发送失败:', error.request);
    } else {
      // 其他错误
      console.error('请求配置错误:', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装常用的请求方法
export default {
  get(url: string, params?: any) {
    return service.get(url, { params });
  },
  post(url: string, data?: any) {
    return service.post(url, data);
  },
  put(url: string, data?: any) {
    return service.put(url, data);
  },
  delete(url: string) {
    return service.delete(url);
  },
};