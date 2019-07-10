// 一个函数可以作为另一个函数的参数
function say(value){
    console.log(value);
}
function execute(someFun,value){
    someFun(value);
}
execute(say,'Hello');
// 也可以是
function execute(someFun,value){
    someFun(value)
};
execute(function say(value){console.log(value)},)

// 函数传递是如何让HTTP服务器工作的
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/plain'
    });
    response.write('Hello world');
    response.end();
}).listen(8888);

// 或者是
var http = require('http');
function onRequest(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write();
    response.end();
}
http.createServer(onRequest).listen(8888);




