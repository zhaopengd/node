/*
* 流式文件读取：
*     fs.createReadStream(path[, options])
*         --path：文件路径+文件名
*         --options：配置对象(可选)
*             --flags：打开文件要进行的操作,默认是w
*                         'w'：直接写入
*                         'a'：追加
*             --mode：文件权限的限制，默认值是0o666
*                         --0o111：文件可被执行
*                         --0o222：文件可被写入
*                         --0o444：文件可被读取
*             --encoding：默认值utf8
*             --start:读取的起始点
*             --end：读取的结束点
*             --highWaterMark：每次读取数据的大小 默认值是：64 * 1024
* */

//1.引入fs模块
let fs = require('fs')

//2.创建一个可读流，对于可读流来说，当没有数据可继续读取的时候，会自动关闭可读流。
let rs = fs.createReadStream('./music.mp3',{
  //start:2000,
  //end:90000,
  highWaterMark:1024 * 1024
})
let ws = fs.createWriteStream('../demo.mp3')

//使用了流，必须给流加监听（为了确保每个流都能够在使用完毕后关闭）
rs.on('open',()=>{
  console.log('可读流打开了')
})
rs.on('close',()=>{
  console.log('可读流关闭了')
  ws.close()
})
ws.on('open',()=>{
  console.log('可写流打开了')
})
ws.on('close',()=>{
  console.log('可写流关闭了')
})

//3.给可读流绑定一个data事件，会自动触发流读取文件
rs.on('data',(data)=>{
    //输出Buffer实例的length的时候，输出的不是长度，输出的是占用内存的大小
    //console.log(data.length)
    ws.write(data)
})

