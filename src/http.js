import axios from 'axios'
const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
instance.interceptors.request.use()
instance.interceptors.request.use(config=>{
  let token = cookies.get('token')
  if(token){
    config.headers.token = token
  }
  config.headers = Object.assign(config.headers,{
    'Content-Type': 'application/json'
  })
  return config
},err=>{
  return Promise.reject(err)
})
instance.interceptors.response.use(res=>{

},err=>{
  alert(err)
})
export default instance