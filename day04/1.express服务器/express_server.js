//1.引入express
let express = require('express')

//2.创建app服务对象
let app = express()
//隐藏服务器的具体实现
app.disable('x-powered-by')

//3.设置路由(这里配置的是后端路由)   路由可以理解为：key-value的组合，响应路由是一个匹配的过程。

//根路由
app.get('/',(request,response)=>{
  response.send('<h2>我是主界面</h2>')
})

//一级路由
app.get('/meishi',(request,response)=>{
  /*
  什么样的请求能交给这个回调函数处理？
      1.发送的请求必须为GET请求
      2.访问的URL中关键词是meishi
  备注：使用request.query只能获取查询字符串参数
  */
  console.log(request.query);
  response.send('<h2>我是美食界面</h2>')
})

//二级路由
app.get('/meishi/huoguo',(request,response)=>{
  /*
  什么样的请求能交给这个回调函数处理？
      1.发送的请求必须为GET请求
      2.访问的URL中关键词是meishi
  */
  response.send('<h2>我是美食---火锅界面</h2>')
})

app.post('/demo',(request,response)=>{
  /*
  * 备注：使用request.body能够获取POST请求过来的请求体中的参数，但是需要借助一个中间件。
  * */
  console.log(request.body);
  response.send('你发来的post请求，我收到了，这是我给你的响应')
})

app.get('/demo',(request,response)=>{
  response.send('你发来的get请求，我收到了，这是我给你的响应')
})


//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了！')
  else console.log(err)
})