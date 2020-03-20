# interview
## 资源选择放在cdn
    如果资源请求不实用cdn，那么各地用户请求就只能到架设服务器的这个唯一地点访问资源，这收地域和带宽的影响非常大。而cdn技术是在各地都架设有服务器，用户只需要到最近的服务器下载资源即可，这能大大提高资源响应速度和减少单处服务器承载的访问压力
## 一个页面从访问到显示都经历了什么
    根据加载到的html构建dom树和cssom树，遇到js先加载js,
    执行js，如果js操作了dom或者cssom,根据改变的程度触发浏览器的重绘或者重排（回流）
    
    所以一般把js放在body底部，也可以在script标签中加asnyc和defer
    渲染树是由dom和cssom合并成负责渲染，不过3者是并行的
## 浏览器的回流和重绘是什么，如何优化
    1. 当render tree中的一部分(或全部)因为元素的
    规模尺寸，布局，隐藏等
    改变而需要重新构建。这就称为回流。每个页面至少需要一次回流，就是在页面第一次加载的时候。

    当render tree中的一些元素需要更新属性，而这些属性只是影响元素的
    外观，风格
    而不会影响布局的，比如background-color。则就叫称为重绘。

    减少回流和重绘
        编辑：使用display：none,操作完成再display: block
            让元素脱离文档流
        插入：用innerHTML一次性插入，或者用DocumentFragment
        
## js的数据类型
    String,Number,Boolean,Null,undefined,symbol
    function,object,array
## 盒模型
    IE盒模型，content包含了padding,border,
## 宏任务与微任务
    宏：
        script
        setInterval，setTimeout
        I/O
    微：
        promise.hten
## promise.race和promise.all
    race: 哪个结果返回的快用哪个
    all: 全部成功返回成功数组，有一个失败，返回失败结果
## fetch如何请求拦截和响应拦截
    在外面包裹一层promise.race
## react高阶组件
    接收一个组件，返回一个组件
    作用：属性拓展，反向继承
## promise, iterator, async/await
    它们都是作为js异步编程的解决方案，promise->iterator->async
    promise的优点是，可以用all并行处理多个异步
    用race可以作为拦截器
    缺点：不够优雅
    async/await = iterater函数 + 自执行器
## 手写一个animation
    div{
        animation: roll .3s linear infinite;
    }
    @keyframes roll{
        0%{

        }
        100%{

        }
    }
## css实现圆形，半圆，固定度数的扇形
    clip
## 原型链继承， super的作用
    继承父类的this
    用父类的construct生成子类实例
## 浏览器缓存策略
    强缓存 -> 协商缓存 -> 200
    Cache-Control
    Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间，即再次发起该请求时，如果客户端的时间小于Expires的值时，直接使用缓存结果。

    在HTTP/1.1中，Cache-Control是最重要的规则，主要用于控制网页缓存，主要取值为：
    public：所有内容都将被缓存（客户端和代理服务器都可缓存）
    private：所有内容只有客户端可以缓存，Cache-Control的默认取值
    no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
    no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
    max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效
## http1.0与1.1与2.0的区别
    长链接： 1.0需要keep-alive属性设置   1.1  默认长链接
    请求： 1.1 支持只发送请求头，服务端返回100确认有权限后再发送body,解约带宽
    多路复用： 2.0支持了同一个链接支持多个并发请求
    请求头数据压缩： 2.0开始支持
## redux组成

    通过一个store来储存数据
    用store里的reducer来初始化state和定义state的修改规则
    用dispatch来推一个action，根据action里的type来返回新的state

## mvc, mvp, mvvm的不同
    mvc 是 modal, view, controll的形式组织代码
    把业务逻辑集中在一处单独处理，使得3块在编码时不在耦合
    优点: 耦合性低    重用率高   生命周期成本低(维护方便)  部署快
    缺点： 调试不便   视图与控制器间的过于紧密的连接
    mvp: 把 view和modal测底分离解耦
    mvvm: 在此基础上更加便于测试，界面测试只需要对vm进行测试即可

## 哪些操作会触发react的render
    type key props
## combineReducers 里面做了些什么
    合并多个reducer todo
## 实现add(2,3,4) add(2)(3,4) add(2)(3)(4)  add(2,3)(4) 都等于9
## webpack优化
## react的setState何时异步，何时同步
    setState何时同步何时异步？
    由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。
    React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等
## react标签和原生标签的不同
    原生标签是一个无状态的普通对象
    react标签是一个有状态的对象或者函数
## react合成事件和原生事件的不同
    原生事件： 事件捕获，定位目标，冒泡 
    合成事件： 冒泡到document，由中间件监听，然后分派给指定函数执行
    合成事件比原生事件的触发节点更加靠后
## requie import的区别
    require是一个赋值过程
        可以在代码中的任意位置，运行时执行
    import是一个解构赋值过程
        只能书写在开头，编译时执行
## session和cookie的区别
    都是为了保存服务器和客户端的交互状态
    cookie是把用户信息保存在客户端
    session是把用户信息保存在服务端
## 跨域的解决方法
    1、jsonp 利用标签的src属性
    2、服务端代理 让同源服务端代为请求

## 闭包
    1、使内存中存在常驻局部变量
    2、使父级函数变为工厂函数
    3、避免了全局变量污染
## redux工作流程
    核心： store reducer action component 
    1、生成唯一数据源store
    2、生成初始state并用reducer定义修改规则
    3、使用action来触发修改,并响应到component中
## 创建dom的3个步骤
    document.createElement
    getElementById
    appendChild
## es6继承的几种方式
    直接继承：a.prototype = b.prototype
    继承实例 a.prototype = new B()
## css
    :hover  伪类
    ::before 伪元素

建议： 
 1、知识深度
 2、工程化流程，更加清晰（全面拥抱公司流程）

## 请问你有什么想问的
    技术：
        晋升机会
        对我的建议
    hr:
    五险一金的标准
    年终奖 几薪


## 工作境况

