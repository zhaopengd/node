/*
* 简单文件读取：
*     fs.readFile(path[, options], callback)
*         --path：文件路径+文件名
*         --options：配置对象
*             --encoding:文件编码
*             --flag:打开文件要进行的操作
*         --callback：回调函数
*             --err:错误对象
*             --data:数据
* */

//1.引入fs模块
let fs = require('fs')

//2.简单文件读取
fs.readFile('./music.mp3',(err,data)=>{
    if(!err){
      //思考？为什么读取出来的是Buffer类型（看不懂）,因为读取出来的数据不一定是文本，可能是媒体文件。
      //console.log(data.toString())
      fs.writeFile('../demo.mp3',data,(err)=>{
          if(!err){
            console.log('ok')
          }else{
            console.log(err)
          }
      })
    }else{
      console.log(err)
    }
})