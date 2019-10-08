在ES6中引入了`class`概念，可以直接使用原型对象模拟面向对象中的类和类继承时代。  
只有理解如何使用原型对象实现类和类继承，才能真正用好class。  

使用ES6中的class声明一个类：
```JS
class Person{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("Hello,my name is " + this.name + ".");
    }
}

var person1 = new Person("tnsihy");
person1.hello();
```
结果输出：  
Hello,my name is tnsihy.  

> class实例化的背后原理 依旧是`原型继承`  

通过类型判断得知class实际只是function（或者说object）
```JS
class Person{

}

typeof Person
```
结果输出：  
"function"  

> class定义属性  

当我们使用class定义属性（方法）时，实际上等于在class的原型对象上定义属性。
```JS
class Foo{
    constructor(){
        // constructor
    }
    describe(){
        // describe
    }
}

// 上边等价于
function Foo(){
    // constructor
}
Foo.prototype.describe = function(){
    // describe
}
```
constructor是一个比较特殊的属性，它指向构造函数(类)本身。以下验证！
```JS
Foo.prototype.constructor === Foo
```

---
> 类继承  ES6也提供了类继承的语法`extends`  

```JS
class Foo{
    constructor(name){
        this.name = name;
    }
    identify(){
        return "I am " + this.name;
    }
}

class Bar extends Foo{
    constructor(name){
        // super()指的是调用父类，调用时会绑定this ---> Foo.call(this,name);
        super(name);
    }

    speak(){
        console.log("Hello," + this.identify() + ".");
    }
}

var b1 = new Bar("jgchenu");
b1.speak();
```
结果输出：  
Hello,I am jgchenu.  

解析：  
当实例b1调用speak方法时，由于`b1本身没有speak`，所以会到`Bar.prototype原型对象上`找，并且调用原型对象上的speak()方法。  
调用identify方法时，由于`this指向的是b1对象`。所以会`先在b1本身找`，然后`沿着原型链`，查找`Bar.prototype`，最后在`Foo.prototype原型对象`上找到identify方法，然后调用。