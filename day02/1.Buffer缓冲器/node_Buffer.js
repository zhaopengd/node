/*
* 1.Buffer是什么？
*    1.它是一个类似于数组的对象，用于存储数据（存储的是二进制数据）。
*    2.Buffer的效率很高，存储和读取很快，直接对计算机的内存进行操作。
*    3.Buffer的大小一旦确定了，不可修改。
*    4.每个元素占用内存的大小为1字节。
*    5.Buffer是Node中的非常核心的模块，无需下载、无需引入即可使用
*
* 2.进制：
*   十六进制：00  -----  ff
*   十进制：  00  -----  255
*   二进制：  00000000 ------- 11111111
*
* 3.换算
*   8 bit(位) = 1 byte(字节)
*   1024byte = 1KB
*   1024Kb = 1MB
*   1024Mb = 1Gb
*   1024GB = 1TB
*   1024TB = 1PB
* */


//1.将一个字符串存入Buffer中
let str = 'HELLO ATGUIGU'
let buf = Buffer.from(str)
console.log(buf)

//2.alloc这种方式去创建Buffer实例---效率一般
let buf2 = Buffer.alloc(10)
console.log(buf2)

//3.allocUnsafe这种方式去创建Buffer实例---效率很好，但是存在一些安全问题
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

//4.使用new关键字创建一个Buffer实例（即将被弃用）-----效率很低
let buf4 = new Buffer(10)
console.log(buf4)



