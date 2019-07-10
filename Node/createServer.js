var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer(function (req, resp) {
    // 请求解析 包括文件名
    var pathname = url.parse(req.url).pathname;
    // 输出请求的文件名
    console.log('Request for' + pathname + ' received.')

    // 从文件系统中读取请求的文件的内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP状态码 404：NOT FOUND
            // Content Type: text/html
            resp.writeHead(404, {'Content-type': 'text/html'});
        }else{
            // HTTP状态码 200：ok
            // Content Type: text/html
            resp.writeHead(200,{'Content-type':'text/html'});
            // 响应文件内容
            resp.write(data.toString());
        }
        // 发送响应数据
        resp.end();
    })
}).listen(8080);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');