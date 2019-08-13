//1.引入http模块 ----- http是Node中的核心模块，无需下载，引入即可使用。
let http = require('http')
let {parse} = require('querystring')

//2.创建server对象
let server = http.createServer(function (request,response) {
  /*
  * request:请求对象 -------- 客户端发给服务器
  * response：响应对象 ------- 服务器给客户端
  * */
  //console.log(request.url);
  let str = request.url.split('?')[1]
  let obj = parse(str)
  console.log(obj)
  response.setHeader('content-type','text/html;charset=utf-8')
  if(obj.name === 'zhangsan'){
    response.end('<h2>zhangsan,你好好听课</h2>')
  }else if(obj.name === 'lisi'){
    response.end('<h2>lisi,你回家吧</h2>')
  }else{
    response.end('<h2>阿偶，走了丢了</h2>')
  }
})

//3.绑定端口监听
server.listen(3000,function (err) {
  if(!err){
    console.log('服务器启动成功了')
  }else{
    console.log(err)
  }
})
