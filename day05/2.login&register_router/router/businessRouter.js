/*
* 该模块是业务路由器，目前管理的业务有：登录、注册
* */

let {Router} = require('express')

//引入用户模型
let userModel = require('../model/userModel')

let router = new Router()

//业务路由----注册
router.post('/register',async(request,response)=>{
  //1.获取用户的输入
  const {email,nick_name,password,re_password} = request.body
  //2.校验数据的合法性
  //定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const nickNameReg = /[\u4e00-\u9fa5]/gm
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/
  //使用正则进行校验
  if(!emailReg.test(email)){
    response.send('邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位')
    return
  }else if(!nickNameReg.test(nick_name)){
    response.send('昵称输入不合法，昵称应为中文')
    return
  }else if(!passwordReg.test(password)){
    response.send('密码输入不合法，密码应为6-16位字符不包含特殊字符')
    return
  }else if(password !== re_password){
    response.send('两次输入密码不一致')
    return
  }

  //try里面放可能出现错误的代码，一旦出现错误，会携带着错误信息来到catch中。
  try{
    //3.检查该邮箱是否注册过
    let finResult = await userModel.findOne({email})
    if(finResult){
      response.send(`注册失败，${email}邮箱已经被注册了`)
      return
    }else{
      await userModel.create({email,nick_name,password})
      console.log(`邮箱为：${email}，昵称为:${nick_name}的用户注册成功了！`)
      response.send('注册成功了！')
    }
  }
  catch(err){
    //1.计数 2.引入警报模块
    console.log(err)
    response.send('阿偶，网络不稳定，稍后重试！')
  }
})
//业务路由 ---登录
router.post('/login',async(request,response)=>{
  //1.获取用户的输入
  const {email,password} = request.body
  //定义正则表达式
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/
  //使用正则进行校验
  if(!emailReg.test(email)){
    response.send('邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位')
    return
  }else if(!passwordReg.test(password)){
    response.send('密码输入不合法，密码应为6-16位字符不包含特殊字符')
    return
  }

  try{
    let finResult = await userModel.findOne({email,password})
    if(finResult){
      response.redirect('https://www.baidu.com')
    }else{
      response.send('登录失败，邮箱或密码输入错误！')
    }
  }
  catch(err){
    console.log(err)
    response.send('阿偶，网络不稳定，稍后重试！')
  }


})

module.exports = router