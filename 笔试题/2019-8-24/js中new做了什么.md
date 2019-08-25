要创建Person新实例，必须使用new操作符。  
以这种方式调用构造函数实际上会经历以下4个步骤
- 创建一个新对象
- 将构造函数的作用域赋给新对象
- 执行构造函数中代码
- 返回新对象

`var obj = new Base()`
- `var obj = {}`  //创建一个空对象
- `obj._proto_ = Base.prototype`  //该对象继承该函数的原型
- `Base.call(obj)` //将构造函数中的this指向新建对象