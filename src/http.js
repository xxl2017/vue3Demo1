import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5174/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
instance.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})
instance.interceptors.response.use(res=>{
  return Promise.resolve(res.data)
},err=>{
  alert(err)
})
instance.$get= (url,params)=>{
  return new Promise((resolve,reject)=>{
    instance.get(url,{
      params:params
    })
    .then(res=>{
      console.log(11,res)
      const {code,data,message} = res
      if(code === 200){
        return resolve(res.data)
      }else{
        return reject(message)
      }
    })
    .catch(err=>reject(err.data))
  })
}
export default instance