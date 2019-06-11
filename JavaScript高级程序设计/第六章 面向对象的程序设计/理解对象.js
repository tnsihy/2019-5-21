// 对象:无序属性的集合，其属性可以包含基本值、对象或者函数（名值对）
var person = new person();
person.name = 'Tom';
person.age = 20;
person.job = 'Software Engineer'
person.sayName = function(){
    alert(this.name);
}
// 字面量创建对象成为首选
var person = {
    name : 'Tom',
    age : 20,
    job :'Software Engineer',
    sayName :function(){
        alert(this.name)
    }
}
// 属性类型 只有内部才用的特性
// ECMAScript中有两种属性：数据属性和访问器属性
// 数据属性 默认为true
[[Configurable]] // 能否通过delete删除属性重新定义属性 能否修改属性的特性 能否把属性修改为访问器属性
[[Enumerable]]  // 能否通过for-in循环返回属性
[[Writable]]  // 能否修改属性的值
[[Value]]  //包含这个属性的数据值
// 要修改属性默认的特性，必须使用Object.defineProperty()方法 参数：属性所在的对象 属性名 一个描述符对象
var person = {};
Object.defineProperty(person,'name',{
    writable:false,
    value:'Tom'
})
person.name; // Tom
person.name = 'Greg';
person.name; // Tom

var person = {};
Object.defineProperty(person,'name',{
    configurable:false,
    value:'Tom'
})
person.name; // Tom
delete person.name; 
person.name; // Tom

// 访问器属性 不能直接定义，必须使用Object.defineProperty()来定义
[[Configurable]]
[[Enumerable]]
[[Get]] // 读取属性时调用 默认为undefined
[[Set]] // 写入属性时调用 默认为undefined

var book = {
    _year : 2004,
    edition : 1
};
Object.defineProperty(book,'year',{
    get : function(){
        return this._year
    },
    set : function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004
        }
    }
})
book.year = 2005;
book.edition // 2

// 定义多个属性Object.defineProperties()
var book = {};
Object.defineProperties(book,{
    _year:{
        writable : true,
        value : 2004
    },
    edition:{
        writable : true,
        value : 1
    },
    year : {
        get : function(){
            return this._year
        },
        set : function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
})

// 读取属性的特性Object.getOwnPropertyDescriptor() 可以取得给定属性的描述符
var book = {};
// 在调用Object.defineProperty()创建一个新的属性时，如果不指定，configuration enumeration writable默认值为false
Object.defineProperties(book,{
    _year : {
        value : 2004
    },
    edition:{
        value : 1
    },
    year :{
        get : function(){
            return this._year
        },
        set : function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
})
// 如果是数据属性，这个对象的属性有configurable enumerable writable value
// 如果是访问器属性，这个对象的属性有configurable enumerable get set
var descriptor = Object.getOwnPropertyDescriptor(book,'_year');
descriptor.value; // 2004
descriptor.configurable; // false
typeof descriptor.get // 'undefined'
