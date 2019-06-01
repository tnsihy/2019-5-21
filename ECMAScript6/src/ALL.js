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
// 过滤HTML字符串，防止用户输入恶意内容
function f(stringArr,...values){
    let result = "";
    for(let i=0;i<stringArr.length;i++){
        result += stringArr[i];
        if(values[i]){
            result += String(values[i]).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
    }
    return result;
}
name = '<Amy&Mike>';
f`<p>Hi,${name}.I would like send you some message.</p>`
// <p>Hi, &lt;Amy&amp;MIke&gt;.I would like send you some message.</p>

// 3-2-2 数值
// 数值的表示
// 二进制表示法 前缀0b或者0B
console.log(0b11 === 3); // true
console.log(0B11 === 3); // true
// 八进制表示法 前缀0o或者0O
console.log(0o11 === 9); // true
console.log(0O11 === 9); // true
// 常量Number.EPSILON 表示1与大于1的最小浮点数之间的差 值接近于2.2204460492503130808472633361816E-16，或者 2-52
// 测试数值是否在误差范围内：
0.1 + 0.2 === 0.3; //false 0.30000000000000004
Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON //true
// 属性特性
writable:false
enumerable:false;
configurable:false; 
// 最大、最小安全整数 安全整数范围在2的-53次方到2的53次方之间（不包括两个端点）超过这个范围的整数无法精确表示。
// 最大安全整数
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true
Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1;     // false
Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2; // false
// 最小安全整数
Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2; // false
Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1;     // false
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true

// 方法
// Number对象新方法
Number.isFinite() // 用于检测一个数值是否为有限的finite，即不是infinity
console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(0.1)); // true
console.log(Number.isFinite(NaN)); // false NaN不是有限的
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
// Number.isFinite()没有隐式的Number()类型转换，所有非数值都返回false

Number.isNaN() //用于检查一个值是否为NaN 不存在隐式转换
Number.isNaN(NaN); // true
console.log(Number.isNaN(true));  // true

// 从全局移植到Number对象的方法
Number.parseInt() // 用于将给定字符转化为指定进制的整数
// 不指定默认为十进制
Number.parseInt('12.34'); // 12
Number.parseInt(12.34); // 12
// 指定进制
Number.parseInt('0011',2); // 3
// 与全局的parseInt()函数是同一函数
Number.parseInt === parseInt;

Number.parseFloat() // 用于把一个字符串解析成浮点数
Number.parseFloat('123.45'); // 123.45
Number.parseFloat('123.45abc'); // 123.45
// 无法解析成浮点数，则返回NaN
Number.parseFloat('abc') // NaN
// 与全局的 parseFloat() 方法是同一个方法
Number.parseFloat === parseFloat // true

Number.isInteger() // 用于判断给定的参数是否为整数
Number.isInteger(value); // false
Number.isInteger(0); // true
// JavaScript内部，整数和浮点数采用的是同样的储存方法，因此1与1.0被视为相同的值
Number.isInteger(1);  // true
Number.isInteger(1.0); // true
Number.isInteger(1.1); // false
Number.isInteger(Math.PI); // false
// NaN 和正负 Infinity 不是整数
Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger("10");  // false
Number.isInteger(true);  // false
Number.isInteger(false); // false
Number.isInteger([1]);   // false

Number.isSafeInteger() // 用于判断数值是否在安全范围内。
Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1); // false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false

// Math对象的扩展
Math.cbrt() // 用于计算一个数的立方根 会对非数值进行转换
Math.cbrt(1); // 1
Math.cbrt('1'); // 1
Math.cbrt('hhh'); // NaN

Math.imul() // 两个数以32位带符号整数形式相乘的结果，返回也是一个32位的带符号整数
// 大多数情况下，结果与a*b相同
Math.imul(1,2); // 2
// 用于正确返回大数乘法结果中的低位数值  ???
Math.imul(0x7fffffff,0x7fffffff); // 1

Math.hypot() // 用于计算所有参数的平方和的平方根
Math.hypot(3,4) // 5
Math.hypot(1,2,'3') //3.741657386773941
Math.hypot(true); // 1 非数值会先被转换为数值后进行计算
Math.hypot(false); // 0
// 空值会被转换为 0
Math.hypot(); // 0
Math.hypot([]); // 0
// 参数为 Infinity 或 -Infinity 返回 Infinity
Math.hypot(Infinity); // Infinity
Math.hypot(-Infinity); // Infinity
// 参数中存在无法转换为数值的参数时返回 NaN
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot({});          // NaN

Math.clz32() // 用于返回数字的32位无符号整数形式的前导0的个数
Math.clz32(0); //32 0转化为32位无符号二进制整数 则有32个0
Math.clz32(1); //31 1转化为32位无符号二进制整数 则有31个0 1个1
Math.clz32(0b01000000000100000000000000000000); // 1
// 当参数为小数时，只考虑整数部分
Math.clz32(0.5);
// 对于空值或非数值，会转化为数值再进行计算
Math.clz32('1');       // 31
Math.clz32();          // 32
Math.clz32([]);        // 32
Math.clz32({});        // 32
Math.clz32(NaN);       // 32
Math.clz32(Infinity);  // 32
Math.clz32(-Infinity); // 32
Math.clz32(undefined); // 32
Math.clz32('hhh');     // 32

Math.trunc() // 用于返回数字的整数部分
Math.trunc(12.3); //12
Math.trunc(12); //12
// 整数部分为0也会判断符号
Math.trunc(-0.5); //-0
Math.trunc(0.5); //0
// Math.trunc 会将非数值转为数值再进行处理
Math.trunc("12.3"); // 12
// 空值或无法转化为数值时时返回 NaN
Math.trunc();           // NaN
Math.trunc(NaN);        // NaN
Math.trunc("hhh");      // NaN
Math.trunc("123.2hhh"); // NaN

Math.fround() // 用于获取数字的32位单精度浮点数形式
// 对于 2 的 24 次方取负至 2 的 24 次方之间的整数（不含两个端点），返回结果与参数本身一致
Math.fround(-(2**24)+1);  // -16777215
Math.fround(2 ** 24 - 1); // 16777215
// 用于将 64 位双精度浮点数转为 32 位单精度浮点数
Math.fround(1.234) // 1.125
// 当小数的精度超过 24 个二进制位，会丢失精度
Math.fround(0.3); // 0.30000001192092896
// 参数为 NaN 或 Infinity 时返回本身
Math.fround(NaN)      // NaN
Math.fround(Infinity) // Infinity
// 参数为其他非数值类型时会将参数进行转换 
Math.fround('5');  // 5
Math.fround(true); // 1
Math.fround(null); // 0
Math.fround([]);   // 0
Math.fround({});   // NaN

Math.sign() //用于判断数字的符号（正、负、0）
Math.sign(1);  // 1
Math.sign(-1); // -1
// 参数为 0 时，不同符号的返回不同
Math.sign(0);  // 0
Math.sign(-0); // -0
// 判断前会对非数值进行转换
Math.sign('1');  // 1
Math.sign('-1'); // -1  
// 参数为非数值（无法转换为数值）时返回 NaN
Math.sign(NaN);   // NaN 
Math.sign('hhh'); // NaN

Math.expm1() // 用于计算e的x次方减1的结果，即Math.exp(x)-1
Math.expm1(1);  // 1.718281828459045
Math.expm1(0);  // 0
Math.expm1(-1); // -0.6321205588285577
// 会对非数值进行转换
Math.expm1('0'); //0
// 参数不为数值且无法转换为数值时返回 NaN
Math.expm1(NaN); // NaN

Math.log1p(x) // 用于计算1+x的自然对数，即Math.log(1+x) 
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
// 参数小于 -1 时返回 NaN
Math.log1p(-2); // NaN

Math.log10() // 用于计算以10为底的x的对数 
Math.log2() // 用于计算以2为底的x的对数
Math.log10(1);   // 0
// 计算前对非数值进行转换
Math.log10('1'); // 0
// 参数为0时返回 -Infinity
Math.log10(0);   // -Infinity
// 参数小于0或参数不为数值（且无法转换为数值）时返回 NaN
Math.log10(-1);  // NaN

// 双函数方法
Math.sinh(x) // 用于计算双曲正弦。
Math.cosh(x) // 用于计算双曲余弦。
Math.tanh(x) // 用于计算双曲正切。
Math.asinh(x) // 用于计算反双曲正弦。
Math.acosh(x) // 用于计算反双曲余弦。
Math.atanh(x) // 用于计算反双曲正切。

// 指数运算符
1 ** 2; //1
// 从右结合，从右至左计算
2 ** 2 ** 3; //2 ** 8 = 256
// **=
let exam = 2;
exam **= 2; // 4

// 3-2-3 对象
// 对象字面量
//   1.属性的简洁表示法
const name = 'Tom';
const age = 12;
const person = {name,age};
console.log(person); // person = {name:'Tom',age:12}
// 等同于
const person = {name:name,age:age}
// 方法名也可以简写
const person = {
    sayHi(){
        console.log('Hi');
    }
}
person.sayHi(); //Hi
// 等同于
const person = {
    sayHi:function(){
        console.log('Hi');
    }
}
person.sayHi();
// 如果是Generator函数，则要在前面加一个星号: 后面会学！
const obj = {
    * myGenerator(){
        yield 'Hello World';
    }
};
// 等同于
const obj = {
    myGenerator:function(){
        yield 'Hello World';
    }
}
//   2.属性名表达式
// ES6允许用表达式作为属性名，但是一定要将表达式放在方括号内。
const obj = {
    ['he' + 'llo'](){
        return 'Hi';
    }
}
obj.hello(); //'Hi'

// 对象的拓展运算符
// 拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。
let person = {name: "Amy", age: 15};
let someone = { ...person };
someone;  //{name: "Amy", age: 15}
// 合并
let name = 'Tom';
let age = 18;
let someone = {...name,...age};
someone; //{name:'Tom',age:18}
// !!自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉
let person = {name: "Amy", age: 15};
let someone = { ...person, name: "Mike", age: 17};
someone;  //{name: "Mike", age: 17}
// !!自定义的属性在拓展运算度前面，则变成设置新对象默认属性值
let person = {name : "Amy",age : 15};
let someone = { name : "Mike",age : 17,...person};
someone; //{name : "Amy",age : 15}
// 拓展运算符后面是空对象，没有任何效果也不会报错。
let a = {...{}, a: 1, b: 2};
a;  //{a: 1, b: 2}
// 拓展运算符后面是null或者undefined，没有效果也不会报错。
let b = {...null, ...undefined, a: 1, b: 2};
b;  //{a: 1, b: 2}

// 对象的新方法
// 1.Object.assign(target,source_1,...) 用于将源对象的所有枚举属性复制到目标对象中
let target = {a:1};
let object2 = {b:2};
let object3 = {c:3};
Object.assign(target,object2,object3);  // 第一个参数是目标对象，后面的参数是源对象
target; //{a:1,b:2,c:3}
// 目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性
// 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。
Object.assign(3);  //Number(3)
typeof Object.assign(3); //"object"
// null 和 undefined 不能转化为对象，所以会报错:
Object.assign(null);       // TypeError: Cannot convert undefined or null to object
Object.assign(undefined);  // TypeError: Cannot convert undefined or null to object
// 当参数不止一个时，null 和 undefined 不放第一个，即不为目标对象时，会跳过 null 和 undefined ，不报错
Object.assign(1,undefined);  // Number {1}
Object.assign({a: 1},null);  // {a: 1}
Object.assign(undefined,{a: 1});  // TypeError: Cannot convert undefined or null to object
// 数组的处理
Object.assign([2,3],[5]) //[5,3]  //转化为{0:2,1:3}

// 2.Object.is(value1,value2) 用来比较判断两个值是否相等，与===基本类似
Object.is('q','q'); // true
Object.is([1],[1]); // false
Object.is({q:1},{q:1}); // false
// 与===的区别
Object.is(-0,+0); // false
Object.is(NaN,NaN); // true
NaN === NaN; // false

// 3-2-4 数组
// 数组创建
// 1.Array.of() 将参数中所有的值作为元素形成数组
console.log(Array.of(1,2,3,4)); // [1,2,3,4]
Array.of(1,'2',true); // [1,'2',true]
Array.of(); // []

// 2.Array.from() 将类数组对象或可迭代对象转化为数组
Array.from([1,2]); // [1,2]
Array.from([1,,3]); // [1,undefined,3]
// Array.from(arrayLike[,mapFn[,thisArg]]) 返回值为转换后的数组
// arrayLike 想要转换的类型数组对象或可迭代对象
Array.from([1,2,3]); // [1,2,3]
// mapFn 可选，map函数，用于对每个元素进行处理，放入数组的是处理后的元素
Array.from([1,2,3],(n) => n*2); // [2,4,6]
// thisArg 可选，用于指定map函数执行时的this对象
let map = {
    do:function(){
        return n*2;
    }
}
let arrayLike = [1,2,3];
console.log(Array.from(arrayLike,function(n){
    return this.do(n);
},map));  // [2,4,6]

// 类数组对象 必须有length属性，且元素属性名必须是数值或者可转化为数值的字符
let arr = Array.from({
    0:'1',
    1:'2',
    2:3,
    length:3
});
console.log(arr); // ['1','2',3]
//没有length属性，则返回空数组
let array = Array.from({
    0:'1',
    1:'2',
    2:3
})
console.log(array); // []
// 元素属性名不是数值且无法转化为数值，返回长度length元素值为undefined的数组
let array1 = Array.from({
    a:1,
    b:2,
    length:2
})
console.log(array1); // [undefined,undefined]

// 转换可迭代对象
// 1.转换map
let map = new Map();
map.set('key0','value0');
map.set('key1','value1');
console.log(Array.from(map)); // [['key0','value0'],['key1','value2']]

// 2.转换set
let arr = [1,2,3];
let set = new Set(arr);
console.log(Array.from(set)); // [1,2,3]

// 3.转换字符串
let str = 'abc';
console.log(Array.from(str)); //['a','b','c']

// 扩展的方法
// 1.find() 查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素
let arr = Array.of(1,2,3,4);
console.log(arr.find(item => {
    item > 2;
})) // 3
// 数组空位处理为undefined
console.log([,1].find(n => true)); // undefined

// 2.findIndex() 查找数组中符合条件的元素索引，若有多个符合条件的索引，则返回第一个元素索引
// 参数1：回调函数  参数2(可选)：指定回调函数中的this值
let arr = Array.of(1,2,3,4);
console.log(arr.findIndex(item => item = 1)); // 0
// 数组空位处理为undefined
console.log([,1].findIndex(n => true)); // 0

// 3.fill() 将一定范围索引的数组元素内容填充为单个指定的值
let arr = Array.of(1,2,3,4);
// 参数1：用来填充的值  参数2：被填充的起始索引  参数3：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,2)); // [1,0,3,4]

// 4.copyWithin() 将一定范围索引的数组元素修改为此数组另一指定范围索引的元素
// 参数1：被修改的起始索引  参数2：被用来覆盖的数据的起始索引  参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
let arr = Array.of(1,2,3,4);
arr.copyWithin(0,2,4); //[3,4,3,4]
arr.copyWithin(2,0); //[1,2,1,2]
[1,2,,4].arr.copyWithin(0,2,4); //[,4,,4]

// 遍历
// 1.entries() 遍历键值对
for(let[key,value] of ['a','b'].entries()){
    console.log(key,value);
}
// 0 "a"
// 1 "b"
// 不使用for...of循环
let entries = ['a','b'].entries();
console.log(entries.next().value); // [0,'a']
console.log(entries.next().value); // [1,'b']
// 数组含空位
console.log([...[,'a']].entries()); //[[0,undefined],[1,'a']]

// 2.keys() 遍历键名
for(let key of ['a','b'].keys()){
    console.log(key);
}
// 0
// 1
// 数组含空位
console.log([...[,'a'].values()]); // [undefined,'a']

// 包含
// includes() 数组是否包含指定值
// 注意：与Set和Map的has方法区分；Set的has方法用于查找值；Map的has方法用于查找键名。
// 参数1：包含的指定值
[1,2,3].includes(1); // true
// 参数2(可选)：搜索的起始索引，默认为0
[1,2,3].includes(1,2); // false
// NaN的包含判断
[1,NaN,3].includes(NaN); // true;

// 嵌套数组转一维数组
// 1.flat()
[1,[2,3]].flat(); //[1,2,3]
// 指定转换的嵌套层数（从外向内）
[1,[2,[3,[4,5]]]].flat(2);  // [1,2,3,[4,5]]
// 不管嵌套多少层
[1,[2,[3,[4,5]]]].flat(Infinity); // [1,2,3,4,5]
// 自动跳过空位
[1,[2,,3]].flat(); //[1,2,3]

// 2.flatMap() 先对数组中每个元素进行处理，再对数组执行flat()方法
// 参数1：遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组
// 参数2：指定遍历函数中this的指向
console.log([1,2,3].flatMap(n => [n*2])); // [2,4,6]

// 数组缓冲区 内存中的一段地址
// 实际字节数在创建时确定，之后只可修改其中的数据，不可修改大小。

// 创建数组缓冲区
let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10
// 分割已有数组缓冲区
let buffer = new ArrayBuffer(10);
let buffer1 = buffer.slice(1,3);
console.log(buffer1.byteLength); // 2

// 视图 用来操作内存的接口  ????
// 可以操作数组缓冲区或缓冲区字节的子集，并按照其中一种数值数据类型来读取和写入数据
// DataView类型是一种通用的数组缓冲区视图，其支持所有8种数值型数据类型
// 创建 
let buffer = new ArrayBuffer(10);
let dataView = new DataView(buffer);
dataView.setInt8(0,1); // dataView.setInt8(byteOffset,value)
console.log(dataView.getInt8(0)); // 1
// 通过设定偏移量(参数2)与长度(参数3)指定 DataView 可操作的字节范围
let buffer1 = new ArrayBuffer(10);
let dataView = new DataView(buffer1,0,3);
dataView.setInt8(5,1); //RangeError

// 定型数组  ????
// 数组缓冲区的特定类型的视图
// 可以强制使用特定的数据类型，而不是使用通用的DataView对象来操作数组缓冲区
// 创建
// 通过数组缓冲区生成
let buffer = new ArrayBuffer(10);
let view = new Int8Array(buffer);
console.log(view.byteLength); // 10
// 通过构造函数
let view = new Int32Array(10);
console.log(view.byteLength); // 40
console.log(view.length); // 10
// 不传参则默认长度为0
// 在这种情况下数组缓冲区分配不到空间，创建的定型数组不能用来保存数据
let view1 = new Int32Array();
console.log(view1.byteLength); // 0
console.log(view1.length);     // 0
// 可接受参数包括定型数组、可迭代对象、数组、类数组对象
let arr = Array.from({
0: '1',
1: '2',
2: 3,
length: 3
});
let view2 = new Int16Array([1, 2]),
    view3 = new Int32Array(view2),
    view4 = new Int16Array(new Set([1, 2, 3])),
    view5 = new Int16Array([1, 2, 3]),
    view6 = new Int16Array(arr);
console.log(view2 .buffer === view3.buffer); // false
console.log(view4.byteLength); // 6
console.log(view5.byteLength); // 6
console.log(view6.byteLength); // 6
// length属性不可写，如果尝试修改这个值，在非严格模式下会直接忽略该操作，在严格模式下会抛出错误。
let view = new Int16Array([1,2]);
view.length = 3;
console.log(view.length); // 2
// 定型数组可使用entries()、keys()、values()进行迭代
let view = new Int16Array([1,2]);
for(let [k,v] of view.entries()){
    console.log(k,v);
}
// 0 1
// 1 2
let view = new Int16Array([1,2]);
view.find((n) => 1); // 2
// 定型数组的方法返回定型数组,而普通数组的方法返回普通数组
let view = Int16Array.of(1,2);
console.log(view instanceof Int16Array); // true
// 定型数组不是普通数组，不继承自Array
let view = new Int16Array([1,2]);
console.log(Array.isArray(view)); //false
// 定型数组中增加了set()与subarray()方法
// set()方法用于将其他数组复制到已有定型数组 subrray()用于提取已有定型数组的一部分形成新的定型数组
// set方法
// 参数1：一个定型数组或普通数组  参数2(可选):偏移量，开始插入数据的位置，默认为0
let view = new Int16Array(4);
view.set([1,2]);
view.set([3,4],2);
console.log(view); // [1,2,3,4]
// subrray()方法
// 参数1：可选，开始位置  参数2：可选，结束位置（不包括结束位置）
let view = new Int16Array([1,2,3,4]),
    subview1 = view.subarray(),
    subview2 = view.subarray(1),
    subview3 = view.subarray(1,3);
console.log(subview1); // [1,2,3,4]
console.log(subview2); // [2,3,4]
console.log(subview3); // [2,3]

// 扩展运算符
// 复制数组
let arr = [1,2];
let arr1 = [...arr];
console.log(arr1); // [1,2]
// 数组含空位
let arr2 = [1,,3];
let arr3 = [...arr2];
console.log(arr3); // [1,undefined,3]
// 合并数组
console.log([...[1,2],...[3,4]]); // [1,2,3,4]

// -----------4.运算符与语句----------------
// 4-1 函数
//   函数参数的扩展
function fn(name,age=17){
    console.log(name + ',' + age);
}
fn("Amy",18); // Amg,18
fn("Amy","");  // Amy,
fn("Amy");     // Amy,17
// 函数参数默认值存在暂时性死区，在函数参数默认值表达式中，还未初始化赋值的参数值无法作为其他参数的默认值
function f(x=y){
    console.log(x);
}
f(); //ReferenceError: y is not defined
// 不定参数 用来表示不确定参数个数，形如...变量名 具名参数只能放在参数组的最后，并且有且只有一个不定参数
function f(...values){
    console.log(values.length);
}
f(1,2); // 2
f(1,2,3,4) // 4

// 箭头函数 参数=>函数体
var f = v => v;
// 等价于
var f = function(v){
    return v;
}
f(1); // 1
// 当箭头函数没有参数或者有多个参数，要用()括起来
var f = (a,b) => a+b;
f(6,2); // 8
// 当箭头函数体有多行语句，要用{}括起来，表示代码块
var f = (a,b) => {
    let result = a + b;
    return result;
}
f(6,2); // 8
// 当箭头函数要返回对象的时候，为了区分于代码块，要用()括起来
var f = (id,name) => ({
    id:id,
    name:name
});
f(6,2); // {id:6,name:2}
// 没有this(此时的this指外层this，即Window)、super、arguments和new.target绑定
// 箭头函数体中的this对象，是定义函数时的对象，而不是使用函数时的对象
function fn(){
    setTimeout(()=>{
        // 定义时，this绑定的是fn中的this对象
        console.log(this.a);
    },0)
}
var a = 20;
// fn的this对象为 {a : 20}
fn.call({a:18});  // 18
// 适合使用的场景
// 回调函数
var Person = {
    'age' : 18,
    'sayHello': function(){
        setTimeout(function(){
            console.log(this.age);
        })
    }
};
var age = 20;
Person.sayHello(); // 20
// 用ES6
var Person1 = {
    'age':18,
    'sayHello':function(){
        setTimeout(()=>{
            console.log(this.age);
        });
    }
};
var age = 20;
Person1.sayHello(); // 18

// 不适合使用的场景
var Person = {
    'age': 18,
    'sayHello':()=>{
        console.log(this.age);
    }
};
var age =20;
Person.sayHello(); //20 此时this指向全局
var Person1 = {
    'age': 18,
    'sayHello': function(){
        console.log(this.age);
    }
};
var age = 20;
Person1.sayHello(); //18 此时this指向Person1对象
// 需要动态this的时候不适合使用
var button = document.getElementById('userClick');
button.addEventListener('click',()=>{
    this.classList.toggle('on');
})
//button 的监听函数是箭头函数，所以监听函数里面的 this 指向的是定义的时候外层的 this 对象，即 Window，导致无法操作到被点击的按钮对象。

// 4-2 迭代器(一种新的遍历机制)
//   迭代过程
// 通过Symbol.iterator创建一个迭代器，指向当前数据结构的起始位置
// 通过next方法进项向下迭代，next方法会返回当前位置对象，对象包含了value和done两个属性，value是当前属性的值，done用于判断是否遍历结束
// 当done为true时结束
const items = ['zero','one','two'];
const it = items[Symbol.iterator]();
it.next();// 返回{value:'zero',done:false}
it.next();// 返回{value:'one',done:false}
it.next();// 返回{value:'two',done:false}
it.next();// 返回{value:undefined,done:true}

// 可迭代的数据结构，下面是可迭代的值
// Array String Map Set Dom元素
// 数组Array和类型数组TypedArray
for(let item of ['zero','one','two']){
    console.log(item);
}
// zero
// one
// two
const typedArray1 = new Int8Array(6);
typedArray1[0] = 10;
typedArray1[1] = 11;
for(let item of typedArray1){
    console.log(item);
}
// 10
// 11
// (4)0

// String(遍历的是Unicode码)
for(const c of 'z\uD83D\uDC0A'){
    console.log(c);
}
// z
// \uD83D\uDC0A

// Map(主要迭代entries)，每个entries都会被编码为[key,value]的值
const map = new Map();
map.set(0,'zero');
map.set(1,'one');
for(let item of map){
    console.log(item);
}
// [0,'zero']
// [1,'one']

// Set(对元素进行迭代)
const set = new Set();
set.add('zero');
set.add('one');
for(let item of set){
    console.log(item);
}
// zero
// one

// arguments
function args(){
    for(let item of arguments){
        console.log(item);
    }
}
args('zero','one');
// zero
// one

// 可迭代的数据结构
const arrayLink = {0:'zero',1:'one',length:2}
for(let item of Array.from(arrayLink)){
    console.log(item);
}
// zero
// one
// let const var 可用于for...of

// 4-3 class类  ????
// 4-4 模块
// -----------5.异步编程--------------------
// 5-1 Promise对象
// 5-2 Generator函数
// 5-3 async函数