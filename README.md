# vue_router

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# vue_router

1. vue的一个插件库
2. 专门用来实现一个SPA应用
3. 基于vue的项目基本都会用到此库
4. 中文文档:http://router.vuejs.org/zh-cn/
5. 下载: npm install vue-router -S

# SPA 的理解

1. 单页 web 应用(single pag鹅web application, SPA)
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面,只会做页面的局部更新
4. 数据都需要通过ajax请求获取, 并在前端异步展现
   
# 路由的理解
## 1. 什么是路由
- 1. 一个路由就是一个映射关系(key:value)
- 2. key为路径 value 可能是function 或 component
## 2. 路由分类
- 1. 后端路由
    - 1) 理解: value 是 function 用来处理客户端提交的请求
    - 2) 注册路由: router.get(path,function(req,res))
    - 3) 工作过程: 当服务器接收到一个请求时,根据请求路径找到匹配的路由 
    - 调用哪个路由中的函数来处理请求,返回响应数据
- 2. 前端路由
    - 1) 浏览器端路由,value 是component 用于展示页面的内容
    - 2) 注册路由:<Router path="/test" component={Test}>
    - 3) 工作过程: 当流浪器的path变为/test时,当前组件就会变为Test组件
## 基本路由
 