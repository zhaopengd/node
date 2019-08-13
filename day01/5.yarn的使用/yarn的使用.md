
## yarn的简介与使用

> Yarn发布于2016年10月，截至当前2019年1月，gitHub上的Start数量为：34.3k，已经超过npm很多了，
yarn使用本地缓存，无需互联网连接就能安装本地已经缓存的依赖项，安装方法：```npm install -g yarn```

#### 特别注意：
由于yarn的全局安装位置与npm不同，所以要配置yarn的全局安装路径到环境变量中，否则全局安装的包不起作用。
具体操作如下：
> 安装yarn后执行 ```yarn global dir```命令,获取yarn全局安装位置。
> 讲该位置配置到电脑环境变量中

### yarn命令与npm命令的对应关系如下：

#### 初始化项目: 
	yarn init -y
	npm init -y

#### 下载项目的所有声明的依赖: 
	yarn
	npm install

#### 下载指定的运行时依赖包: 
	yarn add webpack@3.2.1
	npm install webpack@3.2.1 -S

#### 下载指定的开发时依赖: 
	yarn add webpack@3.2.1 -D
	npm install webpack@3.2.1 -D

#### 全局下载指定包: 
	yarn global add webpack
	npm install webpack -g

#### 删除依赖包: 
	yarn remove webpack
	npm remove webpack -S
	yarn global remove webpack
	npm remove webpack -g

#### 运行项目中配置的script: 
	yarn run xxx
	npm run xxx
	
#### 查看某个包的信息: 
	yarn info xxx
	npm info xxx

#### 设置淘宝镜像: 
	yarn config set registry https://registry.npm.taobao.org
	npm config set registry https://registry.npm.taobao.org







