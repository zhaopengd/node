let express = require('express')

let app = express()
//设置模板引擎
app.set("view engine" , "ejs");
//设置模板所在目录
app.set("views","./views")

app.get('/',(request,response)=>{
  let data = [{name:'kobe',age:18},{name:'wade',age:19},{name:'peiqi',age:20},{name:'qiaozhi',age:21},{name:'qiaozhi',age:21},{name:'qiaozhi',age:21},{name:'qiaozhi',age:21}]

  response.render('demo',{data})
})


app.listen(3000,(err)=>{
  if (!err) console.log('服务器启动成功了！')
  else console.log(err)
})