import axios from 'axios'

import { Toast } from 'antd-mobile'

const BASE_URL = 'http://api-haoke-dev.itheima.net';
const instance = axios.create({
  baseURL: BASE_URL
})

instance.interceptors.request.use(function (config) {
  Toast.loading('加载中....',0)
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  const data = {
    status: response.data.status,
    description: response.data.description,
    data: response.data.body
  }
  Toast.hide()
  return data;
}, function (error) {
  return Promise.reject(error);
});
export { BASE_URL }
export default instance