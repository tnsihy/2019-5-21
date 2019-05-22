为了防止文档在完全加载之前运行jQuery，有两种方法:
``` 
//第一种方法
$document.ready(function(){
    //开始写jQuery代码...
})  

//第二种方法
$(function(){
    //开始写jQuery代码...
})
```