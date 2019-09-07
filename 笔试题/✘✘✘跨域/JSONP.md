通过动态创建script，再请求一个带参网址实现跨域通信。  

> 原生实现
```
<script>
    var script = document.createElement("script");
    script.type = "text/javascript";

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = "http://localhost:8888/login?user=admin&callback=handleCallback";
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(res){
        alert(JSON.stringify(res));
    }
</script>
```

> 服务端返回如下（返回时即执行回调函数）
```
handleCallback({
    "status":true,
    "user":"admin"
})
```

> jquery ajax:
```
$.ajax({
    url:"http://localhost:8888/login",
    type:"GET",
    dataType:"jsonp",
    jsonpCallback:"handlecallback",
    data:{}
});
```

> vue.js
```
this.$http.jsonp("http://localhost:8888/login",{
    params:{},
    jsonp:"handleCallback"
}).then((res)=>{
    console.log(res);
})
```

> 后端node.js代码示例：
```
var querystring = require("qureystring");
var http = require("http");
var server = http.createServer();

server.on("request",function(req,res){
    
    // parse这个方法是将一个字符串反序列化为一个对象。
    var params = querystring.parse(req.url.split("?")[1]);
    var fn = params.callback;

    //jsonp返回设置
    res.writeHead(200,{"Content-Type":"text/javascript"});
    res.write(fn + "(" + JSON.stringify(params) + ")");

    res.end();
});

server.listen("8888");
console.log("Server is running at port 8888");
```
JSONP缺点：只能实现get一种请求。