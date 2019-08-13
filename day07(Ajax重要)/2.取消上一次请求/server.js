//1.引入express
let express = require('express')

//2.创建app服务对象
let app = express()
app.use(express.static('public'))

//根路由
app.get('/get_code',(request,response)=>{
  /*
  * 返回一个1000 - 9999
  * */
  console.log('客户端发来了获取验证码的请求')
  setTimeout(function () {
    let code = Math.floor(Math.random()*8999 + 1000)
    response.send(code.toString())
  },2000)
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) console.log('http://localhost:3000/')
  else console.log(err)
})