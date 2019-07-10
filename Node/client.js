// 通过网址请求文件内容
var http = require('http');

// 用于请求的选项
var options = {
    host:'localhost',
    port:'8080',
    path:'/demo.html'
}

// 处理响应的回调函数
var callback = function(resp){
    // 不断更新数据
    var body = '';
    resp.on('data',function(chunk){
        body += chunk;
    })
    resp.on('end',function(){
        // 数据接收完成
        console.log(body);
    })
}
// 向服务端发送请求
var req = http.request(options,callback);
req.end();