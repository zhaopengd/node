//1.引入express
let express = require('express')

//2.创建app服务对象
let app = express()

//3.设置路由
//根路由
app.get('/',(request,response)=>{
  /*
  * request：
  *   request.query	获取查询字符串的参数，拿到的是一个对象
  *   request.params	获取参数路由的参数，拿到的是一个对象
  *   request.body	获取post请求体，拿到的是一个对象（要借助一个中间件）
  *   request.get(xxxx)	获取请求头中指定key对应的value
  *
  * response:
  *     response.send()	给浏览器做出一个响应
        response.end()	给浏览器做出一个响应（不会自动追加响应头，容易乱码）
        response.download()	告诉浏览器下载一个文件（相对路径）
        response.sendFile()	给浏览器发送一个文件（绝对路径）
        response.redirect()	重定向到一个新的地址（url）
        response.set(header,value)	自定义响应头内容
        response.get()	获取响应头指定key对应的value
        res.status(code)	设置响应状态码

  * */
  //console.log(request.query);
  //console.log(request.get('host'))
  response.set('demo',123)
  console.log(response.get('demo'));
  response.send('ok')
  //response.download('./public/队列.jpg')
  //response.sendFile(__dirname+'/public/demo.html')
  //response.sendFile(__dirname+'/public/demo.zip')
  //response.redirect('https://www.baidu.com')
})

//一级路由
app.get('/meishi',(request,response)=>{
  console.log(request.params);
  response.send('我是美食路由的反馈')
})

//二级路由
app.get('/meishi/huoguo',(request,response)=>{
  console.log(request.params);
  response.send('我是美食--火锅路由的反馈')
})


//参数路由
app.get('/meishi/:id',(request,response)=>{
  console.log(request.params);
  response.send('我是参数路由的反馈')
})

//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了')
  else console.log(err)
})