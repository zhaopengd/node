//引入express框架
let express = require('express')
//创建app应用对象
let app = express()
//暴露静态资源
app.use(express.static('public'))
//引入服务器内部具体实现
app.disable('x-powered-by')
//用于解析post请求的请求体参数
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(request,response)=>{
  console.log(request.query)
  let {callback} = request.query
  let arr = [{name:'kobe',age:18},{name:'wade',age:20}]
  response.send(`${callback}(${JSON.stringify(arr)})`)
})

app.listen(3000,(err)=>{
  if(!err) console.log('该服务器用于测试jsonp解决跨域问题，必须通过webstorm打开网页')
  else console.log(err)
})