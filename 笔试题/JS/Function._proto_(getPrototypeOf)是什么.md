获取一个对象的原型，可以通过_proto_的形式，或者Object.getPrototypeOf();  
那么Function.__proto__是什么?
```
var foo(){

}

foo.__proto__ === Function.prototype  // true
Function.__proto__ === Function.prototype // true

Function.prototype.__proto__ === Object.prototype // true
Object.prototype.__proto__ === null // true
```