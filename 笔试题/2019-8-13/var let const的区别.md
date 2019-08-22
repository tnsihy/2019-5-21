var 和 let / const 的区别：  
1.let const 声明的全局变量不会挂在顶层对象window下面  
2.不存在变量提升  
3.不可重复声明  
4.块级作用域  
5.暂时性死区


`1.var声明变量会挂在window上`  
```
var a = 100;
console.log(a,window.a);
结果：
100 100

let b = 100;
console.log(b,window.b);
结果：
100 undefined

const c = 100;
console.log(c,window.c);
结果：
100 undefined
```

`2.var声明变量存在变量提升，let const不存在变量提升`  
```
console.log(a);
var a = 100;
结果：
100

console.log(b);
let b = 100;
结果：
报错 b is not defined  //未定义

consol.log(c);
const c = 100;
结果：
报错 c is not defined
```

`3.同一作用域下let和const不能声明同一变量，var可以`    
```
var a = 100;
console.log(a);

var a = 10;
console.log(a);
结果：
100
10

let b = 100;
console.log(b);
let b = 10;
console.log(b);
结果：
报错 Identifier 'b' has already been declared  //已经被声明

const c = 100;
console.log(c);
const c = 10;
console.log(c);
结果：
报错 Identifier 'b' has already been declared  //已经被声明
```

`4.块级作用域`  
ES5只有全局作用域和函数作用域，ES6引入了块级作用域。  
```
function f1(){
    let a = 100;
    if(true){
        let a = 10;
        console.log(a);
    }
    console.log(a);
}
f1();

结果：
10
100
---------------------------------

function f1(){
    if(true){
        let a = 10;
    }
    console.log(a);
}
f1();
结果：
a is not defined
```

`5.暂时性死区`  
只要块级作用域中存在let命令，它所声明的变量就绑定这个区域，不受外部影响。  
```
var tmp = 123;
if(true){
    tmp = 'Hello';  //报错
    let tmp;
}
```
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。  

---


`const注意的地方：`  
`一旦声明必须赋值，不能使用null占位。`  
声明后不能修改。  
如果声明的是`复合数据类型，可以修改其属性。`  
```
const a = 100;

const list = [];
list[0] = 10;
console.log(list);  // [10]

const obj = {a:100};
obj.name = 'apple';
obj.a = '1000';
console.log(obj);  // {a: "1000", name: "apple"}
```