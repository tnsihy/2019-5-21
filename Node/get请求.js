/**
 * 获取GET请求内容
 * 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分
 * 可以手动解析后面的内容作为GET请求参数  url模块提供了parse函数
 */
var http = require('http');
var url = require('url');
var util =require('util');

http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/plain;charset=utf-8',
        // 'Access-Control-Allow-Origin':'*'
    }); 
    console.log('我收到了');
    // 解析url参数
    var params = url.parse(request.url,true).query;
    response.write('网站名：'+ params.name);
    response.write('\n');
    response.write('网站URL：' + params.url);

    // util.inspect(object,[showHidden],[depth],[colors]) 将任意对象转换为字符串的方法
    // response.write(util.inspect(url.parse(request.url,true)))
    // response.write(JSON.stringify({code:200,data:{name:'jgchen', avatar:'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=995075572,2066973867&fm=85'}}))
    response.end();
}).listen(3000);