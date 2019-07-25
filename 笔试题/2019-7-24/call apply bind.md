call apply bind的区别  
作用：`改变函数运行时this的指向`  
区别：  
`call`和`apply`改变了函数的this上下文后便执行该函数，  
`call`和`apply`是立即调用，  
`call apply`只是接受参数的方式不一样。   

`bind`返回改变了上下文后的一个函数，便于稍后调用  

1.call()  
`fun.call(thisArg[,arg1[,arg2[,...]]])`  
thisArg:fun函数运行时指定的this值
- 不传 或者传null undefined，this指向window对象
- 传另一函数的函数名fun2，this指向函数fun2的引用
- 值为原始值，this指向该原始值的自动包装对象 如`String Number Boolean`
- 传递一个对象，函数中的this指向这个对象
```
function fun1(){
    console.log(this);
}

function fun2(){
    
}

var obj = {name:'tnsihy'};

fun1.call(fun2);
顺序是执行fun1，因为要输出this，然后this又指向fun2，所以执行fun2
结果输出 function fun2(){}

fun1.call('');
结果输出 String

fun1.call(obj);
结果输出Object
```

2.apply()  
`fun.apply(thisArg[,argsArray])`
```
var array = [1,2,5,7,3,9,0];
var maxNumber = Math.max.apply(null,array);
console.log(maxNumber); // 9
```
3.bind()  
`fun.bind(thisArg[,arg1[,arg2[,...]]])`
- `bind()`方法会创建一个新函数，称为绑定函数
```
var bar = function(){
    console.log(this.x);
}

var foo = {
    x:3
}

var fun3 = bar.bind(foo);  //f(){ console.log(this.x) }
fun3();

结果输出
undefined
3
```

`使用call apply求数组的最大与最小值`
```
var arr = [1,3,5,2,7,6,4];

//最大值
Math.max.call(null,1,3,5,2,7,6,4);
Math.max.apply(null,arr);

//最小值
Math.min.call(null,1,3,5,2,7,6,4);
Math.min.apply(null,arr);
```

`将伪数组转变为数组   !!要有length属性才可以使用`
```
var arrayLike = {
    0:'tnsihy',
    1:'jgchen',
    2:'Mike',
    length:3
}

var arr = Array.prototype.slice.call(arrayLike);
结果为["tnsihy", "jgchen", "Mike"]
```
`利用call和apply做继承`
```
var Person = function(name,age){
    console.log('2');
    this.name = name;
    this.age = age;
    console.log('this',this);
}

var Girl = function(name){
    console.log('1');
    Person.call(this,name);
    console.log('this.name',this.name);
    console.log('3');
}

var Boy = function(name,age){
    Person.apply(this,arguments);
}

var g1 = new Girl('tnsihy');
// var b1 = new Boy('jgchen',20);

结果输出
1
2
this Girl { name: 'tnsihy', age: undefined }
this.name tnsihy
3
```