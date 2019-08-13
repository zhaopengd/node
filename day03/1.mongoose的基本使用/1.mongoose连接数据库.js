/*
* mongoDB:一个非关系型数据库的名称
* mongod：启动mongo服务的命令
* mongo：连接数据库的命令
* mongoose：在Node端连接数据库的一个框架
* */

//1.引入mongoose
let mongoose = require('mongoose')

let dbPromise = new Promise((resolve,reject)=>{
  //2.连接数据库
  mongoose.connect('mongodb://localhost:27017/demo',{useNewUrlParser:true })

  //3.监听连接状态
  mongoose.connection.on('open',(err)=>{
    if(!err){
      console.log('数据库连接成功了！')
      resolve()
    }else{
      reject(err)
    }
  })
})

//第一种写法
/*dbPromise.then(()=>{
  //4.操作数据库的代码
  console.log(1)
},(err)=>{
  console.log(err)
})*/

//第二种写法
/*dbPromise
  .then(()=>{
    //4.操作数据库的代码
    console.log(1)
  }).catch((err)=>{
    console.log(err)
  })*/


//第三种写法
;(async()=>{
  //等待数据库连接成功
  await dbPromise

  //4.操作数据库的代码
  console.log(1)
})()




