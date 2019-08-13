//1.引入express
let express = require('express')
//引入数据库连接模块
let db = require('./db')
//引入城市模型
let cityModel  = require('./model/cityModel')

//2.创建app服务对象
let app = express()

//等待数据库连接成功
db.then(()=>{

  //获取中国所有省份信息
  app.get('/getAllProvinces',(request,response)=>{
    response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    cityModel.find({level:1},{name:1,province:1,_id:0},(err,data)=>{
      if(!err){
        const result = {state:1,data}
        response.json(result)
      }else{
        console.log(err)
        const resultErr = {state:0,err:'请求出错'}
        response.json(resultErr)
      }
    })

  })

  //根据省份编码获取该省下所有市信息
  app.get('/getCityByProCode',(request,response)=> {
    response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    const {province} = request.query
    cityModel.find({level: 2, province}, {name: 1, city: 1, _id: 0}, (err, data) => {
      if (!err) {
        const result = {state: 1, data}
        response.json(result)
      } else {
        console.log(err)
        const resultErr = {state: 0, err: '请求出错'}
        response.json(resultErr)
      }
    })
  })

  //根据省份编码和市编码，获取区县信息
  app.get('/getCountyByProCodeAndCitCode',(request,response)=> {
    response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    const {province, city} = request.query
    cityModel.find({level: 3, province, city},{name:1,code:1,_id:0}, (err, data) => {
      if (!err) {
        const result = {state: 1, data}
        response.json(result)
      } else {
        console.log(err)
        const resultErr = {state: 0, err: '请求出错'}
        response.json(resultErr)
      }
    })
  })

}).catch((err)=>{
    console.log(err)
})


//4.绑定端口监听
app.listen(3000,(err)=>{
  if (!err) {
    console.log('三级联动服务器启动成功了')
  }
  else console.log(err)
})