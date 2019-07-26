Array类型  

`创建数组的基本方式 有两种：`
- 1.使用Array构造函数 也可以省略 `new` 操作符
  - `var arr = new Array();`
  - 创建length为20的数组
    - `var arr = new Array(20);` 
    - `var arr = Array(20);` 
  - 向Array构造函数传递数组中应该包含的项
    - `var arr = new Array('tnsihy','Mike','jgchen');`
    - `var arr = Array('tnsihy','Mike','jgchen');`

- 2.使用数组字面量表示法 由方括号及逗号组成
  - `var arr = ['tnsihy','Mike','jgchen'];`
  - 创建一个空数组
    - `var arr = [];`  

`读取和设置数组的值:` 
```
使用方括号及基于0的数字索引  

var arr = ['red','green','yellow'];

读取第一项
arr[0];

修改第三项
arr[2] = 'black';

新增第四项
arr[3] = 'grey';

----------------------------------

设置arr的长度
- 如果长度小于原本的数组长度，那么会移除最后的项
- 如果长度大于原本的数组长度，那么新增的项的值为undefined

var arr = ['red','green','yellow'];
arr.length = 2;
arr[2];  //undefined

var arr = ['red','green','yellow'];
arr.length = 4;
arr[3];  //undefined
```

`检测数组:`
- `Array.isArray(value)`


`将数组转换为别的形式:`
```
var arr = ['red','green','yellow'];
arr.toLocaleString();
结果输出 "red,green,yellow"
toLocalString()方法会创建一个数组值的以逗号分割的字符串


var arr = ['red','green','yellow'];
arr.toString();
结果输出 "red,green,yellow"
调用toString()方法会返回由数组中的每个值的字符串形式拼接而成的以逗号隔开的字符串


var arr = ['red','green','yellow'];
arr.valueOf();
结果输出 ["red", "green", "yellow"];
valueOf()返回的还是数组

var arr = ['red','green','yellow'];
arr.join(',');
结果输出 "red,green,yellow"
```

`栈方法push() pop()`
- push()
  - 可以接收任意数量的参数，逐个添加到数组末尾，并`返回修改后数组的长度`。
- pop()
  - 从数组末尾移除最后一项，`返回被移除的项`。

```
var arr = new Array();
var count = arr.push('red','black');
console.log(count); // 2

var item = arr.pop();
console.log(item); // 'black'
```

`队列方法unshift() shift()`
- unshift()
  - 在数组`前端`添加任意个项并`返回新数组的长度`。
- shift()
  - 移除数组中的`第一个项`并`返回该项`，并将数组的长度减1。

`重排序方法 reverse() sort()`  

- reverse()
  - `反转`数组项的顺序
- sort()
  - 默认以`升序`排序
  - sort()方法会调用每个数组项的toString()方法，得到`字符串`进行比较，故10会排在5前面

```
var arr = [5,7,3,7,1,2,4];
arr.reverse();
console.log(arr);
结果输出  [4, 2, 1, 7, 3, 7, 5]

比较函数：

升序：
function compare(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}

var arr = [0,1,5,10,15];
arr.sort(compare);
console.log(arr);
结果输出 [0, 1, 5, 10, 15]

那么降序：
function compare(value1,value2){
    if(value1 < value2){
        return 1;
    }else if(value1 > value2){
        return -1;
    }else{
        return 0;
    }
}
```

`操作方法`
- `concat()`
  - 可以基于当前数组中的所有项`创建一个新数组作为副本`
  - 参数会添加到副本的末尾，`返回新构建的数组`
  
- `slice()`
  - 可以基于当前数组中的一或多个项`创建一个新数组`
  - 接收一或两个参数，即要`返回的起始和结束位置`
  - 如果有两个参数，则不包括末尾项
  

splice()是在原数组上操作的!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
- `splice()`
  - `删除：`可以删除任意数量的项
    - 需提供`2个参数`
    - `要删除的第一项`和`要删除的项数`
    - 返回`被删除的项`
  
  - `插入：`可以向指定位置插入任意数量的项
    - 需提供`3个参数`
    - `起始位置`，0，`要插入的项`
    - 返回`被删除的项`，没有则返回空数组
  
  - `替换：`可以向指定位置插入任意数量的项，且同时删除任意数量的项
    - 需提供`3个参数`
    - `起始位置 要删除的项数 要插入的任意数量的项`


```
var arr = ['red','yellow','green'];
var arr2 = arr.concat('black',['grey','blue']);
console.log(arr);
console.log(arr2);

结果输出 
["red", "yellow", "green"]
["red", "yellow", "green", "black", "grey", "blue"]


--------------------------------------------------
var arr = ['red','yellow','green','black','grey'];
var arr2 = arr.slice(1);
var arr3 = arr.slice(1,4);
console.log(arr2);
console.log(arr3);

结果输出
["yellow", "green", "black", "grey"]
["yellow", "green", "black"]


-------------------------------------------------
var arr = ['red','green','blue'];
var arr2 = arr.splice(0,1);
console.log(arr);
console.log(arr2);

结果输出
["green", "blue"]
["red"]

arr2 =  arr.splice(1,0,'yellow','orange');
console.log(arr);
console.log(arr2);

结果输出
["green","yellow","orange","blue"]
[]  //返回一个空数组，因为没有删除项

arr2 = arr.splice(1,1,'red','purple');
console.log(arr);
console.log(arr2);

结果输出
["green","red","purple","orange","blue"]
["yellow"]
```

`位置方法 indexOf() lastIndexOf()`
- 都接收两个参数，`要查找的项`，表示`查找起点位置的索引`（可选）
- indexOf()方法从数组的开头向后查找
- lastIndexOf()方法从数组的末尾向前查找
- 都`返回要查找的项在数组中的位置`，没找到时返回-1

```
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.indexOf(4);
numbers.lastIndexOf(4); 
结果输出 
3
5

var numbers = [1,2,3,4,5,4,3,2,1];
numbers.indexOf(4,4);
numbers.lastIndexOf(4,4);
结果输出
5
3
```

`迭代方法 every() filter() forEach() map() some()`
 - 都接收`两个参数`，要在每一项上`运行的函数`和运行该函数的`作用域对象`---影响this值
 - 传入这些方法的函数会接受`三个参数`，数组项的值，该项在数组中的位置和数组对象本身。

- `every()`
  - 对数组的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
- `some()`
  - 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
- `filter()`
  - 对数组中的每一项运行给定函数，`返回该函数会返回true的项组成的数组`
- `map()`
  - 对数组中的每一项运行给定函数，`返回每次调用的结果组成的数组`。可以进行运算。
- `forEach()`
  -  对数组中的每一项运行给定函数。这个方法`没有返回值`。

```
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
    return (item > 2);
})
console.log(everyResult);
结果输出false

var someResult = numbers.some(function(item,index,array){
    return (item > 2);
})
console.log(someResult);
结果输出true


----------------------------------------------------------
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item,index,array){
    return (item > 2);
})
console.log(filterResult);
结果输出 [3, 4, 5, 4, 3]


----------------------------------------------------------
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item,index,array){
    return item * 2;
})
console.log(mapResult);
结果输出 [2, 4, 6, 8, 10, 8, 6, 4, 2]


----------------------------------------------------------
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item,index,array){
    //执行某些操作
})
```

`归并方法reduce() reduceRight()`
- 都会迭代数组的所有项，然后构建一个最终返回的值。
- reduce()方法从数组的第一项开始，逐个遍历
- reduceRight()方法从数组的最后一项开始，向前遍历
- 接收`两个参数`，在`每一项上调用的函数`和`作为归并基础的初始值`（可选）
- 传入这些方法的函数接收`4个参数`，前一个值，当前值，项的索引和数组对象。

```
使用reduce()可以求数组中所有值之和的操作
var arr = [1,2,3,4,5];
var sum = arr.reduce(function(prev,cur,index,array){
    return prev + cur;
})
console.log(sum);
结果输出
15

reduceRight()同样
var arr = [1,2,3,4,5];
var sum = arr.reduceRight(function(prev,cur,index,array){
    return prev + cur;
})
console.log(sum);
结果输出
15
```

