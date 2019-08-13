//引入express框架
let express = require('express')
//创建app应用对象
let app = express()
//用于解析post请求的请求体参数
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(request,response)=>{
  console.log(request.query);
  response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  console.log('test_get路由被调用了')
  response.send('我是服务器返回的GET请求的信息')
})

app.post('/test_post',(request,response)=>{
  console.log(request.body);
  response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  console.log('test_post路由被调用了')
  response.send('我是服务器返回的POST请求的信息')
})

app.listen(3000,(err)=>{
  if(!err) console.log('该服务器用于验证cors解决跨域问题，必须通过webstorm打开网页')
  else console.log(err)
})