var express = require('express');
var app = express();

app.get('/GETindex.html', function (request, response) {
    response.sendFile(__dirname + '/' + 'GETindex.html');
})

app.get('/process_get', function (request, response) {
    // 输出JSON格式
    var res = {
        'firstname': request.query.firstname,
        'lastname': request.query.lastname
    }
    console.log(res);
    response.end(JSON.stringify(res));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})