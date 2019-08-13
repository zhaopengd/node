/*
* 关于cookie
*     1.是什么？
*         本质就是一个字符串，里面包含着浏览器和服务器沟通的信息（交互时产生的信息）。
*         存储的形式以：key-value的形式存储。
*         浏览器会自动携带该网站的cookie，只要是该网站下的cookie，全部携带。
*     2.分类：
*           --会话cookie（关闭浏览器后，会话cookie会自动消失，会话cookie存储在浏览器运行的那块内存上）。
*           --持久化cookie：（看过期时间，一旦到了过期时间，自动销毁，存储在用户的硬盘上,备注：如果没有到过期时间，同时用户清理了缓存，持久化cookie也会消失）。
*
*     3.工作原理：（例子中的小纸条）
*           --当浏览器第一次请求服务器的时候，服务器可能返回一个或多个cookie给浏览器
*           --浏览器判断以下cookie种类
*               --会话cookie：存储在浏览器运行的那块内存上
*               --持久化cookie：存储在用户的硬盘上
*           --以后请求该网站的时候，自动携带上该网站的所有cookie（无法进行干预）
*           --服务器拿到之前自己“种”下cookie，分析里面的内容，校验cookie的合法性，根据cookie里保存的内容，进行具体的业务逻辑。
*
*      4.应用：
*           解决http无状态的问题（例子：7天免登录，一般来说不会单独使用cookie，一般配合后台的session存储使用）
*
*      5.不同的语言、不同的后端架构cookie的具体语法是不一样的，但是cookie原理和工作过程是不变的。
*         备注：cookie不一定只由服务器生成，前端同样可以生成cookie，但是前端生成的cookie几乎没有意义。
* */

let express = require('express')
let cookieParser = require('cookie-parser')

let app = express()
app.disable('x-powered-by')
app.use(express.static('public'))
//使用cookie-parser，解析浏览器携带过来的cookie为为一个对象，随后挂载到request上
app.use(cookieParser())

//“种”cookie
app.get('/test1',(request,response)=>{
  /*
  * 当访问test1路由时会给客户端“种”一个cookie
  * 在express中给客户端“种”一个cookie，不用借助任何第三方库
  * */

  //给客户端“种”下一个会话cookie
  //response.cookie('demo',123)

  //给客户端“种”下一个持久化cookie
  response.cookie('demo',123,{maxAge:30 * 1000})
  response.send('<h2>我给你种下了一个cookie，你快看看</h2>')
})
//“读”cookie
app.get('/test2',(request,response)=>{
  /*
  * 当访问test2时，会获取到浏览器携带过来的cookie
  * 在express中更翻遍的获取客户端携带过来的cookie，要借助一个中间件，名字：cookie-parser
  * */
  console.log(request.cookies)
  const {demo} = request.cookies
  console.log(demo)
  response.send('<h2>我读到了你携带过来的cookies</h2>')
})
//“删”cookie
app.get('/test3',(request,response)=>{

  //第一种删除方式：
  //response.cookie('demo','',{maxAge:0})

  //第二种删除方式：
  response.clearCookie('demo')

  response.send('我删除了cookie')
})


//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了！')
  else console.log(err)
})