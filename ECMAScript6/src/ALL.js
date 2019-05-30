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

// Set对象存储的值总是唯一的，所以需要判断两个值是否相等
// Set中的特殊值
//   +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复
//   undefined 与 undefined 是恒等的，所以不重复
//   NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复
let mySet = new Set();
mySet.add(1); // Set(1){1}
mySet.add(5); // Set(2){1,5}
mySet.add(5); // Set(2){1,5} 这里体现了值的唯一性
mySet.add('some text'); // Set(3){1,5,'some text'} 这里体现了类型的多样性
//Array转Set
var mySet = new Set(['value1','value2','value3']);
// 用...操作符，将Set转换成Array
var myArray = [...mySet]; 
// String转Set  没有将Set转换为String的方法
var mySet = new Set('hello');  //Set(4){'h','e','l','o'}

// Set对象作用
//   数组去重
var mySet = new Set([1,2,3,4,4]);
[...mySet]; //[1,2,3,4]
//   并集
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
var union = new Set([...a,...b]); //Set(4){1,2,3,4}
//   交集
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
var intersect = new Set([...a].filter(x => b.has(x))); // Set(2){2,3}
//   差集
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
var difference = new Set([...a].filter(x => !b.has(x))); // Set(1){1}

// 3-1-2 Proxy（代理）与Reflect 为了操作对象引入的API
// 一个Proxy对象由两个部分组成：target（目标对象） 和 hander（声明代理的指定行为）
let target = {
    name:'Tom',
    age:24
}
let handler = {
    get:function(target,key){
        console.log('Get' + key);
        return target[key];
    },
    set:function(target,key,value){
        console.log('Set' + key);
        target[key] = value;
    }
}
let proxy = new Proxy(target,handler);
proxy.name; // 实际执行handler.get
proxy.age = 25; //实际执行handler.set

// target可以为空对象
let targetEpt = {};
let handler = {};
let proxyEpt = new Proxy(targetEpt,handler);
// 调用get方法，此时目标对象为空，没有name属性
proxyEpt.name; // Get name
proxyEpt.name = 'Tom'; // Set name
proxyEpt.name; //此时已经存在name属性 {name: "Tom"}
console.log(proxyEpt); //{name: "Tom"}

// 实例方法
// get(target,propKey,receiver) 用于target对象上propKey的读取
let exam = {
    name:'Tom',
    age:18
}
let proxy = new Proxy(exam,{
    get(target,propKey,receiver){
        console.log('Get' + propKey);
        return target[propKey];
    }
})
proxy.name
// Get name
// "Tom"
// get()方法可以继承
let proxy = new Proxy({},{
    get(target,propKey,receiver){
        // 实现私有属性读取保护
        if(propKey[0] === '_'){
            throw new Erro(`Invail attempt to get private ${propKey}`);
        }
        console.log('Get' + propKey);
        return target[propKey];
    }
})
let obj = Object.create(proxy);
proxy.name;

// set(target,propKey,value,receiver) 用于拦截 target 对象上的 propKey 的赋值操作 
let validator = {
    set:function(obj,prop,value){
        if(prop === 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an integer');
            }
            if(value > 200){
                throw new RangeError('The age seems invalid');
            }
        }
        // 对于满足条件的age属性，保存
        obj[prop] = value;
    }
};
let proxy = new Proxy({},validator)
proxy.age = 100;
proxy.age  // 100
proxy.age = 'oppps' // 报错
proxy.age = 300 // 报错
// receiver表示原始操作行为所在对像，一般是Proxy实例本身
const handler = {
    set:function(obj,prop,value,receiver){
        obj[prop] = receiver;
    }
};
const proxy = new Proxy({},handler);
proxy.name = 'Tom';
proxy.name === proxy // true
const exam = {};
Object.setPrototypeOf(exam.proxy)
exam.name = 'Tom'
exam.name === exam // true

// apply(target,ctx,args) 用于拦截函数的调用、call 和 reply 操作。target 表示目标对象，ctx 表示目标对象上下文，args 表示目标对象的参数数组。
function sub(a,b){
    return a - b;
}
let handler = {
    apply:function(target,ctx,args){
        console.log('handle apply');
        return Reflect.apply(...arguments);
    }
}
let proxy = new Proxy(sub,handler);
proxy(2,1)
// handle apply
// 1

// has(target,propKey) 用于拦截HasProperty，即判断target对象是否存在propKey属性时，会被这个方法拦截。
let handler = {
    has:function(target,propKey){
        console.log('handle has');
        return propKey in target;
    }
}
let exam = {name:'Tom'};
let proxy = new Proxy(exam,handler);
console.log('name' in proxy);
// handle has
// true

// construct(target,args) 用于拦截new命令，返回值必须为对象
let handler = {
    construct:function(target,args,newTarget){
        console.log('handler construct');
        return Reflect.construct(target,args,newTarget)
    }
};
class exam {
    constructor(name){
        this.name = name;
    }
}
let proxy = new Proxy(exam,handler)
console.log(new proxy('Tom'));
// handler construct
// exam {name: "Tom"}

// deleteProperty(target,propKey) 用于拦截delete操作 如果这个方法抛出错误或者返回 false ，propKey 属性就无法被 delete 命令删除
// defineProperty(target,propKey,propDesc) 用于拦截 Object.definePro 
let handler = {
    defineProperty:function(target,propKey,propDesc){
        console.log('handle defineProperty');
        return true;
    }
}
let target = {};
let proxy = new Proxy(target,handler);
console.log(proxy.name = 'Tom');  // handle defineProperty
console.log(target); //{name = 'Tom'}

// defineProperty 返回值为false，添加属性操作无效
let handler1 = {
    defineProperty : function(target,propKey,propDesc){
        console.log('handle defineProperty');
        return false;
    }
}
let target1 = {};
let proxy1 = new Proxy(target1,handler1);
proxy1.name = 'Jerry';
console.log(target1); // {}

// erty操作
// getOwnPropertyDescriptor(target,propKey) 用于拦截Object.getOwnProperty()返回值为属性描述对象或者undefined
let handler = {
    getOwnPropertyDescriptor:function(target,propKey){
        return Object.getOwnPropertyDescriptor(target,propKey);
    }
}
let target = {name:'Tom'}
let proxy = new Proxy(target,handler);
Object.getOwnPropertyDescriptor(proxy,'name');
// {value: "Tom", writable: true, enumerable: true, configurable: true}

// ptor属性
// 1.getPrototypeOf(target) 用于拦截获取对象原型的操作，主要包括以下操作
Object.prototype._proto_;
Object.prototype.isPrototypeOf();
Object.getPrototypeOf();
Reflect.getPrototypeOf();
// 还有instanceof

let exam = {};
let proxy = new Proxy({},{
    getPrototypeOf:function(target){
        return exam;
    }
})
Object.getPrototypeOf(proxy); // {}返回值必须为对象或者null，否则报错
let proxy = new Proxy({},{
    getPrototypeOf: function(target){
        return true;
    }
})
Object.getPrototypeOf(proxy) // TypeError: 'getPrototypeOf' on proxy: trap returned neither object // nor null

// 2.isExtensible(target) 用于拦截Obejct.isExtensible操作 该方法只能返回布尔值
let proxy = new Proxy({},{
    isExtensible:function(target){
        return true;
    }
})
Object.isExtensible(proxy) // true
// 返回值必须与目标对象的isExtensible属性保持一致，否则会抛出错误
let proxy = new Proxy({},{
    isExtensible:function(target){
        return false;
    }
})
Object.isExtensible(proxy);
// TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')

// 3.ownKeys(target) 用于拦截对象自身属性的读取操作
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
// 还有or...in
// 方法返回的数组成员，只能是字符串或 Symbol 值，否则会报错。
// 若目标对象中含有不可配置的属性，则必须将这些属性在结果中返回，否则就会报错。
// 若目标对象不可扩展，则必须全部返回且只能返回目标对象包含的所有属性，不能包含不存在的属性，否则也会报错。
let proxy = new Proxy({
    name:'Tom',
    age:18
},{
    ownKeys:function(target){
        return ['name'];
    }
});
Object.keys(proxy); //['name']
let target = {
    name:'Tom',
    [Symbol.for('age')]:24
};
// 添加不可遍历属性'gender'
Object.defineProperty(target,'gender',{
    enumerable:false,
    configurable:true,
    writable:true,
    value:'male'
});
let handler = {
    ownKeys(target){
        return ['name','parent',Symbol.for('age'),'gender'];
    }
};
let proxy = new Proxy(target,handler);
Object.keys(proxy);  // ['name']

// 4.preventExtensions(target) 拦截Object.preventExtensions操作 返回布尔值，否则会自动转为布尔值
// 只有目标对象不可扩展时(即Object.isExtensible(proxy)为false,proxy.preventExtensions才能返回true，否则会报错
var proxy = new Proxy({},{
    preventExtensions:function(target){
        return true;
    }
});
// 由于proxy.preventExtensions返回true，此处也会返回true，因此为报错
Object.preventExtensions(proxy); // 报错
// 解决方案
var proxy = new Proxy({},{
    preventExtensions:function(target){
        // 返回前先调用 Object.preventExtensions
        Object.preventExtensions(target);
        return true;
    }
});
Object.preventExtensions(proxy);  //Proxy{}

// 5.setPrototypeOf 拦截Object.setPrototypeOf方法 返回值为布尔值
let proto = {};
let proxy = new Proxy({function(){}},{
    setPrototypeOf:function(){
        console.log('setPrototypeOf');
        return true;
    }
});
Object.setPrototypeOf(proxy,proto); // setPrototypeOf

// 6.Proxy.revocable() 用于返回一个可取消的Proxy实例
let {proxy,revoke} = Proxy.revocable({},{});
proxy.name = 'Tom';
revoke();
proxy.name // TypeError: Cannot perform 'get' on a proxy that has been revoked

// Reflect ????未完待续

// 3-2 扩展
// 3-2-1 字符串
//   子串的识别
includes() // 返回布尔值，判断是否能找到参数字符串
startsWith() // 返回布尔值，判断参数字符串是否在原字符串的头部
endsWith() // 返回布尔值，判断参数字符串是否在原字符串的尾部
// 以上三个方法都可以接受两个参数(字符串)，需要搜索的字符串，和可选的搜索起始位置索引
let string = 'apple,banana,orange';
string.includes('banana'); // true
string.startsWith('apple'); // true
string.endsWith('apple'); //false
string.startsWith('banana',6) // true
// 如果需要知道子串的位置，还是得用indexOf()和lastIndexOf()，参数若为正则表达式会自动转换为字符串

//   字符串重复
repeat(); //返回新的字符串，表示将字符串重复指定次数返回
console.log('hello,'.repeat(2)); //'hello,hello,'
console.log('hello,'.repeat(3.2)); //'hello,hello,hello,' 如果参数为小数，则向下取整
console.log('hello,'.repeat(-0.5)); // ''
console.log('hello,'.repeat(NaN)); // ''
console.log('hello,'.repeat(-1)); // RangeError: Invalid count value
console.log('hello,'.repeat(Infinity)); //如果参数是负数或者Infinty会报错
console.log('hello'.repeat('2')); // 'hello,hello,' 如果参数为字符串会转化为数字

//   字符串补全
padStart(); // 返回新的字符串，表示用参数字符串从头部补全原字符串
padEnd();  // 返回新的字符串，表示用参数字符串从尾部补全原字符串
// 以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
console.log('h'.padStart(5,'o')); // 'ooooh'
console.log('h'.padEnd(5,'o')); // 'hoooo'
console.log('h'.padStart(5)); // '    h'
// 如果原字符串的长度>=指定的最小长度，则返回原字符串
console.log('hello'.padStart(5,'A')); // 'hello'
console.log('hello'.padEnd(10,'world!')); //'hello,worl'
console.log('123'.padStart(10,'0')); // '0000000123' 常用于补全位数

//   模板字符串 = 加强版的字符串,用反引号``
let string = `Hello'\n'world`;
console.log(string);
// 'Hello'
// 'world' 
// 多行字符串
let string1 = `Hey,
Can you stop angry now?`;
console.log(string1);
// Hey,
// Can you stop angry now?
let name = 'Mike';
let age = 27;
let info = `My Name is ${name},I am ${age + 1} years old next year.`
console.log(info);
// My Name is Mike,I am 28 years old next year.
// 字符串中调用函数：
function f(){
    return 'have fun!';
}
let string2 = `Game start,${f()}`;
console.log(string2); //Game start,have fun!
innerHtml = `<ul>
<li>menu</li>
<li>mine</li>
<ul>
`;
console.log(innerHtml);
// 输出
<ul>
    <li>menu</li>
    <li>mine</li>
</ul>

//    标签模板 是一个函数的调用
alert `Hello world`;
// 等价于alert('Hello world!');
function f(stringArr,...values){
    let result = "";
    for(let i=0;i<stringArr.length;i++){
        result += stringArr[i];
        if(values[i]){
            result += values[i];
        }
    }
    return result;
}
let name = 'Mike';
let age = 27;
f`My Name is ${name},I am ${age+1} years old next year.`;
// 等价于
f(['My Name is',',I am ',' years old next year.'],'Mike',28);
// 过滤HTML字符串


// 3-2-2 数值
// 3-2-3 对象
// 3-2-4 数组

