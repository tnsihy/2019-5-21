`通过递归可以简单实现对象的深度克隆，只能实现特定的object的深度复制（比如数组和函数）`，不能实现包装对象Number String Boolean 以及Date对象 RegExp对象的复制。

```
这种方法可以实现一般对象和数组对象的克隆。
function deepClone(obj){
    var newObj = obj instanceof Array ? []:{};
    for(var i in obj){
        newObj[i] = typeof obj[i] == 'object'? deepClone(obj[i]) : obj[i];
    }
    return newObj;
}
```
---

> valueOf()函数  

所有对象都有valueOf函数  
对于原始值或者包装类：
```
function baseClone(base){
    return base.valueOf();
}
```

//Number
```
var num = new Number(1);
var newNum = baseClone(num);
newNum // 1
```

//String
```
var str = new String('Hello');
var newStr = baseClone(str);
newStr // 'Hello'
```

//Boolean
```
var bol = new Boolean(true);
var newBol = baseClone(bol);
newBol // true
```

// `对于Date类型：`
因为valueOf方法，日期类定义的valueOf()方法会返回它的一个内部表示，1970-01-01以来的毫秒数，因此可以在Date的原型上定义克隆的方法。
```
Date.prototype.clone = function(){
    return new Date(this.valueOf());
}

var date = new Date('2010');
var newDate = date.clone();
//newDate Fri Jan 01 2010 08:00:00 GMT+0800
```

`对于正则对象RegExp：`
```
RegExp.prototype.clone = function(){
    var pattern = this.valueOf();
    var flags = "";
    flags += pattern.global ? 'g':'';
    flags += pattern.ignoreCase ? 'i':'';
    flags += pattern.multiline ? 'm':'';
    return new RegExp(pattern.source,flags);
}

var reg = new RegExp('111');
var newReg = reg.clone();
newReg //  /111/
```