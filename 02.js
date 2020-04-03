//引入http模块  require 加载
var http=require("http")
//创建服务器     createServer 创建服务器    req  requsest 请求      res  response 响应
var server=http.createServer(function(req,res){
    //设置响应头   状态码   文本类型     text/plain  image/gif   编码    utf-8
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //获取请求的路径
    console.log(req.url)
    //req.url 获取地址栏路径
    switch(req.url){
        case "/red":
            //写入
            res.write("red")
            break;
        default :
            res.write("我是默认的")
    }
    // if(req.url=="/red"){
    //     res.write("red")
    // }else{
    //     res.write("我是默认的")
    // }
    //结束响应
    res.end()
})
//监听端口
server.listen(3000)