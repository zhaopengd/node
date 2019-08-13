/*
* 该模块用于连接数据库，暴露出去一个Promise实例
* 如果连接成功了，Promise实例内部状态切换为成功
* 如果连接失败了，Promise实例内部状态切换为失败
* */
//引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
//定义数据库名
const DB_NAME = 'test'
//定义数据库地址
const DB_URL = 'localhost:27017'
//构建一个Promise实例，用于管理数据库连接
module.exports = new Promise((resolve,reject)=>{
  //2.连接数据库
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`,{useNewUrlParser:true })

  //3.监听连接状态
  mongoose.connection.on('open',(err)=>{
    if(!err){
      console.log(`位于${DB_URL}上的${DB_NAME}数据库连接成功`)
      resolve()
    }else{
      reject(err)
    }
  })
})
