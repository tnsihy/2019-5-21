typeof  
typeof一般只能返回`undefined string boolean number object function`  
可以使用typeof获取一个变量是否存在  
`if(typeof a != "undefined")`，而不要使用if(a)，如果a不存在则会出错。  
对于`Array Null`返回object  

instanceof
可以判断类型
```
var a = new Array();
alert(a instanceof Array); // true
同时alert(a instanceof Object); // true
```

