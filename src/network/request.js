import axios from 'axios'
export function request(config){
  const instance = axios.create({
    // baseURL: '/toutiao',
    timeout: 5000
  })
  instance.interceptors.response.use(res => {
  // Do something before response is sent
  return res.data.result.result.list;
  },error => {
  // Do something with response error
  return console.log("请求失败",error);
  ;
  });

  return instance(config)
}