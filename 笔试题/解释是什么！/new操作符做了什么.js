function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){

    }
}

var person1 = new Person("tnsihy",20,"student");
console.log(person1);
console.log(person1.__proto__ == Person.prototype);
// 返回true

// 那么new操作符的工作原理是什么呢?
function meanNew(fn,...arguments){
    // 1.创建一个类的实例（创建一个空对象obj，然后这个空对象的__proto__设置为Person.prototype(即构造函数的prototype)）
    var obj = {};
    obj.__proto__ = fn.prototype
    // 2.初始化实例（构造函数Person被传入参数并调用，关键字this诶设定指向obj）
    fn.apply(obj,arguments);
    // 3.返回实例obj
    return obj;
}

var person2 = meanNew(Person,"jgchenu",23,"teacher");
console.log(person2);
console.log(person2.__proto__ == Person.prototype);