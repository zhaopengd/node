/*
* 流式文件写入：
*     fs.createWriteStream(path[, options])
*         --path：文件路径+文件名
*         --options：配置对象（可选）
*              --flags：打开文件要进行的操作,默认是w
*                         'w'：直接写入
*                         'a'：追加
*              --mode：文件权限的限制，默认值是0o666
*                         --0o111：文件可被执行
*                         --0o222：文件可被写入
*                         --0o444：文件可被读取
*               --encoding：默认值utf8
*               --fd：文件的唯一标识。（了解）
*               --autoClose：自动关闭，当数据操作完毕，自动关闭文件，默认是true
*               --start：文件写入的起始位置
* */

//1.引入fs模块
let fs = require('fs')

//2.创建一个可写流
let ws = fs.createWriteStream('./demo.txt',{
  start:20
})

//只要使用了流，必须给流加监听
ws.on('open',()=>{
   console.log('可写流打开了')
})
ws.on('close',()=>{
  console.log('可写流关闭了')
})

//3.开始写入数据
ws.write('马上晚上放学了\n')
ws.write('我饿了\n')
ws.write('饿了你就忍着吧\n')
ws.close() //如果用的是Node的8版本一下（包含8版本），用此种方式关闭流，容易造成数据丢失。
//ws.end()


