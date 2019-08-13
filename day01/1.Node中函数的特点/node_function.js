/*
* 1.Node中任何一个模块（js文件）都被一个外层函数所包裹
*     function (exports, require, module, __filename, __dirname) {}
*         exports：用于暴露模块
*         require：用于引入模块
*         module：用于暴露模块
*         __filename：当前文件所在的路径（绝对）
*         __dirname：当前文件所在文件夹的路径（绝对）
*
*  2.为什么要有这个外层函数（这个外层函数有什么作用？）
*     1.隐藏内部实现。
*     2.支持CommonJs的模块化
* */


console.log(__filename)
console.log(__dirname)
