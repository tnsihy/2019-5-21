//https://www.runoob.com/w3cnote/es6-tutorial.html

// ---------2.声明与表达式-----------
// 2-1 let与const
// let命令 代码块内有效 不能重复声明 迭代技术使用（即for循环） 不存在变量提升
// const命令 声明必须初始化 暂时性死区

// 解析：暂时性死区 ES6规定，代码块中如果存在let或const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。
var PI = 'a';
if(true){
    console.log(PI);  //undefined
    const PI = 3.1415926;
}

// 2-2 解构赋值 对赋值运算的扩展 针对数组或对象
// 解构的源：解构赋值表达式的右边部分 解构的目标：解构赋值表达式的左边部分

// 数组模型的解构(Array) 
// 基本
let [a,b,c] = [1,2,3]
// 可嵌套
let [a, [[b], c]] = [1, [[2], 3]];
// 可忽略 
let [a, , b] = [1, 2, 3];
// 不完全解构
let [a = 1, b] = []; // a = 1, b = undefined
// 剩余运算符
let [a, ...b] = [1, 2, 3]; // a = 1,b = [2,3]
// 字符串等
let [a, b, c, d, e] = 'hello'; // a = h,b = e,c = l,d = l,e = o
// 解构默认值
let [a = 1] = [undefined]; // a = 1 

// 对象模型的解构(Object)
// 基本
let {foo,bar} = {foo:'aaa',bar:'bbb'}; // foo = 'aaa' bar = 'bbb'
let {foo : bar} = {bar : 'ddd'}; //foo = 'ddd'
// 可嵌套可忽略
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, { y }] } = obj;  // x = 'hello' y = 'world'
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, {  }] } = obj;  // x = 'hello'
// 不完全解构
let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj;  // x = undefined  y = 'world'
// 剩余运算符
let {a,b,...rest} = {a:10,b:20,c:30,d:40}  // a = 10 b = 20 rest={c:30,d:40}
// 解构默认值
let {a = 10, b = 5} = {a: 3};  // a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};  // aa = 3; bb = 5;

// 2-3 Symbol 原始数据类型 定义对象的唯一属性名 每一个Symbol的值都是不相等的
// 不用new命令
// 基本用法
let sy = Symbol('KK')
console.log(sy) //Symbol(KK)
typeof(sy) //symbol
// 作为属性名 Symbol作为属性名时不能用.运算符，要用方括号
// 注意：作为属性名时，是公有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
let sy = Symbol("key1");
// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}
// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
// 如果要读取到一个对象的Symbol属性，可以通过Object.getOwnPropertySymbols()和Reflect.ownKeys()取到
Object.getOwnPropertySymbols(syObject);    // [Symbol(key1)]
Reflect.ownKeys(syObject);                 // [Symbol(key1)]
Symbol.for() 
// 首先在全局中搜索有没有以该参数作为名称的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
s1 === s2;  // true
Symbol.keyFor()
//返回一个已登记的Symbol类型值的key。实质就是检测该Symbol是否已创建
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
var s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

// -----------3.内置对象--------------
// 3-1 新增
// 3-1-1 Map对象与Set对象

// Map的键可以是任意值 Map的键值对个数可以从size属性获取
// Map中的key
//   key是字符串
var myMap = new Map();
var keyString = 'a string';
myMap.set(keyString,"和键'a string'关联的值");
myMap.get(keyString);  // "和键'a string'关联的值"
myMap.get('a string'); // "和键'a string'关联的值" 因为keyString === 'a string'
//   key是对象
var myMap = new Map();
var keyObject = {};
myMap.set(keyObject,"和键'a string'关联的值");
myMap.get(keyObject);  // "和键'a string'关联的值"
myMap.get({});  // undefined
//   key是函数
var myMap = new Map();
var keyFun = function(){};
myMap.set(keyFun,"和键'a string'关联的值"); 
myMap.get(keyFun);  // "和键'a string'关联的值"
myMap.get(function(){})  // undefined
//   key是NaN
var myMap = new Map();
myMap.set(NaN,"not a number");
myMap.get(NaN) // not a number
var otherNaN = Number('foo');  //Number('foo')为NaN
myMap.get(otherNaN); //not a number
// Map的迭代
// for...of
var myMap = new Map();
myMap.set(0,'zero');
myMap.set(1,'one');

for(var [key,value] of myMap){
    console.log(key + '=' + value);
}
// myMap.entries()它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组
for(var [key,value] of myMap.entries()){
    console.log(key + '=' + value);  //0 = zero 1 = one
}
// myMap.keys()它按插入顺序包含了 Map 对象中每个元素的键
for(var key of myMap.keys()){
    console.log(key);
}
for(var value of myMap.values()){
    console.log(value);
}
// forEach()
var myMap = new Map();
myMap.set(0,'zero');
myMap.set(1,'one');
myMap.forEach(function(value,key){
    console.log(key + '=' + value);
})

// Map对象的操作
// Map与Array的转换
var kvArray = [['key1','value1'],['key2','value2']];
// Array转换为Map
var myMap = new Map(kvArray);
console.log(myMap); //Map(2) {"key1" => "value1", "key2" => "value2"}
// Map转换为Array用Array.from()
var outArray = Array.from(myMap);
// Map的克隆
var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);
console.log(myMap1 === myMap2); // false 
// Map的合并
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
// 如果有重复的键值则后面的会覆盖前面的，对应的值为uno,dos,three
var merged = new Map([...first,...second]);

// Set对象

// 3-1-2 Proxy与Reflect
// 3-2 扩展
// 3-2-1 字符串
// 3-2-2 数值
// 3-2-3 对象
// 3-2-4 数组

