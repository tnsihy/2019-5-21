`js怎么控制一次加载一张图片，加载完毕后再加载下一张。`
> 第一种方式 使用load事件监听
```
var obj = new Image();
obj.src = "***.jpg";

obj.onload = function(){
    document.getElementById('***').innerHTML = '<img src= '"+ this.src +"'/>';
}
```
> 第二种方式 使用onreadystatechange中readyState状态判断
```
var obj = new Image();
obj.src = "***.jpg";

obj.onreadystatechange = function(){
    if(obj.readyState == 'complete'){
        document.getElementById('***').innerHTML = '<img src= '"+ this.src +"'/>';
    }
}
```