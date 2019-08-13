//引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
//定义数据库名
const DB_NAME = 'demo'
//定义数据库地址
const DB_URL = 'localhost:27017'
//构建一个Promise实例，用于管理数据库连接
let dbPromise = new Promise((resolve,reject)=>{
    //2.连接数据库
    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`,{useNewUrlParser:true })

    //3.监听连接状态
    mongoose.connection.on('open',(err)=>{
      if(!err){
        console.log('数据库连接成功了！')
        resolve()
      }else{
        reject(err)
      }
    })
  })


//具体业务逻辑
;(async()=>{
  //等待数据库连接成功
  await dbPromise

  //操作数据库
  //1.请来一个保安 ------- 引入约束Schema
  let Schema = mongoose.Schema

  //2.制定一个进入你家的规则 -------- 创建一个约束对象实例
  let studentSchema = new Schema({
    stu_id:{
      type:String,
      required:true,//限制学号是必填信息
      unique:true//限制学号是唯一的
    },
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      required:true,
    },
    sex:{
      type:String,
      required:true,
    },
    hobby:[String],
    info:{
      type:Schema.Types.Mixed //接收所有类型
    },
    date:{
      type:Date,
      default:Date.now()
    },
    enable_flag:{
      type:String,
      default:'Y'
    }
  })

  /*3.告诉保安你的规则 ------- 创建模型对象
  第一个参数与数据库中的集合相对应，第二个参数指定约束对象实例
  只要生成了模型对象，就可以进行数据的：增删改查*/
  let studentModel = mongoose.model('students',studentSchema)

  //4.操作数据库(增删改查)

  //新增数据
  /*let createResult = await studentModel.create({
    stu_id:'20190722004',
    name:'qiu海峰',
    age:90,
    sex:'男',
    hobby:['打代码','吃饭','睡觉'],
    info:'一个非常帅气的男人',
  })
  console.log(createResult);*/

  //查询数据库
  /*studentModel.findOne({age:90},{name:1,_id:0},(err,data)=>{
      if(!err){
        console.log(data)
      }else{
        console.log(err)
      }
  })*/

  //更新数据
  /*let updateResult = await studentModel.updateMany({age:90},{sex:'男'},{multi:true})
  console.log(updateResult);*/

  //删除数据
  /*await studentModel.deleteMany({age:90})*/


})()




