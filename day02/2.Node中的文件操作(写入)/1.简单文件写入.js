/*
* 1.Node中的文件系统：
*     1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作。
*     2.在NodeJs中，给我们提供了一个模块，叫做fs模块，专门用户操作文件。
*     3.fs模块是Node的核心模块，使用的时候，要引入进来，不用下载安装。
*
* 2.简单文件写入（异步）：
*     fs.writeFile(file, data[, options], callback)
*             --file：文件路径+文件名
*             --data：要写入的数据
*             --options:配置选项（可选参数）
*                   --flag：打开文件要进行的操作,默认是w
*                         'w'：直接写入
*                         'a'：追加
*                   --mode：文件权限的限制，默认值是0o666
*                         --0o111：文件可被执行
*                         --0o222：文件可被写入
*                         --0o444：文件可被读取
*                   --encoding：默认值utf8
*             --callback：回调函数
*                   --err
*
* 备注：在Node中有一个设计原则：错误优先。
*
* 不足之处：简单文件写入是一次性把所有要写入的数据加载到内存中，对于比较大的文件容易产生内存溢出，适用于较小的文件写入。
*
*/

//1.引入fs模块
let fs = require('fs')

//2.进行简单文件写入
fs.writeFile('./720.txt','哈哈',{
  flag:'w',
  mode:0o666,
  encoding:'utf8'
},(err)=>{
    if(!err){
      console.log('文件写入成功了！')
    }else{
      console.log(err)
  }
})
