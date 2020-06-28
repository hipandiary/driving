import {request} from 'network/request.js'
export function getdriving(){
  return request({
    url:'/jisuapi/driverexamQuery?type=c1&subject=1&pagesize=20&pagenum=1&sort=normal&appkey=6ed480148894258d07ec97652f8b7412',
    method: 'get'
  })
}