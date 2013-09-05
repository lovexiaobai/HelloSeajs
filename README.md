seajs demo test

Windows下使用grunt构建

1.安装nodejs  

2.安装grunt-cli (参考:http://gruntjs.com/)
### npm install -g grunt-cli
3.通过命令提示行进入目录(我这里是进入的scripts目录):

这个目录要准备：package.json 和 Gruntfile.js 这两个文件.

(关于如何配置:参考来源:https://github.com/seajs/seajs/issues/672 和
http://hi.baidu.com/liuda101/item/54bcf8d0b6a65602d68ed057 和 
http://gruntjs.com/configuring-tasks#files )

4.安装grunt,目前最新的是直接在此目录使用如下命令：
### npm install  
会自动检索package.json包里面的版本.并自动安装

5.Gruntfile.js如果前面已经配置好.构建命令：
### grunt build

6.构建完成 index.html 使用如下:

未构建前使用

seajs.use("application/testApp/application");

构建后使用

seajs.use("dist/testApp/application");

增加如何在seajs里面使用jquery插件

添加jquery库,源码,包装jquery库.需要修改base的源码就可以了.运行grunt build就可以了.

添加cmd模块规范练习代码.