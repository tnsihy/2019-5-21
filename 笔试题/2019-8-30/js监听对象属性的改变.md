> JavaScript监听对象属性的改变  当值变化时触发方法

#### 常见的监听方法
> 1.基于ES5的getter与setter方法  
`Object.defineProperty(obj,prop,descriptor)`
参数
- obj 要在其上定义属性的对象
- prop 要定义或修改的属性的名称
- descriptor 将被定义或修改的属性描述符
```
var obj = {
};

Object.defineProperty(obj,"data",{
    get:function(){
        return data;
    }
    set:function(newValue){
        data = newValue;
        console.log(newValue);  
    }
})

obj.data = 2;
```
如果要定义多个变量，则使用`Object.defineProperties(obj,props)`
---

> 2.脏值检测
目前Angular使用脏值检测。

> 3.ES6的Proxy  
> 监听对象属性的变化。比如当obj的visit属性改变时，自动更新页面上的input元素值。
```
<form>
  <input type="text" name="visit">
</form>

<script type="text/javascript">
var obj = {}

var handler = {
  set: function(target, name, value) {    
    //改变被代理对象的值，使之保持一致
    target[name] = value;

    var input = document.querySelector('[name=' + name + ']')
    if (input) {
      input.value = value;
    }
  }
}

var proxy = new Proxy(obj, handler);
proxy.visit = 100;

setInterval(function() {
  proxy.visit++;
}, 1000)
</script>
```