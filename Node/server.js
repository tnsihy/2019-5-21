var http = require('http');
const data = require('./data.json')
console.log(data)
// 2.创建服务器
// 使用http.createServer()方法创建服务器 使用listen方法绑定8888端口
// 函数通过request response参数来接收和响应数据
http.createServer(function (request, response) {
    // 发送HTTP头部 HTTP状态值200 内容类型
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    // 发送响应数据"Hello World!"
    response.write(JSON.stringify(data));
    response.end();
}).listen(8888);
// 终端打印如下
console.log('Server running at http://127.0.0.1:8888');

/*
请求（require）Node自带http模块，并赋值给变量http
利用http模块提供的函数createServer，函数会返回一个对象，该对象由listen方法，绑定http服务器监听的端口号
*/