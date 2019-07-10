/**
 * util提供常用函数的集合
 * util.inherits(constructor,superConstructor) 实现对象间原型继承的函数
 */
var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function(){
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function(){
    console.log(this.name);
};
function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName(); // base
objBase.sayHello();  // Hello base
console.log(objBase); // Base { name:'base',base:1991,sayHello:[Function] }

var objSub = new Sub();
objSub.showName(); // sub
// objSub.sayHello(); error
// Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承
console.log(objSub); // Sub { name:'sub'}

/**
 * util.inspect(object,[showHidden],[depth],[colors]) 将任意对象转换为字符串的方法
 * 
 * 它至少接受一个参数 object，即要转换的对象
 * showHidden是一个可选参数，如果值为true，将会输出更多隐藏信息。
 * depth 表示最大递归的层数
 */
var util = require('util');
function Person(){
    this.name = 'tnsihy';
    this.toString = function(){
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

/**
 * util.isArray(object)
 * 如果给定的参数object是一个数组返回true  否则返回false
 */
var util = require('util');
util.isArray([]); // true
util.isArray(new Array); // true
util.isArray({}); // false

/**
 * util.isRegExp(object) 
 * 是一个正则表达式返回true，否则返回false
 */
var util = require('util');
util.isRegExp(/some regexp/) // true
util.isRegExp(new RegExp('another regexp')) // true
util.isRegExp({}) // false

/**
 * util.isData(object)
 * util.isError(object)
 */
util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false



