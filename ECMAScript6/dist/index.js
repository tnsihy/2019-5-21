"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var z = 1;
console.log('ES6最基本语法' + z);

// -----------2.三种变量声明----------------
//  for (var i = 0; i < 10; i++) {
//      console.log("循环体内" + i);
//  }
//  console.log("循环体外" + i)

//  for (let j = 0; j < 10; j++) {
//      console.log("循环体内" + j)
//  }
// console.log("循环体外" + j)  报错！

// -----------3.变量的解构赋值---------------
// 3-1 数组的解构赋值
//  let a = 0
//  let b = 1
//  let c = 2
var a = 0,
    b = 1,
    c = 2;

console.log(a);
console.log(b);
console.log(c);
// 默认值
var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;
var _ref2 = ["tnsihy"],
    d = _ref2[0],
    _ref2$ = _ref2[1],
    e = _ref2$ === undefined ? "jgchen" : _ref2$;

console.log('默认值：' + d + e);

// 3-2 对象的解构赋值
var _fool$bar = {
    fool: 'tnsihy',
    bar: 'jgchen'
},
    fool = _fool$bar.fool,
    bar = _fool$bar.bar;

console.log('对象的解构赋值' + fool + bar);

// 如果在解构之前就定义了变量，这时候你再解构会出现问题 解决方式如下
var demo = void 0;
var _demo = {
    demo: '1'
};
demo = _demo.demo;

console.log('加括号避坑：' + demo);

// 3-3 字符串解构赋值

var _tnsihy = 'tnsihy',
    _tnsihy2 = _slicedToArray(_tnsihy, 6),
    f = _tnsihy2[0],
    g = _tnsihy2[1],
    h = _tnsihy2[2],
    i = _tnsihy2[3],
    j = _tnsihy2[4],
    k = _tnsihy2[5];

console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);

// -----------4.扩展运算符和rest运算符---------------
// 4-1 扩展运算符  不知道传进来的参数有多少个
function tnsihy() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
tnsihy(1, 2, 3);

// let arr1 = ['www','baidu','com'];
// let arr2 = arr1;
// console.log(arr2); // 结果是['www','baidu','com']
// arr2.push('jgchen')
// console.log(arr1); // 结果是['www','baidu','com','jgchen'] 但不是我们想要的结果
// 解决如下:
var arr1 = ['www', 'baidu', 'com'];
var arr2 = [].concat(arr1);
console.log(arr2);
arr2.push('jgchen');
console.log(arr2); // 结果是['www','baidu','com','jgchen']
console.log(arr1); // 结果是['www','baidu,'com']

// 4-2 rest(剩余)运算符
function tnsihy(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log('rest(剩余)运算符' + arg.length);
    // 想要输出剩余的数组中的元素 for of循环
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
tnsihy(0, 1, 2, 3, 4, 5, 6, 7);

// ----------------5.字符串模板--------------------
var jspang = "技术胖";
var blog = "非常高兴你能看到这篇文章，我是你的老朋友" + jspang + "。这节课我们学习字符串模板。";
var newBlog = "<br/>\u975E\u5E38\u9AD8\u5174\u4F60\u80FD\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\uFF0C<b>\u6211\u662F\u4F60\u7684\u8001\u670B\u53CB</b>" + jspang + "\u3002\u8FD9\u8282\u8BFE\u6211\u4EEC\u5B66\u4E60\u5B57\u7B26\u4E32\u6A21\u677F\u3002";
document.write(blog);
document.write('改进版ES6：' + newBlog);

// 判断技术胖（jsang变量值）存不存在（blog变量值）里边
document.write('indexOf()：' + blog.indexOf(jspang) > 0); // 结果为true
// ES6
document.write('includes()：' + blog.includes(jspang)); //直接判断true或者false
// 查找开头有没有 结尾有没有
document.write('startsWith():' + blog.startsWith("非常")); //结果返回true
document.write('endsWith()' + blog.endsWith("老朋友")); //结果返回false

// 支持一般的运算
var l = 1;
var m = 2;
var result = "" + (l + m);
document.write('支持运算：' + result);

// 复制字符串
document.write('复制字符串' + 'jspang|'.repeat(3)); //输出jspang|jspang|jspang|

// --------------6.数字操作------------------
// 6-1 二进制数字 Binary
var binary = 21;
console.log('二进制数字' + binary); // 21
// 6-2 八进制数字 Octal
var octal = 438;
console.log('八进制数字' + octal); // 438
// 数字判断
// isFinite() 函数用于检查其参数是否是无穷大。如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
var demo2 = 11 / 4;
console.log('isFinite():' + Number.isFinite(demo2)); // true
// 下边三种是false
console.log(Number.isFinite('jspang'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

console.log('isNaN' + Number.isNaN(1));
console.log(Number.isInteger(244)); // 判断是否为整数
console.log(Number.parseFloat()); // 转换
console.log(Number.parseInt());

// 整数取值范围
var demo3 = Math.pow(2, 53) - 1; //整数的操作是有一个取值范围的，它的取值范围就是2的53次方
console.log(demo3);
console.log('最大安全整数' + Number.MAX_SAFE_INTEGER); // 打印最大安全整数
console.log('最小安全整数' + Number.MIN_SAFE_INTEGER); // 打印最小安全整数 当超过最大值或者最小值时最好转换为字符串显示，避免报错
console.log(Number.isSafeInteger(demo3)); //判断是否安全整数 返回true

// --------------7.数组操作-1----------------
//json数组格式
var json = {
    '0': 'tnsihy',
    '1': 'jgchen',
    '2': '小君君',
    length: 3
    // 第一种方法：json转换为数组Array.from()
};var arr3 = Array.from(json);
console.log(arr3);
// 第二种方法：一堆字符串转换为数组Array.of()
var arr4 = Array.of('tnsihy', 'jgchen', '小君君');
console.log(arr4);
// 第三种方法：（查找符合条件的数组元素）find()实例方法
var arr5 = ['tnsihy', 'jgchen', '小君君'];
console.log(arr5.find(function (value, index, arr5) {
    return value == 'jgchen'; //输出jspang 若查找不到则返回undefined
}));

// --------------8.数组操作-2--------------
// 1.Array.fill(value,start,end)填充替换  value填充值 start填充起始位置，可省 end填充结束位置，可省，实际结束位置是end-1
var arr6 = ['tnsihy', 'jgchen', '小君君'];
arr6.fill('web', 1, 2); //结果为['tnsihy','web','小君君']
console.log(arr6);
// 2.数组循环for of
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr6[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item2 = _step2.value;

        console.log(_item2);
    }
    // 如何输出的是下标 keys()
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr6.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var itemIndex = _step3.value;

        console.log(itemIndex);
    }
    // 如何一起输出下标和value值 entries()
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arr6.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            index = _step4$value[0],
            value = _step4$value[1];

        console.log(index + ':' + value);
    }
    // 2.entries()实例方法
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var arr7 = ['tnsihy', 'jgchen', '小君君'];
var list = arr7.entries();
console.log(list.next().value); //[0,"tnsihy"]
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value); // undefined

// ----------------9.箭头函数和扩展----------------------
function addDemo1(a, b) {
    return a + b;
}
console.log(addDemo1(1, 2)); // 3

function addDemo2(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a + b;
}
console.log(addDemo2(1)); //2

// 主动抛出异常
function addDemo3(a, b) {
    if (a == 0) {
        throw new Error('A is Error');
    }
    return a + b;
}
// console.log(addDemo3(0,1));  //即抛出错误

// function addDemo4(a,b=1){
//     return a + b;
// }
// console.log(addDemo4.length); //.length表示该函数必须传递的参数个数 因为b已定义值，故addDemo4.length = 1;

// 箭头函数
var addDemo4 = function addDemo4(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    console.log('tnsihy');
    return a + b;
};
console.log('箭头函数:' + addDemo4(1));

// ---------------10.ES6中的函数和数组补漏---------------------
var jsonDemo = {
    a: 'jspang',
    b: '技术胖'
};

function fun(_ref3) {
    var a = _ref3.a,
        _ref3$b = _ref3.b,
        b = _ref3$b === undefined ? 'web' : _ref3$b;

    console.log(a, b);
}
fun(jsonDemo);

// 数组解构
var arr8 = ['tnsihy', 'jgchen', '小君君'];

function fun(a, b, c) {
    console.log(a, b, c); //输出tnsihy jgchen 小君君
}
fun.apply(undefined, arr8);

// 对象判断有没有值  用in
console.log('a' in jsonDemo); // true
console.log('c' in jsonDemo); // false
// 数组 in用法
var arr9 = ['tnsihy',,,];
console.log(0 in arr9); //返回true
console.log(1 in arr9); //返回false

// 遍历数组的方法
// 1.forEach
var arr10 = ['jgpang', '技术胖', '前端视频'];
arr10.forEach(function (value, index) {
    console.log(index, value);
});
// 2.filter
arr10.filter(function (value, index) {
    console.log(index, value);
});
// 3.some
arr10.some(function (value, index) {
    console.log(index, value);
});
// 3.map
arr10.map(function (value, index) {
    console.log(index, value);
});
// 也可以替换
console.log(arr10.map(function (x) {
    return 'web';
})); //结果为['web','web','web']

// 转换为字符串
console.log('转换为字符串:' + arr10.toString());
console.log(arr10.join('|'));

// --------------11.ES6中对象------------------
var name = 'tnsihy';
var skill = 'Web技术';
var objDemo1 = { name: name, skill: skill };
console.log(objDemo1); // {name:'tnsihy',skill:'Web技术'}

//  key值的构建
var key = "skill";
var objDemo2 = _defineProperty({}, key, 'Web技术');
console.log(objDemo2);

// 自定义对象方法
var objDemo3 = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(objDemo3.add(1, 2));

// 两个对象进行比较  ===同值相等 is严格相等
console.log(Object.is(0, 1));

console.log(+0 === -0); //返回true
console.log(NaN === NaN); //返回false
console.log(Object.is(+0, -0)); //返回false
console.log(Object.is(NaN, NaN)); //返回true

// assign 合并对象
var objDemo4 = { a: 'tnsihy' };
var objDemo5 = { b: 'jgchen' };
var objDemo6 = { c: '小君君' };
var n = Object.assign(objDemo4, objDemo5, objDemo6);
console.log(n);

// ---------------12.Symbol(数据类型)在对象中的作用-------------------
// 以前学过的数据类型
// let a = new String;
// let b = new Boolean;
// let c = new Number;
// let d = new Array;
// let e = new Object;

var o = Symbol();
console.log(typeof o === "undefined" ? "undefined" : _typeof(o));
var symDemo1 = Symbol('小君君');
console.log(symDemo1);
console.log(symDemo1.toString());
// Symbol在对象中的应用 --->key值的构建
var symDemo2 = Symbol();
var objDemo7 = _defineProperty({}, symDemo2, 'Web技术');
console.log(objDemo7[symDemo2]);
objDemo7[symDemo2] = 'javaScript技术';
console.log(objDemo7[symDemo2]);
// 循环输出对某个对象进行保护(例如对年龄age进行保护)

// 1.不保护的情况
var objDemo8 = { name: '小君君', skill: 'Vue', age: 18 };
for (var item in objDemo8) {
    console.log(objDemo8[item]);
}
// 2.保护的情况
var objDemo9 = { name: '小君君', skill: 'Vue' };
var age = Symbol();
objDemo9[age] = 18;
console.log(objDemo9); //{name: "小君君", skill: "Vue", Symbol(): 18}
for (var _item in objDemo9) {
    console.log(objDemo9[_item]); //对age=18进行隐藏
}
console.log(objDemo9[age]); //输出18

// ----------13.Set和WeakSet数据结构-------------------
// Set的数据结构是以数组的形式构建的--->Set的增删查
var setArr = new Set(['tnsihy', 'jgchen', '小君君']);

// 为数组添加新的元素 setArr.push()失败！
setArr.add('前端职场'); //setArr.add()成功！ 若是追加相同的值，则不管用
console.log(setArr); //返回Set(4) {"tnsihy", "jgchen", "小君君", "前端职场"}
// 查找
console.log(setArr.has('tnsihy')); //返回true
// 删除某个
setArr.delete('tnsihy');
console.log(setArr);
// 删除全部
setArr.clear();
console.log(setArr);
// 循环输出
var setArrDemo = new Set(['tnsihy', 'jgchen', '小君君']);
// 第1种
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = setArrDemo[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _item3 = _step5.value;

        console.log('for...of:' + _item3);
    }
    // 第2种
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

setArrDemo.forEach(function (value) {
    console.log('forEach:' + value);
});
// size返回大小，自动去重
console.log(setArrDemo.size); // 3

// WeakSet
var weakObj = new WeakSet();

var obj = { name: 'tnsihy', sex: '女' };
var obj1 = { name: 'tnsihy', sex: '女' };
weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj); // 当内存空间不相同的话 是可以重复的

// 若是let obj1 = obj,指向的内存相同则不能重复

// --------------13.map数据结构----------------
var jsonDemo1 = {
    name: 'tnsihy',
    skill: 'Web'
};
console.log(jsonDemo1.name);
// 声明map“->” 一个key值一个value值
var map = new Map();
map.set(json, "iam"); //json作为key值,"iam"是value值
console.log(map);
map.set('jgchen', json); //用set增加
console.log(map);

// map增删查
console.log(map.get(json)); //取值，返回iam
console.log(map.get('jgchen')); //{0: "tnsihy", 1: "jgchen", 2: "小君君", length: 3}
// size长度
console.log(map.size); // 2
// 查找
console.log(map.has('jgchen')); //true
map.delete(json);
// 删除某个
console.log(map);
// 删除全部
map.clear();
console.log(map);

// ----------------15.用Proxy（代理）进行预处理---------------------
//  Proxy在ES6当中是一种增强 对象和函数（方法）生命周期 钩子函数 预处理
var pro = new Proxy({
    add: function add(value) {
        return value + 100;
    },
    name: 'I am tnsihy'
}, {
    // get set apply
    get: function get(target, key, property) {
        console.log('come in Get'); //进入了预处理机制
        // console.log(target); //{add: ƒ, name: "I am tnsihy"}
        // console.log(key); //name
        // console.log(property); //Proxy {add: ƒ, name: "I am tnsihy"}
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        //value要改变的值 receiver原始值
        console.log("setting " + key + " = " + value); //输出setting name = 技术胖
        return target[key] = value; //必须将改变的结果进行返回
    }
});
console.log(pro.name); //输出I am tnsihy;若没有return target[key]则输出undefined
pro.name = '技术胖';
console.log(pro.name); //输出 '技术胖'

//apply
var target = function target() {
    return 'My name is tnsihy';
};
// 对方法的预处理
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('DO APPLY');
        console.log(target); //ƒ target() {return 'My name is tnsihy';}
        return Reflect.apply.apply(Reflect, arguments); //?
    }
};
var proDemo = new Proxy(target, handler);
console.log(proDemo.apply());

// -----------------16.promise（承诺）对象的使用---------------------------
// 解决了ES5中回调地狱问题
var state = 1;
function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭-完成');
    } else {
        reject('洗菜做饭-出错');
    }
}
function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    // state = 0会出错
    if (state == 1) {
        resolve('坐下来吃饭-完成');
    } else {
        reject('坐下来吃饭-出错');
    }
}
function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗碗');
    if (state == 1) {
        resolve('收拾桌子洗碗-完成');
    } else {
        reject('收拾桌子洗碗-出错');
    }
}
new Promise(step1).then(function (value) {
    console.log(value);
    return new Promise(step2);
}).then(function (value) {
    console.log(value);
    return new Promise(step3);
}).then(function (value) {
    console.log(value);
});
/*
1.开始-洗菜做饭
洗菜做饭-完成
2.开始-坐下来吃饭
坐下来吃饭-完成
3.开始-收拾桌子洗碗
收拾桌子洗碗-完成
*/

// ------------------17.class类的使用(类的多方法声明)----------------------

var Coder = function () {
    _createClass(Coder, [{
        key: "name",
        value: function name(value) {
            console.log(value);
            return value;
        }
        // 在class中不用写逗号

    }, {
        key: "skill",
        value: function skill(value) {
            console.log(this.name('小君君') + ':' + 'Skill-' + value);
        }
        // 类的传参

    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: "add",
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var coderDemo = new Coder();
coderDemo.name('小君君');
coderDemo.skill('web');

// 利用constructor传参
var coderDemo1 = new Coder(1, 2);
console.log(coderDemo1.add()); //返回3

// 继承?

var htmler = function (_Coder) {
    _inherits(htmler, _Coder);

    function htmler() {
        _classCallCheck(this, htmler);

        return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
    }

    return htmler;
}(Coder);

var htmlerDemo = new htmler();
htmlerDemo.name('我是小君君');

// --------------18.模块化操作-------------------
// export输出  import引入
// // 写在src/temp.js
// import {nameDemo} from './temp';
// console.log(nameDemo);
// // 引入方式为花括号
// import {nameDemo,Boy,skill} from './temp'
// // export default引入方式 sky可以随便起名字 不需要知道temp.js中具体是什么
// import sky from './temp'
