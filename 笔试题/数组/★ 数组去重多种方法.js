// 1.indexOf循环去重
function removeRe1() {
    var arr = [1, 3, 4, 5, 6, 7, 4, 3, 2, 4, 5, 6, 7, 3, 2];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var one = removeRe1();
console.log(one);


/**
 * 2.ES6 Set去重 Array.from(new Set(array))
 * Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 * 类型转换：
 * Array转Set：var mySet = new Set(["value1","value2","value3"]);
 * Set转Array：var myArray = [...mySet];
 */
var arr = [1, 3, 4, 5, 6, 7, 4, 3, 2, 4, 5, 6, 7, 3, 2];
// 利用Set去重
var mySet = new Set(arr);
// Set转换为Array
var myArray = [...mySet];
// 或者是var myArray = Array.from(mySet);

console.log(myArray);

/**
 * 3.Object键值对去重
 * 把数组的值存成Object的key值，比如Object[value1] = true
 * 在判断另一值时，如果Object[value2]存在时，就说明是重复的。
 */

var arr = [1, 3, 4, 5, 6, 7, 4, 3, 2, 4, 5, 6, 7, 3, 2];

// 将数组转换为对象，利用对象key值不能重复这一特性
function toObject() {
    var arr = [1, 3, 4, 5, 6, 7, 4, 3, 2, 4, 5, 6, 7, 3, 2];
    var myObject = {};
    for (var i = 0; i < arr.length; i++) {
        myObject[arr[i]] = true;
    }
    return myObject;
}

// 再将对象转换为数组
function toArray(myObject){
    var newArr = [];
    for(var i in myObject){
        // i的类型为字符串，如果没有转化为Number类型，则输出[ '1', '2', '3', '4', '5', '6', '7' ]不是我们想要的。
        newArr.push(Number(i));
    }
    return newArr;
}


var result = toArray(toObject());
console.log(result);