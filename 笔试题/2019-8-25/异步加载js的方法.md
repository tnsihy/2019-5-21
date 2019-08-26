`https://blog.csdn.net/weixin_43623871/article/details/88917084`

异步加载的三种方案
`1.defer异步加载`
- IE适用
- 要等到DOM文档全部解析完后才会被执行
- 支持外部脚本或者内部脚本
```
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="tools.js" defer="defer"></script>
</head>
```

`2.async异步加载`
- async只能加载外部脚本
- `<script>标签的async="async"属性`

`3.创建script，插入到DOM中，加载完毕后callBack`
```
<script>
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "demo.js";

    document.head.appendChild(script);
    
    // 监听外部脚本文件下载完成 假设demo.js中有一个test()函数
    // load事件监听
    // IE通过状态码的改变
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState == "complete" || script.readyState == "loaded"){
                test();
            }
        }
    }else{
        script.onload = function(){
            test();
        }
    }
</script>
```