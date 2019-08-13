//引入数据库连接模块
let db = require('./db')
//引入学生模型
let studentModel = require('./model/studentModel')
//引入教师模型
let teacherModel = require('./model/teacherModel')

;(async()=>{
  //等待数据库连接成功
  await db

  //操作数据库
  let result = await studentModel.findOne({name:'班长'})
  console.log(result);

  let result2 = await teacherModel.create({
    teac_id:'20190722005',
    name:'qiu海峰',
    age:90,
    sex:'男',
    hobby:['打代码','吃饭','睡觉'],
    info:'一个非常帅气的男人',
  })
  console.log(result2);

})()