> `箭头函数this指向是函数被创建时绑定，它的指向就是当前词法作用域中的this，并且不会因为被什么样的方式调用而改变。`

> 例子1
```
// 这里只能用var定义变量，因为let const定义的变量，不绑定在window下。
var str = "window";

const obj = {
    str:"obj",
    nativeFn:function(){
        console.log(this.str,"当前词法作用域中的this");
        return function(){
            console.log("原生函数",this.str);
        }
    },
    arrowFn:function(){
        console.log(this.str,"当前词法作用域中的this");
        return ()=>{
            console.log("箭头函数",this.str);
        }
    }
};

const obj2 = {
    str:"obj2"
}

var nativeFn = obj.nativeFn();
var arrowFn = obj.arrowFn();

console.log("函数调用一 ***************");
nativeFn();
arrowFn();

console.log("函数调用二 ***************");
nativeFn.call(obj2);
arrowFn.call(obj2);

console.log("函数调用三 ***************");
setTimeout(function(){
    nativeFn();
    arrowFn();
},50);

var doc = document.documentElement;
doc.str = "document";
doc.addEventListener("click",function(){
    console.log("函数调用四 ***************");
},false);
doc.addEventListener("click",nativeFn,false);
doc.addEventListener("click",arrowFn,false);


结果输出：
obj 当前词法作用域中的this
obj 当前词法作用域中的this

函数调用一 ***************
原生函数 window
箭头函数 obj

函数调用二 ***************
原生函数 obj2
箭头函数 obj

函数调用三 ***************
原生函数 window
箭头函数 obj

函数调用四 ***************
原生函数 document
箭头函数 obj
```

> 例子2
```
// 这里只能用var定义变量，let const定义的变量，不绑定在window下。
var str = "window";

const obj = {
    str:"obj",
    fn:()=>{
        console.log(this.str)
    }
}
obj.fn();

//window
```
这个时候this竟指向了window对象，如何理解如下！
```
var str = "window";

const obj = {
    str:"obj",
    fn:()=>{
        console.log(this.str);
    },
    fn2:()=>{
        console.log(this.str,"当前词法作用域中的this");
        return {
            str:"newObj",
            fn:()=>{
                console.log(this.str);
            }
        }
    }
}

obj.newFn = ()=>{
    console.log(this.str);
}

obj.fn();  // window
obj.newFn();  // window

var newObj = obj.fn2(); // window 当前词法作用域中的this 然后return{}
newObj.fn(); // window
```
???不懂