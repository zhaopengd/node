/*
* 该模块是UI路由器模块，用于管理UI路由，以后配置新页面，在这里定义路由即可
* */
let {Router} = require('express')

let router = new Router()
//引入path模块，path模块是node中的核心模块，无需下载，直接引入即可使用
let {resolve} = require('path')


//UI路由--登录
router.get('/login',(request,response)=>{
  //let filePath = resolve(__dirname,'../public/login.html')
  //response.sendFile(filePath)
  const {email} = request.query
  response.render('login',{errMsg:{email}})
})
//UI路由--注册
router.get('/register',(request,response)=>{
  //let filePath = resolve(__dirname,'../public/register.html')
  //response.sendFile(filePath)
  response.render('register',{errMsg:{}})
})
//UI路由--个人中心
router.get('/usercenter',(request,response)=>{
  const {nick_name} = request.query
  //let filePath = resolve(__dirname,'../public/register.html')
  //response.sendFile(filePath)
  response.render('usercenter',{nickName:nick_name})
})

module.exports = router