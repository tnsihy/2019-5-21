var http = require('http');
var url = require('url');

// 将路由函数作为参数传递
function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'received.');
        route(pathname);
        response.writeHead(200,{
            'Content-type':'text/plain'
        });
        response.write('Hello World!');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;

// + router.js
// + index.js