ES6知识点：  
`1.let与const`  
- let声明的变量只在let命令所在的代码块中有效
- const声明一个只读的常量，一旦声明，常量的值不能改变。
- const声明的是复杂类型(object,array,function)，变量指向的内存地址其实是保存了一个指向实际数据的指针， const只能保证指针是固定的。
  
`2.解构赋值`  
`3.Symbol`  
- 表示独一无二的值 
- 原始数据类型，可以接受一个字符串为参数
- 如果要获取一个对象的Symbol`属性`，可以使用Object.getOwnPropertySymbols()和Reflect.ownKeys()取到。
```
let sy = Symbol('key1');

let syObject = {};
syObject[sy] = "kk";
console.log(syObject);  //{Symbol(key1): "kk"}

for(let i in syObject){
    console.log(i);  //无输出
}

Object.keys(syObject);  //[]
Object.getOwnPropertySymbols(syObject);  //[Symbol(key1)]
Reflect.ownKeys(syObject); //[Symbol(key1)]
```

`4.Map与Set`  
- Map
  - Map对象保存键值对。任何值都可以作为一个键或者一个值。
  - 在Map中，NaN与NaN没有区别。
  - Map的迭代
  - Map与Array的转换
  - Map的克隆
  - Map的合并
- Set
  - Set 对象允许你存储任何类型的`唯一值`，无论是原始值或者是对象引用。
  - Set转换为Array
  - 数组去重用Set
  - 并集 交集 差集用Set
```
//Map
var myMap = new Map();
var string = 'a string';
myMap.set(string,'string的值');
myMap.get(string);  // 'string的值'

将String换成Object Function NaN都可

//迭代
var myMap = new Map();
myMap.set(0,"zero");
myMap.set(1,"one");

for(var [key,value] of myMap){  
    //或者myMap.keys() myMap.values()
    console.log(key + '=' + value);
}

//Map与Array转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];
var myMap = new Map(kvArray);
var outArray = Array.from(myMap);
console.log(outArray);
```

Set 对象存储的值总是唯一的  
`+0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；`  
`undefined 与 undefined 是恒等的，所以不重复；`  
`NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复.`  

```
//Set
let mySet = new Set();

mySet.add(1); // Set(1){1}
mySet.add(5); // Set(2){1,5}
mySet.add(5); // Set(2){1,5} 这里体现了唯一性
mySet.add('some text');  // Set(3){1,5,'some text'}


//Array转Set
var mySet = new Set(["value1", "value2", "value3"]);
//Set转Array
var myArray = [...mySet];

//String转Set
var mySet = new Set('Hello'); // Set(4){'H','e','l','l','o'}

//数组去重
var mySet = new Set([1,2,3,4,4]);
[...mySet] // [1,2,3,4]

//并集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a,...b]); // Set(4) {1, 2, 3, 4}
[...union]  //[1, 2, 3, 4]

//交集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}

//差集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}
```

`5.Proxy与Reflect`  

`6.扩展`  
- `字符串`
- `数值`
- `对象`
- `数组`

`7.(箭头)函数`  
`8.迭代器`  
- `Iterator`
- `for...of`

`9.class类`  
`10.模块`  
`11.异步编程`  
- `Promise对象`
- `Generator函数`
- `async函数`