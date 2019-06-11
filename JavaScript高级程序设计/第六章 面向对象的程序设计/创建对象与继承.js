// (自定义)构造函数模式
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    }
}
var person1 = new Person('Tom',20,'Software Engineer');
var person2 = new Person('Greg',23,'Doctor');
// person1 person2分别保存着Person的一个不同的实例。这两个对象都有一个constructor属性，该属性指向Person
person1.constructor == Person;  // true
person2.constructor == Person;  // true
// 上面该实例所创建的是Object实例也是Person实例
person1 instanceof Object; // true
person1 instanceof Person; // true

// 原型模式
// 创建的每一个函数都有一个prototype(原型)属性，是一个指针，指向一个对象，这个对象包含可以由特定类型的所有实例共享的属性和方法
function Person(){

}
Person.prototype.name = 'Tom';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name);
}
var person1 = new Person();
person1.sayName(); // Tom
var person2 = new Person();
person2.sayName(); // Tom
person1.sayName == person2.sayName; // true

// 理解原型对象
// Person.prototype.constructor 指向 Person

Person.prototype.isPrototypeOf(person1); // true
Person.prototype.isPrototypeOf(person2); // true
// 用原型对象的isPrototypeOf()方法测试person1和person2，因为它们内部有一个指向Person.prototype的在指针，因为返回true

Object.getPrototypeOf() // 返回[[Prototype]]的值
Object.getPrototypeOf(person1) == Person.prototype // true
Object.getPrototypeOf(person1).name // Tom

function Person(){

}
Person.prototype.name = 'Tom';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.name = 'Greg';
person1.name; // Greg 来自实例
person2.name; // Tom 来自原型
delete person1.name;
person1.name; // Tom 来自原型
// 可以使用hasOwnProperty()方法可以检测一个属性是存在实例中还是原型中
// 在对象实例中才会返回true
function Person(){

}
Person.prototype.name = 'Tom';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.hasOwnProperty('name'); //false
person1.name = 'Greg';
person1.hasOwnProperty('name'); //true

// in操作符
// in操作符会在通过对象能够访问给定属性时返回true，无论该属性存在于实例还是原型中
function Person(){

}
Person.prototype.name = 'Tom';
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.hasOwnProperty('name'); // false
'name' in person1; // true 来自原型

person2.name = 'Greg';
person2.hasOwnProperty('name'); // true 
'name' in person2; //true 来自实例
// 两者相结合，就能确定该属性是存在于对象中，还是存在原型中
function hasPrototypeProperty(Object,name){
    return !Object.hasOwnProperty(name) && (name in Object);
}

// 要取得对象上所有可枚举的实例属性，可以使用Object.keys()方法
function Person(){

}
Person.prototype.name = 'Tom'
Person.prototype.age = 20;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name);
}
var keys = Object.keys(Person.prototype);
keys; // 'name,age,job,sayName'
var person1 = new Person();
person1.name = 'Greg';
person1.age = 24;
var p1keys = Object.keys(person1);
p1keys; // 'name,age'
// 如果想要获取所有的实例属性Object.getOwnPropertyNames()
var keys = Object.getOwnPropertyNames(Person.prototype);
keys; //'constructor,name,age,job,sayName'

// 更简单的原型语法 更好的封装
function Person(){

}
Person.prototype = {
    name : 'Tom',
    age : 20,
    job : 'Software Engineer',
    sayName : function(){
        alert(this.name)
    }
}
// 但constructor属性不再指向Person了
// 每创建一个函数，就会同时创建它的prototype对象，这个对象也会自动获取constructor属性，在这里，本质上完全重写了默认的prototype对象，因此constructor属性也变成了新对象的constructor属性(指向Object构造函数)，不再指向Person函数
var friend = new Person();
friend instanceof Object; // true
friend instanceof Person;  // true
friend.constructor == Person;  // false
friend.constructor == Object; // true

// 组合使用构造函数模式和原型模式
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelby','Count'];
}
Person.prototype = {
    constructor : Person,
    sayName : function(){
        alert(this.name);
    }
}
var person1 = new Person('Nicholas',29,'Software Engineer');
var person2 = new Person('Greg',27,'Doctor');
person1.friends.push('Van');
person1.friends; // 'Shelby,Count,Van'
person2.friends; // 'Shelby,Count'
person1.friends === person2.friends; // false
person1.sayName === person2.sayName; // true

// 继承
// ECMAScript只支持实现继承，其实现继承主要是依靠原型链来实现
// 原型链
// 简单回顾构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。
// 实现原型链有一种基本模式，大致如下：
function SuperType(){
    this.prototype = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}
function SubType(){
    this.subproperty = false;
}
// 继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSuperValue = function(){
    return this.subproperty;
}
var instance = new SubType();
alert(instance.getSuperValue); // true

