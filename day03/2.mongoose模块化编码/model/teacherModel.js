/*
* 该模块主要负责创建教师模型
* */
let mongoose = require('mongoose')
//操作数据库
//1.请来一个保安 ------- 引入约束Schema
let Schema = mongoose.Schema

//2.制定一个进入你家的规则 -------- 创建一个约束对象实例
let teacherSchema = new Schema({
  teac_id:{
    type:String,
    required:true,
    unique:true
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
module.exports = mongoose.model('teachers',teacherSchema)

