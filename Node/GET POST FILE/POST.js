var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended:false});
// app.use('/public', express.static('public'));

app.get('/POSTindex.html',function(request,response){
    response.sendFile(__dirname + '/' + 'POSTindex.html');
})

app.post('/process_post',urlencodedParser,function(request,response){
    var res = {
        'firstname':request.body.firstname,
        'lastname':request.body.lastname
    }
    console.log(res);
    response.end(JSON.stringify(res));
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})