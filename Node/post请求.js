/**
 * 获取POST请请求内容
 */
var http = require('http');
var querystring = require('querystring');
// var util = require('util');

var postHTML = 
`
<html>
    <head>
        <meta charset='utf-8'>
        <title>菜鸟教程Nodejs实例</title>
    </head>
    <body>
        <form method='post'>
            网站名：<input name='name'><br/>
            网址URL：<input name='url'><br/>
            <input type='submit'>
        </form>
    </body>
</html>
`

http.createServer(function(request,response){
    // 定义了一个body变量，用于暂存请求体的信息
    var body = '';
    // 通过request的data事件监听函数，每当接收到请求体的数据，就累加到bodyt变量
    request.on('data',function(chunk){
        body += chunk;
    })
    // 在end事件触发后，通过querystring.parse将body解析为真正的POST请求格式，然后向客户端返回
    request.on('end',function(){
        //解析参数 
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        response.writeHead('200',{'Content-type':'text/html;charset=utf-8'});
        if(body.name && body.url){  //输出提交的数据
            response.write('网站名：' + body.name);
            response.write('<br/>');
            response.write('网址URL：' + body.url);
        }else{
            // 输出表单
            response.write(postHTML);
        }
        // response.write(util.inspect(body));
        response.end();
    })
}).listen(8888);