var express = require('express');
var app = express();

// express.static中间件来设置静态文件路径
app.use('/public',express.static('public'));

app.get('/',function(request,response){
    response.send('Hello World!');
})

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为：http://%s:%s',host,port);
})

// 访问http://127.0.0.1:8081/public/images/01.jpg